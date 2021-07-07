import React, {useState} from 'react';
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
  Grid, 
  Typography,
} from '@material-ui/core';
import useStyles from '../stylesMtUi';

function RadioButtons(props) {
  const classes = useStyles();
  const [radioDisabled, setRadioDisabled] = useState(false);
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
      <RadioGroup  {...field} value={selectedValue ? selectedValue : ''} className={classes.radioGroup} row>
        {data.map((item, index) => (                  
          <FormControlLabel
          key={index}
          value={item.value}
          control={<Radio color="primary" classes={{root: classes.radio, checked: classes.checked}} />}
          label={<Typography className={classes.typography}>{item.label}</Typography>}          
          labelPlacement="End"
          className={classes.radioLabel}
          disabled={radioDisabled}
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

