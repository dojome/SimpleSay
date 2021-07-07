import React from "react"
import { Link, graphql } from "gatsby"
import algoliasearch from 'algoliasearch'
import { InstantSearch, Hits, Stats, SortBy, Pagination, connectSearchBox, connectMenu, connectInfiniteHits } from 'react-instantsearch-dom';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Layout from "../../../Layout"
import Img from 'gatsby-image'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Buy2Get1Free from '../../../Adverts/Buy2Get1Free'
import * as Styles from "./styles"
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

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
		width: '60px',	
		boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',  
	},
	title : {
		float: 'right',	
		color:  '#B4B4B4',
	}
  }))

export const query = graphql`
  query($id: String!) {
    taxonomyTermCategory(field_url: {value: { eq: $id }}, status: {eq: true}) {    
      id
      field_url {
        value
      }
      name
    }    
    allCommerceProductGreetingCards 
    (filter: {relationships: {field_category: {field_url: {value: {eq:  $id }}}}})    
     {
      edges {
        node {
          id
          field_sku
          title          
          status
          fields {
            greetingCardPathUrl
          }
          relationships {
            field_category {
              id
              field_url {
                value
              }
              name
            }
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

const appId = process.env.GATSBY_ALGOLIA_APP_ID;
const searchKey = process.env.GATSBY_ALGOLIA_SEARCH_KEY;
const searchClient = algoliasearch(appId, searchKey);
const searchIndex = process.env.GATSBY_ALGOLIA_INDEX_NAME;

const SearchBox = ({ currentRefinement, refine, classes }) => (
  <TextField
      label="type to search ..."
      type="search"         
      value={currentRefinement}
      defaultRefinement="birthdays"             
      onChange={event => refine(event.currentTarget.value)}         
  />
);

const InfiniteHits = ({
  hits,
  hasPrevious,
  refinePrevious,
  hasMore,
  refineNext,    
}) => (
  <Styles.ProductGreetingCardCategoryLayout>
     <Grid container spacing={0}>
      {hits.map(hit => (         
          <Grid item xs={6} sm={3} md={2} lg={2}>              
            <Link to={ '/greeting-cards/' + hit.relationships.field_category.field_url.value + '/' + hit.fields.greetingCardPathUrl }>                          
              <span>
                <Img fixed={ hit.relationships.field_image.localFile.childImageSharp.fixed } />
              </span>
            </Link>
          </Grid>          
      ))}      
    </Grid>
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Styles.loadBtn>
          <Tooltip title="Show more" arrow>
            <IconButton aria-label="delete" size="large" disabled={!hasMore} onClick={refineNext}>
              <ArrowDownwardIcon fontSize="inherit" />
            </IconButton>
          </Tooltip>
          <span>show more</span>
        </Styles.loadBtn>
      </Grid>
    </Grid>
  </Styles.ProductGreetingCardCategoryLayout>      
);

const CustomSearchBox = connectSearchBox(SearchBox);
const CustomInfiniteHits = connectInfiniteHits(InfiniteHits);
const VirtualMenu = connectMenu(() => null);

function greetingCardViews ({ data }) {    
  const productCategory = data.taxonomyTermCategory;    
  return (
    <Layout> 
      <Grid container spacing={0}>
			  <Grid item xs={12}>
  				<Buy2Get1Free />
			  </Grid>
		  </Grid>
      {typeof window !== 'undefined'
      && InstantSearch
      &&
      <InstantSearch searchClient={searchClient} indexName={searchIndex} >      
        <Grid container spacing={0}>
          <Grid item xs={3}>
            <Styles.backBtn>
              <Link to='/greeting-cards'>
                  <Tooltip title="Go back" arrow>
                    <IconButton aria-label="delete" size="large">
                      <ArrowBackIcon fontSize="inherit" />
                    </IconButton>           
                </Tooltip>
              </Link>
            </Styles.backBtn>
          </Grid>
          <Grid item xs={9}>
            <Styles.SearchBoxPage> 
              <VirtualMenu attribute="relationships.field_category.name" defaultRefinement={productCategory.name} />                                       
                <CustomSearchBox />                                      
            </Styles.SearchBoxPage>         
          </Grid>          
        </Grid>                     
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <CustomInfiniteHits />
          </Grid>
        </Grid>
        
      </InstantSearch>
      }
    </Layout>
  )
}

export default greetingCardViews;
