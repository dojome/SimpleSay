import React from 'react';
import axios from 'axios';
import Layout from '../components/Layout'

export default class PersonList extends React.Component {

  state = {
    customers: [], 
  }

   componentDidMount() {
    axios.get(`https://suj0hv2ee1.execute-api.ap-southeast-1.amazonaws.com/dev/list`)
      .then(res => {
        const customers = res.data.candidates;
        this.setState({ customers });
      })      
  }

  render() {
    return (
      <Layout>      
        <div>
          {this.state.customers.map(customers => 
              <p key={customers.id}>{customers.firstName},{customers.lastName},{customers.id}</p>
              )            
          }
        </div>
      </Layout> 
    )
  }
}