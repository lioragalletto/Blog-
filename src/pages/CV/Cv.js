
import React, { Component } from 'react';
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import NavBar from '../../components/NavBar/NavBar';
import Main from "../../components/Main/Main";
import SectionPresentation from '../../components/SectionPresentation/SectionPresentation';

class Cv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Liora Galletto"
    };
  }

  HandleName = (cb) => {
    this.setState({ name: cb });
  }

  render() {
    const { name } = this.state;
    return (
      <div className=''>
        <header>
          <Header name={name} />
          <NavBar />
        </header>

        <SectionPresentation />

        <Main HandleName={this.HandleName} />

        <Footer name={name} />

      </div>
    );
  }
}

export default Cv;
