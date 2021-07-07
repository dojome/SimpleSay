// And then you can use the config in gatsby-config.js
//const config = require('gatsby-plugin-config');
/*
  
*/

const queries = require('./src/utils/algolia')

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Simply Say`,
    description: `Personalised Greeting Cards`,
    author: `@gatsbyjs`,
  },
  plugins: [      
    `gatsby-plugin-sharp`,  
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-zopfli',
    //'gatsby-transformer-remark',
    `gatsby-plugin-styled-components`, 
    `gatsby-parallel-runner`, 
    `gatsby-plugin-sass`,     
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        // The option defaults to true
        checkSupportedExtensions: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat`,
          `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
     },   
     {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.simplysay.sg',
        sitemap: 'https://www.simplysay.sg/sitemap.xml',
        policy: [{ userAgent: '*', disallow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },      
    {
      resolve: `gatsby-source-drupal`,
      options: {                
        baseUrl: process.env.DRUPAL_INSTANCE,
        apiBase: `jsonapi`,
        concurrentFileRequests: 60,
        basicAuth: {
          username: process.env.BASIC_AUTH_USERNAME,
          password: process.env.BASIC_AUTH_PASSWORD,
        },
      },
    },   
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
        options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
        options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },        
    },
    {
      resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            {
              resolve: `@weknow/gatsby-remark-drupal`,
              options: {
                nodes: [`commerceProductGreetingCards`]
              }
            }
          ]
        },     
    },
    {
      resolve: 'gatsby-plugin-algolia',
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.GATSBY_ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-snipcart-advanced`,
      options: {
          version: '3.0.23',
          publicApiKey: process.env.GATSBY_SNIPCART_PUBLIC_API_KEY,
          defaultLang: 'en',
          currency: 'sgd',
          openCartOnAdd: true,
      },
  },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],  
}

console.log(process.env); // should show all registered env variables
