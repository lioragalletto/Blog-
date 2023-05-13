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



const Cv = () => {
    const [name, setName] = React.useState("Liora Galletto");


  const HandleName = (cb) => {
    setName(cb)

  }
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
}

export default Cv
