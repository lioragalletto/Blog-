<<<<<<< HEAD
import React from 'react'

import Navbar from '../NavBar/NavBar'
import Footer from '../../pages/CV/Footer/Footer'

   



const Layout =({children,footer}) => {

 

  

  return (
    <>
     
     <Navbar/>
     {children} 
     {footer === true  &&
     <Footer />
    }

    
   
    </>
  )
=======
import React, { Component } from 'react';
import Navbar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Liora Galletto"
    };
  }

  render() {
    return (
      <>
        <Header name={this.state.name} />
        <Navbar />
        {this.props.children}
        <Footer name={this.state.name} />
      </>
    );
  }
>>>>>>> b5cb8b2ff9e6f714feaa1fccb34d625ac224a5aa
}

export default Layout;
