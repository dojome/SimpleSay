import React from 'react';
import OptionsForm from './OptionsForm';

// Step 3: Options \\
export default function Options(props) {

  return (
    <React.Fragment>        
      <OptionsForm formField={props.formField} />  
    </React.Fragment>
  );
}
