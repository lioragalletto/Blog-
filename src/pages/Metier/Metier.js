import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout';
import "./Metier.css";

class Metier extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      metier: "FullStack Dev",
      niveau: "en formation"
    };
  }

  handleJunior = () => {
    this.setState((prevState) => ({ ...prevState, niveau: "Junior" }));
  }

  handleIntermediaire = () => {
    this.setState((prevState) => ({ ...prevState, niveau: "Intermediaire" }));
  }

  handleSenior = () => {
    this.setState((prevState) => ({ ...prevState, niveau: "Senior" }));
  }

  render() {
    const { metier, niveau } = this.state;
    return (
      <>
        <Layout>
          <div>
            <h1>Je suis {metier} {niveau}</h1>
            <button className='junior' onClick={this.handleJunior}>Dans trois mois je serai Junior</button>
            <button className='intermediaire' onClick={this.handleIntermediaire}>Dans un an je serai Intermediaire</button>
            <button className='senior' onClick={this.handleSenior}>Dans 5 ans je serai Senior</button>
          </div>
        </Layout>
      </>
    );
  }
}

export default Metier;
