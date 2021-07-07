import React from 'react';
import { Grid } from '@material-ui/core';
import ReviewForm from './ReviewForm';

// Step 5: Delivery \\
export default function Review(props) {
  return (
    <React.Fragment>      
      <ReviewForm formField={props.formField} />      
    </React.Fragment>
  );
}
