<<<<<<< HEAD:src/components/Metier/Metier.js
import React,{useState} from 'react'


import "./Metier.css"
=======
import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout';
import "./Metier.css";
>>>>>>> b5cb8b2ff9e6f714feaa1fccb34d625ac224a5aa:src/pages/Metier/Metier.js

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

<<<<<<< HEAD:src/components/Metier/Metier.js
    });
    const handleJunior = () => {
        setState((prevState)=> ({...prevState, niveau : "Junior"}))
    }
    const handleIntermediaire = () => {
        setState((prevState)=> ({...prevState, niveau : "Intermediaire"}))
    }
    const handleSenior = () => {
        setState((prevState)=> ({...prevState, niveau : "Senior"}))
    }
  return (
    <>
   
    <div>
     
       <h1> Je suis {state.metier}  {" "}  {state.niveau}</h1>
       <button className='junior' onClick={ ()=> handleJunior() }>  Dans trois mois je serais Junior </button>
       <button className='intermediaire' onClick={ ()=> handleIntermediaire() }> Dans un ans je serais Intermediaire</button>
       <button className='senior'onClick={ ()=> handleSenior() }> Dans 5 ans je serais Senior</button>
    </div>

  

   
    </>
  )
=======
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
>>>>>>> b5cb8b2ff9e6f714feaa1fccb34d625ac224a5aa:src/pages/Metier/Metier.js
}

export default Metier;
