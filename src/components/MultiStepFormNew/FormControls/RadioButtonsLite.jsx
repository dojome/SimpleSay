// Removed Label text or this LITE version
import React from 'react';
import PropTypes from 'prop-types';
import { at } from 'lodash';
import { useField } from 'formik';
import {
  InputLabel,
  FormControl, 
  FormControlLabel,
  FormHelperText,
  Radio,
  RadioGroup,   
} from '@material-ui/core';

function RadioButtons(props) {
  const { label, data, ...rest } = props;
  const [field, meta] = useField(props);
  const { value: selectedValue } = field;
  const [touched, error] = at(meta, 'touched', 'error');
  const isError = touched && error && true;
  function _renderHelperText() {
    if (isError) {
      return <FormHelperText>{error}</FormHelperText>;
    }
  }

  return (
    <FormControl {...rest} error={isError}>
      <InputLabel>{label}</InputLabel>
      <RadioGroup  {...field} value={selectedValue ? selectedValue : ''}>
        {data.map((item, index) => (
          <FormControlLabel
          key={index}
          value={item.value}
          control={<Radio color="primary" />}          
        />
        ))}
      </RadioGroup>
      {_renderHelperText()}
    </FormControl>
  );
}

RadioButtons.defaultProps = {
  data: []
};

RadioButtons.propTypes = {
  data: PropTypes.array.isRequired
};

export default RadioButtons;

