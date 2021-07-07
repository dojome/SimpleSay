/**
 * Categories page
 */
import React from "react"
import {Link, useStaticQuery, graphql, navigate } from "gatsby"
import Img from 'gatsby-image'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Layout from "../../Layout"
import SiteBanners from '../../Adverts/SiteBanners'
import GreetingCardsCategories from "./GreetingCardsCategories"
import * as Styles from "./styles"
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

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
		boxShadow: '1px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',  
	},
	titleMobile : {
		float: 'right',	
		textAlign: 'center',
		color:  '#B4B4B4',
	},
	titleDesktop : {
		textAlign: 'center',
		color:  '#A0A0A0',
	}
  }))

export default function GreetingCards() {

	
	const data = useStaticQuery(graphql`
	  query {
		blankPortrait: file(name: {eq: "blank-portrait"}) {
		  name
		  relativePath      
			childImageSharp {
			  fluid(quality: 100) {
				...GatsbyImageSharpFluid_withWebp_noBase64            
			}
		  }
		}  
		blankLandscape: file(name: {eq: "blank-landscape"}) {
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
	const classes = useStyles();

  return (
    <Layout>
		<Grid item xs={12}>
			<br/>
		</Grid>
		<Grid container spacing={0}>
			<Styles.GreetingCardsMobile>
				<Grid item xs={12}>
					<h2 className={classes.titleMobile}>Select a category...</h2>
				</Grid>
			</Styles.GreetingCardsMobile>
		</Grid>		
		<Styles.GreetingCardsDesktop>
			<Grid container spacing={0}>
				<Grid item xs={6}>
					<h1 className={classes.titleDesktop}>Hi, select a category or design your own...</h1>
					<center>
						<form className={classes.root} noValidate autoComplete="off">
							<TextField id="standard-basic" label="type to search..." />					        
						</form>
					</center>
				</Grid>
				<Grid item xs={2}><h3 className={classes.titleDesktop}>Blank Portrait</h3>
					<Styles.designYourOwnPortrait>
						<Link to="/greeting-cards/blank/blank-card-portrait">
							<Img fluid={ data.blankPortrait.childImageSharp.fluid } />
						</Link>
					</Styles.designYourOwnPortrait>	
				</Grid>
				<Grid item xs={1}><h1 className={classes.titleDesktop}>or</h1></Grid>
				<Grid item xs={2}><h3 className={classes.titleDesktop}>Blank Landscape</h3>
					<Styles.designYourOwnLandscape>
						<Link to="/greeting-cards/blank/blank-card-landscape">
							<Img fluid={ data.blankLandscape.childImageSharp.fluid } />
						</Link>
					</Styles.designYourOwnLandscape>	
				</Grid>
				<Grid item xs={1}></Grid>
			</Grid>
			<Grid container spacing={0}>
				[Best Sellers]
			</Grid>
			<Grid item xs={12}>
				<Styles.backBtn>																
  		 			<Link to="/">
					   <Tooltip title="Go back" arrow>
                  			<IconButton aria-label="delete" size="large">
                    			<ArrowBackIcon fontSize="inherit" />
                  			</IconButton>           
                		</Tooltip>
					</Link>
  		 		</Styles.backBtn>
			</Grid>
		</Styles.GreetingCardsDesktop>
		<Styles.borderLine/>
		<GreetingCardsCategories></GreetingCardsCategories>		
    </Layout>
  );
}