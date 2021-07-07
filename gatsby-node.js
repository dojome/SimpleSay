/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/app/)) {
    page.matchPath = `/*`

    // Update the page.
    createPage(page)
  }
}

exports.onCreateWebpackConfig = ({ getConfig, stage, actions  }) => {    
  actions.setWebpackConfig({
    externals: ['canvas']    
  })
  
  const config = getConfig()
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom',
    }
  }
}

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions; 
    
  if (node.internal.type === `commerce_product__greeting_cards`) {
    const productUrl = node.title.replace(/\s+/g, '-').toLowerCase();     
    createNodeField({
        node,
        name: `greetingCardPathUrl`,
        value: productUrl,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
     allCommerceProductGreetingCards
      (filter: {relationships: {field_category: {status: {eq: true}}}})
      {     
        edges {
          node {
            id
            field_sku
            title 
            fields {
              greetingCardPathUrl
            }        
            relationships {
              field_category {
                status
                field_url {
                  value
                }                                
              }
            }
          }
        }
      }
    }       
  `
  ).then(result => {   
    // Create individual greeting card product pages (Drupal taxonomy)
    result.data.allCommerceProductGreetingCards.edges.forEach(({ node }) => {    
      const cardCategory = '/greeting-cards/' + node.relationships.field_category.field_url.value;      
      const greetingCardPath = cardCategory + '/' + node.fields.greetingCardPathUrl;
      createPage({
        path: greetingCardPath,        
        component: path.resolve(`./src/components/Products/GreetingCards/GreetingCardsPage/index.js`),
        context: {
          id: node.title,          
        },
      })
    })    
    // Create pages with a list view of all the cards per category
    result.data.allCommerceProductGreetingCards.edges.forEach(({ node, actions }) => {
      const cardCategory = '/greeting-cards/' + node.relationships.field_category.field_url.value;
      const greetingCardPath = cardCategory + '/' + node.fields.greetingCardPathUrl;
      createPage({
        path: cardCategory,
        component: path.resolve(`./src/components/Products/GreetingCards/GreetingCardsView/index.js`),
        context: {     
          id: node.relationships.field_category.field_url.value,       
          cardsPath: greetingCardPath,          
        },
      })
    })    
  })
}