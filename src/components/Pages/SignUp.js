import React from 'react'
import Grid from '@material-ui/core/Grid';
import { navigate } from '@reach/router'
import { Link } from 'gatsby'
import { Auth } from 'aws-amplify'
import NumberFormat from 'react-number-format'
import Layout from '../Layout'
import { SignInRegisterAdvert, SignInRegister, GoogleAdvert } from '../../styles/styles'
import StyledBackgroundSection from './BackgroundImage'

import { AuthForm, Email, Password, ConfirmationCode } from '../Forms'

const initialState = {
  username: ``,
  password: ``,
  email: '',
  phone_number: '',
  auth_code: '',
  stage: 0,
  error: '',
  loading: false,
}

class SignUp extends React.Component {
  state = initialState

  handleUpdate = event => {
    if (event.target.name === 'email') {
      this.setState({
        [event.target.name]: event.target.value,
        username: event.target.value,
        error: '',
      })
    }
    if (event.target.name === 'phone_number') {
      this.setState({
        [event.target.name]: event.target.value.replace(/\D/g, ''),
        error: '',
      })
    }
    this.setState({
      [event.target.name]: event.target.value,
      error: '',
    })
  }

  signUp = async e => {
    e.preventDefault()
    const { username, password, email, phone_number } = this.state
    this.setState({ loading: true })
    try {
      await Auth.signUp({
        username,
        password,
        attributes: { email, phone_number },
      })
      this.setState({ stage: 1, loading: false })
    } catch (err) {
      this.setState({ error: err, loading: false })
      console.log('error signing up...', err)
    }
  }

  resendCode = async e => {
    e.preventDefault()
    const { email } = this.state
    this.setState({ loading: true })
    try {
      await Auth.resendSignUp(email)
      this.setState({ stage: 1, loading: false })
    } catch (err) {
      this.setState({ error: err, loading: false })
      console.log('error resending code...', err)
    }
  }

  verify = async e => {
    e.preventDefault()
    const { email, auth_code } = this.state
    this.setState({ loading: true })
    try {
      await Auth.verifyCurrentUserAttributeSubmit(email, auth_code)
      this.setState({ loading: false })
      navigate('/signin')
    } catch (err) {
      this.setState({ error: err, loading: false })
      console.log('error signing up...', err)
    }
  }

  confirmSignUp = async e => {
    e.preventDefault()
    this.setState({ loading: true })
    const { email, auth_code } = this.state
    try {
      this.setState({ loading: true })
      await Auth.confirmSignUp(email, auth_code)
      this.setState({ loading: false })
      navigate('/signin')
    } catch (err) {
      this.setState({ error: err, loading: false })
      console.log('error confirming signing up...', err)
    }
  }

  render() {
    if (this.state.stage === 0) {
      return (
        <Layout>          
        <StyledBackgroundSection>
        <Grid container spacing={0}>
          <Grid item xs={0} sm={6} md={6} lg={8}>
            <SignInRegisterAdvert>
            <p>Simply Say Advert</p>
            </SignInRegisterAdvert>
            </Grid>                
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <SignInRegister>
                <AuthForm title="Create your new account" error={this.state.error}>
                  <Email
                    handleUpdate={this.handleUpdate}
                    email={this.state.email}
                    autoComplete="off"
                  />
                  <Password
                    handleUpdate={this.handleUpdate}
                    password={this.state.password}
                    autoComplete="off"
                  />               
                  <button
                    onClick={e => this.signUp(e)}
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={this.state.loading}
                  >
                    {this.state.loading ? null : 'Create Account'}
                    {this.state.loading && (
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      />
                    )}
                  </button>
                  <p style={{ marginTop: 40 }} className="text-center">
                    Have an account? <Link to="/signin">Sign in</Link>
                  </p>
                </AuthForm>
            </SignInRegister>
           </Grid>  
           </Grid>
           <Grid container spacing={0}>
              <Grid item xs={10}>
              <GoogleAdvert>
                <p>Google Adverts</p>
              </GoogleAdvert>
              </Grid>     
            </Grid> 
           </StyledBackgroundSection>
        </Layout>
      )
    }
    return (
      <Layout>          
        <StyledBackgroundSection>
        <Grid container spacing={0}>
          <Grid item xs={0} sm={6} md={6} lg={8}>
            <SignInRegisterAdvert>
            <p>Simply Say Advert</p>
            </SignInRegisterAdvert>
            </Grid>                
            <Grid item xs={12} sm={6} md={6} lg={4}>
            <SignInRegister>
              <AuthForm>
                <Email
                  handleUpdate={this.handleUpdate}
                  email={this.state.email}
                  autoComplete="off"
                />
                <ConfirmationCode
                  handleUpdate={this.handleUpdate}
                  auth_code={this.state.auth_code}
                  autoComplete="off"
                />
                <button
                  onClick={e => this.confirmSignUp(e)}
                  type="submit"
                  className="btn btn-primary btn-block"
                  disabled={this.state.loading}
                >
                  {this.state.loading ? null : 'Confirm'}
                  {this.state.loading && (
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    />
                  )}
                </button>
                <p style={{ marginTop: 40 }} className="text-center">
                  Have an account? <Link to="/signin">Sign in</Link>
                </p>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <p
                    style={{ marginTop: 20, marginBottom: 20 }}
                    className="text-center"
                  >
                    Lost your code?
                  </p>
                  <button
                    className="btn btn-link"
                    onClick={e => this.resendCode(e)}
                    disabled={this.state.loading}
                  >
                    Resend Code
                  </button>
                </div>
          </AuthForm>  
        </SignInRegister>
        </Grid>
        </Grid>
        <Grid container spacing={0}>
              <Grid item xs={10}>
              <GoogleAdvert>
                <p>Google Adverts</p>
              </GoogleAdvert>
              </Grid>     
            </Grid> 
        </StyledBackgroundSection>
    </Layout>
    )
  }
}

export default SignUp
