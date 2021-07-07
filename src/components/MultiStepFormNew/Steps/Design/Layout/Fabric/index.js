import React, {useState, useEffect} from 'react';
import fabric from 'fabric';
import DesignCanvas from './DesignCanvas';
import PropTypes from 'prop-types';
import omit from 'lodash.omit';
import Grid from '@material-ui/core/Grid';
import { InputField } from 'Components/FormControls';

class BackgroundImage extends React.Component {    
  static propTypes = {
    canvas: PropTypes.object,
    url: PropTypes.string,
    scale: PropTypes.number,
    top: PropTypes.number,
    bottom: PropTypes.number,
    Left: PropTypes.number,
    Right: PropTypes.number
  }

  static defaultProps = {
    scale: 1.0, 
  } 

  componentDidMount() {  
    const fieldOutlayJson =  JSON.parse(this.props.fieldOutlayJson);        
    const fabric = window.fabric;
    const options = omit(this.props, ['scale']);
    fabric.Image.fromURL('https://s3-ap-southeast-1.amazonaws.com/secure-s3-prod.simplysay.sg/backgrounds/'+fieldOutlayJson.backgroundImage, img => {
      
    this.props.canvas.setBackgroundImage(img, this.props.canvas.renderAll.bind(this.props.canvas), {
        scaleX: this.props.canvas.width / img.width,
        scaleY: this.props.canvas.height / img.height
        })
    
    }, options)
  }
  
  render() {
    return null
  }
}

function Fabric(props) {    
  //const handleChange = name => { form.setFieldValue(name, ''); };

  const {
    formField: {
      outlayCardJson 
    }
  } = props;

  const outlayCardJsonInitial = props.fieldOutlayJson;
  
  return (
    <div>
       <Grid container spacing={0}>
        <Grid item xs={12}>
          <DesignCanvas>
            <BackgroundImage fieldOutlayJson={props.fieldOutlayJson} />              
          </DesignCanvas>         
        </Grid>       
      </Grid>        
      <InputField name={outlayCardJson.name} label={outlayCardJson.label} defaultValue={outlayCardJsonInitial} hidden fullWidth/>    
    </div>
  )
}

//<Rect width={100} height={100} fill="blue" />
//<Circle radius={20} top={200} />
//<Image url="https://http.cat/100" scale={0.2} top={100} />

export default Fabric;