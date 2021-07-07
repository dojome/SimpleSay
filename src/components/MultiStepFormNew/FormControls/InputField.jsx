import React from 'react';
import { at } from 'lodash';
import { useField } from 'formik';
import { TextField } from '@material-ui/core';

export default function InputField(props) {
  const { errorText, ...rest } = props;
  const [field, meta] = useField(props);

  function _renderHelperText() {
    const [value, touched, error] = at(meta, 'value', 'touched', 'error');
    if (value && touched && error) {
      return error;
    }    
  }

  return (
    <TextField
      type="text"
      error={meta.value && meta.touched && meta.error && true}
      helperText={_renderHelperText()}
      {...field}
      {...rest}
    />
  );
}
