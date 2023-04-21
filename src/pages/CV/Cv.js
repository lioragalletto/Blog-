import React , {useState} from 'react'

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import NavBar from '../../components/NavBar/NavBar';
import Main from "../../components/Main/Main";
import SectionPresentation from '../../components/SectionPresentation/SectionPresentation';
//import List from './components/List/list';
//import Metier from './components/Metier/Metier';
//import Count from './components/Compteur/Compteur';
// import Toogle from './components/Toogle/Toogle';



const Cv = () => {
    const [name, setName] = useState("Liora Galletto");


  const HandleName = (cb) => {
    setName(cb)

  }
  return (
    <div>
      <div className=''>
    
    <Header name={name} />
     <NavBar/>


    <SectionPresentation/>
    
     <Main HandleName= {HandleName} />
    
   
         <Footer name={name}/>
    
 
     </div>
    </div>
  );
}

export default Cv
