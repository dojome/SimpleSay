import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import * as Styles from "./styles"
import { Grid } from '@material-ui/core';

export default function FrontPageProductCategories() {
  const data = useStaticQuery(graphql`
    query {
      allTaxonomyTermCategory(sort: {fields: [weight], order: ASC}, filter: {status: {eq: true}}) {
        edges {
          node {
            id
            name
            weight
            status
            field_url {
              value
            }
            relationships {
             field_image {
                localFile {
                  childImageSharp {
                    fixed (width: 155) {
                      base64                      
                      width
                      height
                      src
                      srcSet
                      srcWebp
                      srcSetWebp                  
                    }
                  }
                }           
              }        
            }
          }
        }
      }
    }
  `
  )
  return (
    <Styles.FrontPageProductCategoriesLayout>
      <Grid container spacing={0}>
         {data.allTaxonomyTermCategory.edges.map(edge => (
          <>
          {edge.node.name != 'Blank' &&                 
            <Grid item xs={6} sm={3} md={2} lg={2}>
              <Link to={'/greeting-cards/'+ edge.node.field_url.value }>                
                <Img alt={edge.node.name} fixed={ edge.node.relationships.field_image.localFile.childImageSharp.fixed } />                                
                <Styles.ProductName>{edge.node.name}</Styles.ProductName>
              </Link>                                                   
            </Grid>
          }
          </>
        ))}  
      </Grid>
    </Styles.FrontPageProductCategoriesLayout>      
  )
}