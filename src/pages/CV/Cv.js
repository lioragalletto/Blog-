<<<<<<< HEAD
import React  from 'react'

import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import NavBar from '../../components/NavBar/NavBar';
import Main from "./Main/Main";
import SectionPresentation from './SectionPresentation/SectionPresentation';
//import List from './components/List/list';
//import Metier from './components/Metier/Metier';
//import Count from './components/Compteur/Compteur';
// import Toogle from './components/Toogle/Toogle';
=======

import React, { Component } from 'react';
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import NavBar from '../../components/NavBar/NavBar';
import Main from "../../components/Main/Main";
import SectionPresentation from '../../components/SectionPresentation/SectionPresentation';
>>>>>>> b5cb8b2ff9e6f714feaa1fccb34d625ac224a5aa

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

<<<<<<< HEAD
const Cv = () => {
    const [name, setName] = React.useState("Liora Galletto");
=======
  render() {
    const { name } = this.state;
    return (
      <div className=''>
        <header>
          <Header name={name} />
          <NavBar />
        </header>
>>>>>>> b5cb8b2ff9e6f714feaa1fccb34d625ac224a5aa

        <SectionPresentation />

        <Main HandleName={this.HandleName} />

        <Footer name={name} />

      </div>
    );
  }
<<<<<<< HEAD
  return (
    
      <div className=''>
    
        <header>
       <Header name={name} /> 
        <NavBar/>  
        </header>

    <SectionPresentation/>
    
     <Main HandleName= {HandleName} />
    
   
         <Footer name={name}/>
    
 
     </div>
   
  );
=======
>>>>>>> b5cb8b2ff9e6f714feaa1fccb34d625ac224a5aa
}

export default Cv;
