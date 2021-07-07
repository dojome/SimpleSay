import React from 'react';
import {Link } from "gatsby"
import { Button, TextField, Theme, Grid } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import SiteBanners from '../Adverts/SiteBanners'
import Img from 'gatsby-image'
import algoliasearch from 'algoliasearch'
import { InstantSearch, Hits, Stats, SortBy, Pagination, connectSearchBox, connectMenu, connectInfiniteHits } from 'react-instantsearch-dom';
import Layout from '../Layout';
import '../../styles/styles.css'
import * as Styles from './styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

// Add this in the Instant Search tags to filter per category
// <VirtualMenu attribute="relationships.field_category.name" defaultRefinement="birthdays" />

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    textField : {
        fontSize: '100px',
    },
    backButton : {
        backgroundColor: '#6495C6',
        color: 'white',
        width: '60px',	
        boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',  
    }
  }));

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
          </Styles.loadBtn>
        </Grid>
      </Grid>
    </Styles.ProductGreetingCardCategoryLayout>      
  );
  
const CustomSearchBox = connectSearchBox(SearchBox);
const CustomInfiniteHits = connectInfiniteHits(InfiniteHits);
const VirtualMenu = connectMenu(() => null);

function Search() {
    const classes = useStyles();
    return (
      <Layout>
      <InstantSearch searchClient={searchClient} indexName={searchIndex} >    
       <Grid container spacing={3}>
        <Styles.SearchBoxPage>  
          <Grid item xs={3}>                                               
              <CustomSearchBox />                                                
          </Grid>
          </Styles.SearchBoxPage>  
			  <Grid item xs={9}>
  				<SiteBanners />
			  </Grid>
		  </Grid>          
        <Grid container spacing={0}>
          <Grid item xs={2}>
            <Styles.backBtn>
              <Link to='/'>
                <Tooltip title="Go back" arrow>
                  <IconButton aria-label="delete" size="large">
                    <ArrowBackIcon fontSize="inherit" />
                  </IconButton>           
                </Tooltip>
              </Link>
            </Styles.backBtn>
          </Grid>
          <Grid item xs={10}>
            
          </Grid>          
        </Grid>                     
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <CustomInfiniteHits />
          </Grid>
        </Grid>       
      </InstantSearch>
      </Layout>
    );        
};

export default Search;
