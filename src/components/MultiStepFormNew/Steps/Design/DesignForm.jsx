import React from "react";
import Canvas from './Layout/Canvas';
import Gallery from './Layout/Gallery'
import GalleryDictionary from './Layout/GalleryDictionary';
import * as Styles from './styles.js';
import { Grid, Paper, InputBase  } from '@material-ui/core';

// Step 1: Design \\
// Only show gallery if the card type is not "Standard Canvas"
function Design(props) {

 const cardType = props.cardType;

  return (
    <div className="form">                     
        <Grid container spacing={0}>
          <Grid item xs={4}>      
            
          </Grid>       
          <Grid item xs={4}>    
            
          </Grid>       
          <Grid item xs={4}>          
            
        </Grid>       
      </Grid>    
        <Grid container spacing={3}>
          <Grid item xs={false} sm={false} md={false} lg={4}>              
          </Grid>
          <Grid item xs={12} sm={8} md={6} lg={4}>      
            <Canvas {...props} />
          </Grid>
          <Grid item xs={12} sm={4} md={5} lg={4}> 
            {cardType != "Standard Canvas" &&
              <Gallery />
              <GalleryDictionary />
            }        
          </Grid>
        </Grid>                
        <br />    
        <Grid container spacing={0}>
          <Grid item xs={4}>                 
          </Grid>       
          <Grid item xs={4}>      
          </Grid>       
          <Grid item xs={4}>       
          </Grid>       
      </Grid>        
    </div>
  );
};

export default Design;
        