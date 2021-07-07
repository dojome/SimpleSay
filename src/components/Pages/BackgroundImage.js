import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {               
      },
    bgImage : {
        backgroundSize: `cover`, 
        backgroundPosition: `center`,         
        margin: `0 -10px`, 
        [theme.breakpoints.down('sm')]: {
            minHeight: `700px`,
          },
          [theme.breakpoints.up('md')]: {
            minHeight: `800px`,
          },
          [theme.breakpoints.up('lg')]: {
            minHeight: `800px`,
          },           
    }
  }));

export default function BackgroundSection(props) {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    query {
        taxonomyTermAdverts(name: {eq: "Login/Register Background"}) {
            name
            relationships {
                field_image {
                    localFile {
                        childImageSharp {
                            fluid(maxWidth: 1300, quality: 75) {
                                ...GatsbyImageSharpFluid_withWebp_noBase64 
                                srcWebp          
                            }
                        }
                    }
                }
            }
        } 
    }
  `
  )

  const bgImage = data.taxonomyTermAdverts.relationships.field_image.localFile.childImageSharp.fluid.srcWebp
  
  return (      
        <div className={classes.bgImage}  css={{ backgroundImage: `url(${bgImage})` }}>
            {props.children}
        </div>    
  )
  
}
