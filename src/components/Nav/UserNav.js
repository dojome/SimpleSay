import React from 'react'
import { navigate } from '@reach/router'
import { Auth } from 'aws-amplify'
import { AppUser } from '../Auth'

function UserNav() {
  const { logout } = AppUser
  function logOut(e) {
    e.preventDefault()

    Auth.signOut()
      .then(logout(() => navigate('/signin')))
      .catch(err => console.log('error: ', err))
  }

  return (
   <div></div>
  )
}

export default UserNav