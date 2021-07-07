import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Fabric from './Fabric'

const Image = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allCommerceProductGreetingCards {
          edges {
            node {
              id              
              field_outlay_card_json       
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.id.includes(props.ProductId);        
      });
      
      if (!image) {
        return (
          <div><p>Image not found! props missing or backend broken :(</p></div>
        )
      }

      //const imageSizes = image.node.childImageSharp.sizes; sizes={imageSizes}
      //return <Img alt={image.node.title} fluid={image.node.relationships.field_image.localFile.childImageSharp.fluid} />;
      //<p>{image.node.field_outlay_json }</p>       
      //<Fabric fieldOutlayJson={image.node.field_outlay_json }/>
      return <div><Fabric fieldOutlayJson={image.node.field_outlay_card_json} {...props}/></div>;
    }}
  />
);

export default Image;