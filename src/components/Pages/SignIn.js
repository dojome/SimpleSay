import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Link, StaticQuery, graphql } from "gatsby"
import { navigate } from '@reach/router'
import { Auth } from 'aws-amplify'
import Layout from '../Layout'
import { AppUser } from '../Auth'
import { AuthForm, Email, Password } from '../Forms'
import { SignInRegisterAdvert, SignInRegister, GoogleAdvert } from '../../styles/styles'
import StyledBackgroundSection from './BackgroundImage'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'

class SignIn extends React.Component {
  state = {
    username: ``,
    email: ``,
    password: ``,
    error: ``,
    loading: false,
  }

  async componentDidMount() {
    await this.checkUserAuthStatus();
  }

  handleUpdate = event => {
    if (event.target.name === 'email') {
      this.setState({
        [event.target.name]: event.target.value,
        username: event.target.value,
        error: '',
      })
    }
    this.setState({
      [event.target.name]: event.target.value,
      error: '',
    })
  }

  login = async e => {
    const { setUser } = AppUser
    e.preventDefault()
    const { username, password } = this.state
    try {
      this.setState({ loading: true })
      await Auth.signIn(username, password)
      const user = await Auth.currentAuthenticatedUser()
      const userInfo = {
        ...user.attributes,
        username: user.username,
      }
      setUser(userInfo)
      this.setState({ loading: false })
      navigate('/home')
    } catch (err) {
      this.setState({ error: err, loading: false })
      console.log('error...: ', err)
    }
  }

  signinwithFB = async e => {
    e.preventDefault()
    await this.doSocialLogin("Facebook");
  }

  signinwithGoogle = async e => {
    e.preventDefault()
    await this.doSocialLogin("Google");
  }

  async doSocialLogin(provider) {
    try {
      this.setState({ loading: true });
      await Auth.federatedSignIn({
        provider
      });
    }
    catch (error) {
      this.setState({ error: error, loading: false });
      console.log('error...: ', error);
    }
  }

  async checkUserAuthStatus() {
    try {
      // if user is already logged in go to home
      this.setState({ loading: true });
      const { setUser } = AppUser;
      const user = await Auth.currentAuthenticatedUser();
      const userInfo = {
        ...user.attributes,
        username: user.username,
      };
      setUser(userInfo);
      this.setState({ loading: false });
      navigate('/home'); 
    } catch (error) {
      console.log(error);
      this.setState({ loading: false });
    }
  }

  render() {  
    return (
      <Layout>          
          <StyledBackgroundSection>          
          <Grid container spacing={0}>
            <Grid item xs={false} sm={6} md={6} lg={8}>
              <SignInRegisterAdvert>
              <p>Simply Say Advert</p>
              </SignInRegisterAdvert>
              </Grid>                
              <Grid item xs={12} sm={6} md={6} lg={4}>
              <SignInRegister>
                <AuthForm title="Sign in" error={this.state.error}>
                  <Email
                    handleUpdate={this.handleUpdate}
                    email={this.state.email}
                    autoComplete="on"
                  />
                  <Password
                    handleUpdate={this.handleUpdate}
                    password={this.state.password}
                    autoComplete="on"
                  />
                  <p className="text-center">
                    Forgot your password? <Link to="/reset">Reset</Link>
                  </p>
                  <button
                    onClick={e => this.login(e)}
                    type="submit"
                    className="btn btn-signin btn-block"
                    disabled={this.state.loading}
                  >
                    {this.state.loading ? null : 'Sign In'}
                    {this.state.loading && (
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      />
                    )}
                  </button>
                  <button 
                    className="btn btn-facebooksignin btn-block" 
                    onClick={this.signinwithFB}
                    disabled={this.state.loading}
                  >
                    <ButtonIcon >
                      <FontAwesomeIcon icon={faFacebook} />
                    </ButtonIcon>
                    {this.state.loading ? null : 'Sign In with Facebook'}
                    {this.state.loading && (
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      />
                    )}
                  </button>
                  <button 
                    className="btn btn-googlesignin btn-block" 
                    onClick={this.signinwithGoogle}
                    disabled={this.state.loading}
                  >
                    <ButtonIcon >
                      <FontAwesomeIcon icon={faGoogle} />
                    </ButtonIcon>
                    {this.state.loading ? null : 'Sign In with Google'}
                    {this.state.loading && (
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      />
                    )}
                  </button>
                  <p style={{ marginTop: 40 }} className="text-center">
                    Need an account? <Link to="/signup">Create</Link>
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
}

const ButtonIcon = styled.span`   
  padding: 11px;
`

export default SignIn
