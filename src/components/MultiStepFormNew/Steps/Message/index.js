import React from "react";
import { InputField } from 'Components/FormControls';
import { BaseInput } from 'cop'

// Step 2: Message \\
function Message(props) {
  const {
    formField: {
      inlayCardJson,
    }
  } = props;
  return (
    <div>      
      <InputField name={inlayCardJson.name} label={inlayCardJson.label} fullWidth />   
    </div>
  );
};

export default Message;
