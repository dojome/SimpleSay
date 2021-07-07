import React,{useState, useEffect} from "react";
import {Link} from 'gatsby';
import { Formik, Form } from 'formik';
import axios from 'axios';
import checkoutFormModel from './Config/checkoutFormModel';
import formInitialValues from './Config/formInitialValues';
import {Grid, Stepper, MobileStepper, Step, StepLabel, Button, CircularProgress, Paper, Box} from '@material-ui/core';

import Buy2Get1Free from '../Adverts/Buy2Get1Free'

import Design from "./Steps/Design";
import Message from "./Steps/Message";
//import Preview from "./Steps/Preview";
import Options from "./Steps/Options";
import Delivery from "./Steps/Delivery";
import Review from "./Steps/Review";
import Snipcart from "./Snipcart";

import useStyles from './stylesMtUi';
import * as Styles from './styles';
import { render } from "less";

const { formId, formField } = checkoutFormModel;
const steps = ['Design','Message','Options','Delivery','Review'];

function _renderStepContent(step, props) {         
  switch (step) {
    case 0:
      return <Design ProductId={props.productId} formField={formField} cardType={props.cardType}/>;
    case 1:
      return <Message formField={formField} />;      
    case 2:
      return <Options formField={formField} />;    
    case 3:
      return <Delivery formField={formField} />;  
    case 4:
      return <Review formField={formField} />;       
    default:
      return <div>Not Found</div>;
  }
}

export default function MultiStepForm (props) {
  // Pull material UI styles
  const classes = useStyles();

  // Create URL to pass to Snipcart
  const baseUrl = process.env.GATSBY_BASE_URL
  const productTile = props.title.replace(/\s+/g, '-').toLowerCase();
  const productUrl = baseUrl + '/greeting-cards/' + props.categoryUrl + '/' + productTile + '/' + 'index.html'
  const productPrice = "7.49"  
  const productImageUrl = 'https://cdn.simplysay.co/s3fs-public/images/products/imports/' + props.productImage

  // Set the states of the active step and detect last step  
  const [activeStep, setActiveStep] = useState(0);
  const isLastStep = activeStep === steps.length - 1;

  // Sleep function (used by the submit)
  function _sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Post JSON string with order information to the AWS API Gateway
  function sendToAwsApi(values) {
    const data = JSON.stringify(JSON.stringify(values));
    axios.post(process.env.GATSBY_LAMBDA_API_GATEWAY + '/save', data,{
      headers: {        
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      console.log(response);              
    }, (error) => {
      console.log(error);       
    });
  }

  // Function to subscribe to events
  function SnipcartEvents(uniqueId) {
    window.Snipcart.events.on('item.updated', (cartItem) => {
      console.log("UPDATES:", cartItem);
      // Function to update cart itmems      
        
           window.Snipcart.api.cart.items.update({
            uniqueId: uniqueId,
            name: 'Updated name'
        
      })    
  })}

  // Async functon to submit the Formik form, values are sent to Snipcart API and function calls AWS API Gateway
  async function _submitForm(values, actions) {

    // Create values to send to Snipcart
    try {
        const multiStepFormsData = JSON.stringify(JSON.stringify(values));    
        console.log ('ORDER JSON: ',multiStepFormsData)

       const courierNextDeliverySlot = 'Monday 2nd November: 12pm - 6pm'
       const deliveryOptions = 'SingPost (FREE)|Courier ($14.00) - ' + courierNextDeliverySlot + '[+14.00]'
        
        const asyncResponse = await window.Snipcart.api.cart.items.add({              
        //await window.Snipcart.api.cart.items.add({
            id: props.productId,
            name: props.title,
            price: productPrice,
            url: productUrl,
            quantity: 1,
            image: productImageUrl,
            stackable: 'never',
            metadata: multiStepFormsData,
            
            customFields:[{    
              id: 'cardSize',                  
              name: 'cardSize',
              sanitizedName: 'cardSize',
              type: 'dropdown',
              options: 'Standard (A5)|Large (A4)[+7.50]',              
              value: 'Standard (A5)',
              required: true
            },
            {
              name: 'FREE Extra Envelope?',  
              sanitizedName: "snipcart_extra_envelope",      
              type: 'dropdown',      
              options: 'Yes please|No thanks',
              value: 'No thanks',
              required: true
            },
            {
              name: 'Select Shipping?',   
              sanitizedName: "snipcart_select_shipping",     
              type: 'dropdown',      
              options: deliveryOptions,
              value: 'SingPost (FREE)',
              required: true
            },
            {
              name: 'Recipient', 
              sanitizedName: "snipcart_recipient",                
              type: 'textarea',                                    
              value: 'Ben Banks, 376 Thomson Road, #32-02, Singapore, 298130'
            },         
            {
              name: 'Flowers',     
              sanitizedName: "snipcart_flowers",         
              type: 'dropdown',
              options: 'No thanks|Seasonal Bouquet ($35.00)[+35.00]',                    
              value: 'No thanks'           
            },
            {
              name: 'Chocolates',  
              sanitizedName: "snipcart_chocolates",               
              type: 'dropdown',    
              options: 'No thanks|Assorted Toffees ($15.00)[+15.00]',                    
              value: 'No thanks'
            },
          ]                     
        });
        console.log('INFO: ', asyncResponse)        
        var getObjects = Object.values(asyncResponse)
        var uniqueId = getObjects[0]['uniqueId']
        SnipcartEvents(uniqueId)

        
    } catch (error) {
        console.log('ERROR: ', error)
    }   
    //await _sleep(1000);
    //alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
    setActiveStep(activeStep + 1);    
    sendToAwsApi(values);    // Send values to AWS API Gateway for Lambda/DynamoDB storage
  }

  // Function manages the move to the next step, submitting field values
  function _handleSubmit(values, actions) {
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      console.log('saved='+JSON.stringify(values, null, 2))    
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }           
  }

   // Function manages moving back to previous step
  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

  return (    
    <React.Fragment>   
      <div>
        <button 
          hidden="hidden"
          class="snipcart-add-item"        
          data-item-id={props.productId}        
          data-item-url={productUrl}
          data-item-price={productPrice}
        />      
      </div>  
    {activeStep === steps.length ? (
      <Snipcart />
    ) : (      
      <Formik                   
        // Formik Config            
        initialValues={formInitialValues}
        //enableReinitialize='true'        
        //validationSchema={currentValidationSchema} <-- YUP validation
        // BANNER = <Buy2Get1Free className={classes.adverts}/>
        onSubmit={_handleSubmit}>
        {({ isSubmitting }) => (       
        <Form id={formId}>       
           <Grid container spacing={0}>
          {activeStep >= 2 && (
            <Grid item xs={12}>              
              <Box className={classes.advert}>
                
              </Box>
            </Grid>
          )}     
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Styles.LayoutForm>                               
                {_renderStepContent(activeStep,props)}              
              </Styles.LayoutForm>  
            </Grid>
          </Grid>  

          <Grid container spacing={0} className={classes.multiStepFormNavBar}>
            <Grid item xs={2}>
              
            </Grid>
            <Grid item xs={8} >            
              <Styles.LayoutStepper>                
                  <Stepper activeStep={activeStep} className={classes.stepper} orientation="horizontal">
                    {steps.map(label => (
                      <Step key={label}>
                        <StepLabel StepIconProps={{ classes:{ root: classes.icon, active: classes.activeIcon, completed: classes.completedIcon } }}>{label}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>                    
                </Styles.LayoutStepper>  
                <Styles.LayoutMobileStepper>
                <MobileStepper activeStep={activeStep} steps={5} position="static">
                  {steps.map(label => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </MobileStepper>
              </Styles.LayoutMobileStepper>
              
            </Grid>
            <Grid item xs={2}>
            <div className={classes.buttons}>
                {activeStep !== 0 && (
                  <Button className={classes.button2} onClick={_handleBack}>
                    Back
                  </Button>
                )}
                <div className={classes.wrapper}>
                  <Button
                    disabled={isSubmitting}
                    type="submit"
                    variant="contained"
                    color="primary"                                                 
                    className={classes.button}
                  >
                    {isLastStep ? 'Add To Basket' : 'Next'}
                  </Button>
                  {isSubmitting && (
                    <CircularProgress
                      size={24}    
                      className={classes.buttonProgress}               
                    />
                  )}                          
                </div>
              </div>                
            </Grid>          
          </Grid>                    
        </Form>
      )}
    </Formik>
   )}                       
 </React.Fragment> 
);
}