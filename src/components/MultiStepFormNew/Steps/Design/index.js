import React from 'react';
import DesignForm from './DesignForm';
import { Grid, Select, Paper, InputField} from '@material-ui/core'
import { RightArrowIcon, LeftArrowIcon } from '@material-ui/icons'

// Step 1: Design \\
export default function Design(props) {

  return (
    <React.Fragment>
      <DesignForm formField={props.formField} {...props}/>  
    </React.Fragment>
  );
}
