import checkoutFormModel from './checkoutFormModel';
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
    outlayCardJson,
    inlayCardJson,
    optionsCardSize,
    optionsPackaging,
    optionsShippingType
  }
} = checkoutFormModel;

export default {
  [customerEmailAddress.name]: '',
  [deliveryName.name]: '',
  [deliveryContactNumber.name]: '',  
  [deliveryAddress.name]: '',
  [deliveryAddress2.name]: '',
  [deliveryCity.name]: '',
  [deliveryCounty.name]: '',
  [deliveryPostcode.name]: '',
  [deliveryCountry.name]: '',
  [outlayCardJson.name]: '',
  [inlayCardJson.name]: '',
  [optionsCardSize.name]: '',
  [optionsPackaging.name]: '',
  [optionsShippingType.name]: '',
};
