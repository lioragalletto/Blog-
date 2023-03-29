
import './App.css';
import { useState } from 'react';

import Footer from './components/Footer/Footer';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Section from "./components/Section/Section";




 
function App() {


  const [name, setName] = useState("Liora Galletto");


  const HandleName = (cb) => {
    setName(cb)

  }
  
  return (
    <div className=''>
    <header>
   <Header name={name} />
   <NavBar/>
   </header>
   <Section HandleName= {HandleName} />

		<Footer name={name}/>
   

    </div>
      
   
  );
}

export default App;
