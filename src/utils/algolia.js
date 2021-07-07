const simplySayQuery = `{
  cards: allCommerceProductGreetingCards {
    edges {
      node {
        objectID: id,
        title,
        field_sku,
        fields {
          greetingCardPathUrl
        }
        relationships {
          field_brand {
            name
          }
          field_license_owner {
            name
          }
          field_orientation {
            name
          }
          field_sorting {
            name
          }
          field_styles {
            name
          }
          field_recipient {
            name
          }
          field_caption_group {
            name
          }
          field_events {
            name
          }
          field_category {
            name,
            field_url {
              value
            }
          }
          field_image {
            localFile {
              childImageSharp {
                fixed (width: 155) {
                  base64               
                  aspectRatio
                  width
                  height
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  originalName
                }
              }
            }
          }                   
        }        
      }
    }
  }
}`


const flatten = arr =>
  arr.map(({ node: { node, ...rest } }) => ({
    ...node,
    ...rest,
  }))

const queries = [
  {
    query: simplySayQuery,
    transformer: ({ data }) => flatten(data.cards.edges),
    indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME
  }  
]

module.exports = queries