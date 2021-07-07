import React from 'react'
import PropTypes from 'prop-types'
import omit from 'lodash.omit'
s
class BackgroundImage extends React.Component {
  static propTypes = {
    canvas: PropTypes.object,
    url: PropTypes.string.isRequired,
    scale: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired,
  }

  static defaultProps = {
    scale: 1.0,
  }

  componentDidMount(props) {
    const fabric = window.fabric
    const options = omit(this.props, ['scale'])
    fabric.Image.fromURL('https://s3-ap-southeast-1.amazonaws.com/secure-s3-prod.simplysay.sg/backgrounds/'+props.fieldOutlayJson, img => {
      
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

export default BackgroundImage
