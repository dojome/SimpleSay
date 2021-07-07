import React from 'react';
import {Link, useStaticQuery, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import { getCurrentUser } from '../Auth/AppUser'
import Img from 'gatsby-image';
import '@aws-amplify/ui/dist/style.css';
//import Meta from '../components/MetaData/FrontPage';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import * as Styles from '../../styles/styles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

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
	  width: '100px',	
	  boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',  
  }
}));

export default function IndexPage() {
  const classes = useStyles();
  const user = getCurrentUser();  
  const getUserName = user.username.substr(0, user.username.indexOf('@')); 
  const userName = getUserName.charAt(0).toUpperCase() + getUserName.slice(1)
	const data = useStaticQuery(graphql`
		  query {
			nodeFrontPage {
				title
				field_sub_text
				field_sub_title_1
				field_sub_body_1
				field_sub_title_2
				field_sub_body_2
				field_sub_title_3	
				field_sub_body_3			
				relationships {
					field_frontpage_banner {
						localFile {
							childImageSharp {
								fluid(maxWidth: 1500, quality: 100) {
									...GatsbyImageSharpFluid_withWebp_noBase64
								}
							}
						}
					}
					field_frontpage_sub_banner {
						localFile {
							childImageSharp {
								fluid(maxWidth: 1500, quality: 100) {
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
    <Layout>		   			
		<Styles.FrontPageTitle><h1>Welcome back {userName}</h1></Styles.FrontPageTitle>
		<div className="row">
			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
			<Styles.FrontPageBanner>
				<Img fluid={data.nodeFrontPage.relationships.field_frontpage_banner.localFile.childImageSharp.fluid} /> 
			</Styles.FrontPageBanner>			
			</div>			
			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
				<div className="row">
					<div className="col-12">
						<Styles.FrontPageText>
							<span><FontAwesomeIcon icon={faCheck}/> {data.nodeFrontPage.field_sub_title_1}</span>
							<p>{data.nodeFrontPage.field_sub_body_1}</p>
							<span><FontAwesomeIcon icon={faCheck}/> {data.nodeFrontPage.field_sub_title_2}</span>
							<p>{data.nodeFrontPage.field_sub_body_2}</p>
							<span><FontAwesomeIcon icon={faCheck}/> {data.nodeFrontPage.field_sub_title_3}</span>
							<p>{data.nodeFrontPage.field_sub_body_3}</p>
							<Styles.FrontPageSubBanner>
								<Img fluid={data.nodeFrontPage.relationships.field_frontpage_sub_banner.localFile.childImageSharp.fluid} /> 
							</Styles.FrontPageSubBanner>
						</Styles.FrontPageText>
					</div>
				</div>
			</div>				
		</div>
		<div className="row">
			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
				<Styles.FrontPageStartBtn>
					<div>
						<Link to='/greeting-cards'><Button className={classes.button} variant="contained" color="primary">Start</Button></Link>
					</div>
					<div>					
					</div>
				</Styles.FrontPageStartBtn>				
			</div>
			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">				
				<Styles.FrontPageIntroText>
					{data.nodeFrontPage.field_sub_text}
				</Styles.FrontPageIntroText>
			</div>
		</div>	
    </Layout>
  );
}