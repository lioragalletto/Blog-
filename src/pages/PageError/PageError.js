<<<<<<< HEAD
import React from 'react'
import Layout from '../../components/Layout/Layout'

const PageError = () => {
  return (
    <>
    <Layout>
    <div>
      Vous etes perdu 
    </div>
    </Layout>
    </>
  )
=======
import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout';

class PageError extends Component {
  render() {
    return (
      <>
        <Layout>
          <div>
            Vous êtes perdu
          </div>
        </Layout>
      </>
    );
  }
>>>>>>> b5cb8b2ff9e6f714feaa1fccb34d625ac224a5aa
}

export default PageError;
