import React from "react"
import {Link, useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import * as Styles from './styles';

export default function SiteBanners() {
  const data = useStaticQuery(graphql`
        query {
            taxonomyTermAdverts(name: {eq: "Primary Site Banner"}) {
                name
                relationships {
                    field_image {
                        localFile {
                            childImageSharp {
                                fluid (maxWidth: 2000, quality: 100) {
                                    ...GatsbyImageSharpFluid_withWebp_noBase64                                     
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
    <Styles.SiteBanners>
        <Img fluid={ data.taxonomyTermAdverts.relationships.field_image.localFile.childImageSharp.fluid } />
    </Styles.SiteBanners>     
  )
}