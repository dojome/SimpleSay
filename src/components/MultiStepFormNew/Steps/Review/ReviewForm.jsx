import React from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import BaseInput from 'components/BaseInput';
import BaseSelect from 'components/BaseSelect';
import { InputField, RadioButtons } from 'components/FormControls';
import makeStyles from 'styles/stylesMtUi';

// Step 6: Review \\
function ReviewForm(props) {  
  const classes = makeStyles();
  const {
    formField: {
      customerEmailAddress,
      deliveryName,
      deliveryContactNumber,
      deliveryAddress,
      deliveryAddress2,
      deliveryCity,
      deliveryCounty,
      deliveryPostcode,
      deliveryCountry,
      optionsCardSize,
      optionsPackaging,
      optionsShippingType
    }
  } = props;

  const cardSizes = [  
    {
      value: 'A5',
      label: 'Standard A5 size @ $7.49'
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
      label: 'FREE SingPost '
    },
    {
      value: 'Next Business Day',
      label: 'Next Business Day @ $14.00'
    }  
  ];

  const disabledState = 'true';

  const [state, setState] = React.useState({
    editOrder: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });    
    //disabledState = 'false';
  };


  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
                <h4>Card Preview</h4>
            </Paper>
        </Grid>                 
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Grid container spacing={0}>                             
                <h4>Receiver</h4>                
                <Grid container spacing={3}>                    
                    <Grid item xs={12} sm={6}>
                        <InputField name={deliveryName.name} fullWidth disabled={disabledState} />
                    </Grid>   
                    <Grid item xs={12} sm={6}>
                        <InputField name={deliveryAddress.name} fullWidth disabled={disabledState} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputField name={deliveryAddress2.name} fullWidth disabled={disabledState} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputField name={deliveryCity.name} fullWidth disabled={disabledState} />
                    </Grid>        
                    <Grid item xs={12} sm={6}>
                        <InputField name={deliveryCounty.name} fullWidth disabled={disabledState} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputField name={deliveryPostcode.name} fullWidth disabled={disabledState} />
                    </Grid>       
                    <Grid item xs={12} sm={6}>
                        <InputField name={deliveryCountry.name} fullWidth disabled={disabledState} />
                    </Grid>     
                    <Grid item xs={12}> </Grid>                   
                </Grid>
                <h4>Options</h4>  
                <Grid container spacing={3}>                    
                    <Grid item xs={12} sm={6}>                        
                       
                    </Grid>   
                    <Grid item xs={12} sm={6}>
                                       
                    </Grid>                                                          
                </Grid>
            </Grid>
          </Paper>
        </Grid>        
      </Grid>
    </div>
  );
};
export default ReviewForm;
