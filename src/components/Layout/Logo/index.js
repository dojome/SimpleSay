import React from "react"
import {Link, useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import * as Styles from './styles';

export default function Logo() {
  const data = useStaticQuery(graphql`
    query {
      file(name: {eq: "logo"}) {
        name
        relativePath      
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_noBase64            
          }
        }
      }          
    } 
  `
  )
  return (         
    <Styles.Logo>
        <Link to="/"><Img fluid={ data.file.childImageSharp.fluid } /></Link>
    </Styles.Logo>     
  )
}