export default {
  formId: 'checkoutForm',
  formField: {
    customerEmailAddress: {
      name: 'customerEmailAddress',
      label: 'Your email address',
      requiredErrorMsg: 'Email is required'
    }, 
    deliveryName: {
      name: 'deliveryName',
      label: 'Name',
      requiredErrorMsg: 'Name is required'
    }, 
    deliveryContactNumber: {
      name: 'deliveryContactNumber',
      label: 'Contact Number',
      requiredErrorMsg: 'Address is required'
    },
    deliveryAddress: {
      name: 'deliveryAddress',
      label: 'Address',
      requiredErrorMsg: 'Address is required'
    },
    deliveryAddress2: {
      name: 'deliveryAddress2',
      label: 'Unit No. / Address'
    },
    deliveryCity: {
      name: 'deliveryCity',
      label: 'City',
      requiredErrorMsg: 'City is required'
    },
    deliveryCounty: {
      name: 'deliveryCounty',
      label: 'County / State / Province / Region'
    },
    deliveryPostcode: {
      name: 'deliveryPostcode',
      label: 'Postcode / Zipcode',
      requiredErrorMsg: 'Postcode is required',      
    },
    deliveryCountry: {
      name: 'deliveryCountry',
      label: 'Country',
      requiredErrorMsg: 'Country is required'
    },
    outlayCardJson: {
      name: 'outlayCardJson',
      label: 'Outlay Card JSON'      
    },
    inlayCardJson: {
      name: 'inlayCardJson',
      label: 'Inlay Card JSON'      
    },
    optionsCardSize: {
      name: 'optionsCardSize',
      label: 'Card Size'      
    },
    optionsPackaging: {
      name: 'optionsPackaging',
      label: 'Packaging'      
    },
    optionsShippingType: {
      name: 'optionsShippingType',
      label: 'Shipping Type'      
    }
  } 
};
