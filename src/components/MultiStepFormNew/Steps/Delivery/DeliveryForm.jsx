import React from "react";
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { InputField } from '../../FormControls';
import makeStyles from '../../stylesMtUi';

function Delivery(props) {
  const classes = makeStyles();
  const {
    formField: {
      customerEmailAddress,
      deliveryName,
      deliveryAddress,
      deliveryAddress2,
      deliveryCity,
      deliveryCounty,
      deliveryPostcode,
      deliveryCountry
    }
  } = props;
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>
            <InputField name={customerEmailAddress.name} label={customerEmailAddress.label} fullWidth />
          </Paper>
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
      <Paper className={classes.paper}>
        <Grid container spacing={3}>        
          <Grid item xs={12} sm={6}>
            <InputField name={deliveryName.name} label={deliveryName.label} fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField name={deliveryAddress.name} label={deliveryAddress.label} fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField name={deliveryAddress2.name} label={deliveryAddress2.label} fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField name={deliveryCity.name} label={deliveryCity.label} fullWidth />
          </Grid>        
          <Grid item xs={12} sm={6}>
            <InputField name={deliveryCounty.name} label={deliveryCounty.label} fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField name={deliveryPostcode.name} label={deliveryPostcode.label} fullWidth />
          </Grid>       
          <Grid item xs={12} sm={6}>
            <InputField name={deliveryCountry.name} label={deliveryCountry.label} fullWidth />
          </Grid>     
        </Grid>      
      </Paper>
    </div>
  );
};

export default Delivery;
