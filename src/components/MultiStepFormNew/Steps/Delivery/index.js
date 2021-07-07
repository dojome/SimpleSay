import React from 'react';
import DeliveryForm from './DeliveryForm';

// Step 4: Delivery \\
export default function Delivery(props) {  
  return (
    <React.Fragment>            
        <DeliveryForm formField={props.formField} />        
    </React.Fragment>
  );
}
  