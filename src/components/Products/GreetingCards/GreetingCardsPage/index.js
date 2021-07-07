import React from 'react';
import Button from '@material-ui/core/Button';
import { Link, graphql } from 'gatsby';
import Layout from '../../../Layout';
import * as Styles from './styles';
import MultiStepForm from '../../../MultiStepFormNew'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
	  '& > *': {
		margin: theme.spacing(1),
		width: '25ch',
	  },
  },
  button : {
	  backgroundColor: '#6495C6',
	  color: 'white',
	  width: '80px',	
	  boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',  
  },
  input: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderColor: 'rgba(0,0,0.1)',
    color: '#282828',
    paddingLeft: 25,
    paddingRight: 25,
    marginLeft: 10,
    marginRight: 10,
  }

  }))

export const query = graphql`
  query($id: String!) {
    commerceProductGreetingCards(title: { eq: $id }) {
      id
      title
      relationships {
        field_type {
          name
        }
        field_category {
          name
          field_url {
            value
          }
        }
        field_image {
          filename
        }
      }                          
    }
  }
`
export default function Product({ data }) {    
    const greetingCard = data.commerceProductGreetingCards;        
    const productId = greetingCard.id;    
    const greetingCardTitle = greetingCard.title
    const greetingCardCategoryUrl = greetingCard.relationships.field_category.field_url.value;
    const greetingCardType = greetingCard.relationships.field_type.name;
    const productImageFileName = greetingCard.relationships.field_image.filename;

    return (
      <Layout>            
        <MultiStepForm 
          productId={productId} 
          categoryUrl={greetingCardCategoryUrl}
          cardType = {greetingCardType}
          title={greetingCardTitle} 
          productImage={productImageFileName}
        />
      </Layout>
    )
  }  

//<ProductMultiStepForm productId={ProductId} categoryUrl={greetingCardCategoryUrl}/>   