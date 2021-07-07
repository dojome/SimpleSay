import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

class DesignCanvas extends React.Component {
  static propTypes = {
    width: PropTypes.number,    
    height: PropTypes.number,
  }

  state = {
    canvas: null,
  }

  myContract = new web3.eth.Contract('0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe', '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe', {
    from: '0x1234567890123456789012345678901234567891', // default from address
    gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
  });

  componentDidMount() {
    const fabric = window.fabric
    const canvas = new fabric.Canvas(this.c)
    this.setState({ canvas })
  }

  constructor(props) {
    super(props);
    this.state = {width: props.width};
    this.state = {height: props.height};
  }

  componentWillMount(){
    if (typeof window !== `undefined`) {
      if(window.innerWidth >= 768) {
        this.setState({width: 460});
        this.setState({height: 580});
      }
      else if(window.innerWidth >= 375) {
        this.setState({width: 300});
        this.setState({height: 380});
    }}

    
  }

  render() {
    
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        canvas: this.state.canvas,
      })
    })  
    return (    
      <Fragment>        
          <canvas ref={c => (this.c = c)} width={this.state.width} height={this.state.height} />        
        {this.state.canvas && children}                
      </Fragment>
    )
  }
}

//<p>Width: {this.state.width} / {window.innerWidth}</p>              
//<p>Height: {this.state.height} / {window.innerHeight}</p>

export default DesignCanvas
