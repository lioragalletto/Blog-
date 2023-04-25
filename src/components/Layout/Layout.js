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
}

export default Layout;
