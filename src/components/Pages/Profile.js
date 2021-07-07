import React from 'react'
import { Link } from 'gatsby'
import Layout from '../Layout'
import { getCurrentUser } from '../Auth/AppUser'
//import { AppContent } from '../LayoutAuth'

const Profile = () => {
  const user = getCurrentUser()
  return (
    <Layout>
    <div className="container-login100">      
        <h1>Here's the Profile Page</h1>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone_number}</p>
        <Link to="/home">Home</Link>      
    </div>
    </Layout>
  )
}

export default Profile
