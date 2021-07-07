import React from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { InputField, RadioButtons } from '../../FormControls';
import InfoIcon from '@material-ui/icons/Info';
import makeStyles from 'styles/stylesMtUi';

const cardSizes = [  
  {
    value: 'A5',
    label: 'Standard A5 size @ $7.49',
    image: 'https://simplysayfe:8000/static/d79892eacf4b10e8179cb74d0a5a30b9/ccdb5/logo.webp'
  },
  {
    value: 'A4',
    label: 'Large A4 size @ $14.99'
  }  
];

const envelopeTypes = [  
  {
    value: 'Single',
    label: 'Single Envelope'
  },
  {
    value: 'Extra',
    label: 'Extra Envelope'
  }  
];

const shippingTypes = [  
  {
    value: 'SingPost',
    label: 'FREE DELIVERY via SingPost Standard Service'
  },
  {
    value: 'Next Business Day',
    label: 'Next Business Day Delivery @ $14.00 via Courier'
  }  
];

// Step 3: Options \\
function OptionsForm(props) {  
  const classes = makeStyles();
  const {
    formField: {
        optionsCardSize,
        optionsPackaging,
        optionsShippingType,
        deliveryContactNumber
    }
  } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
               <h3>What size card would you like?</h3>
               <RadioButtons name={optionsCardSize.name} data={cardSizes} fullWidth />
               <span><i>A4 size cards will be delivered via courier.</i></span>           
            </Paper>
         </Grid>       
         <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
            <h3>Would you like an extra envelope?</h3>
                <RadioButtons name={optionsPackaging.name} data={envelopeTypes} fullWidth />     
                <span><i>Extra envelopes are useful if you are handwriting/delvering the card.</i></span>           
            </Paper>
        </Grid>       
      </Grid>    
      <br />
      <Grid container spacing={2}>   
         <Grid item xs={12}>
            <Paper className={classes.paper}>
                <h3>How would you like your Greeting Card to be shipped?</h3>
                <RadioButtons name={optionsShippingType.name} data={shippingTypes} fullWidth />                        
                <span><i>SingPost Standard Service is 2-3 days - Next Day Delivery if orders received by 12pm.</i></span>
            </Paper>
        </Grid>        
      </Grid>    
    </div>      
  );
};
export default OptionsForm;

//<InputField name={deliveryContactNumber.name} label={deliveryContactNumber.label} />           