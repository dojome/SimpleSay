import React from "react";
import axios from "axios";

const Submit = ({ navigation, formData, json }) => {
  const { go } = navigation;
  
  console.log(json);

  // Post JSON string with order information to the AWS API Gateway
  function sendToAwsApi(values) {
    const data = JSON.stringify(JSON.stringify(values));
    axios.post('https://4vy8matwu2.execute-api.ap-southeast-1.amazonaws.com/prod/save', data,{
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

  // Prepare async parameters
  function prepAsyncParams(formDataValues){
    formDataValues(formData);
  }  

  // Create async instance of the post function
  async function submitForm() { 
    prepAsyncParams(async ele => {        
        sendToAwsApi(formData);           
    });    
  }

  // Call the post function
  submitForm(); 

  return (
    <div>
      <h3>Thank you for submitting. We will be in touch</h3>
      New Form <button onClick={() => go("design")}>New</button>
    </div>
  );
};

export default Submit;
