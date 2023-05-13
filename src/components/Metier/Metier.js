
import React,{useState} from 'react'


import "./Metier.css"

const Metier = () => {

  const [state, setState] = useState({
    id: 1, 
    metier : "Fullstack Dev", 
    Niveau : "en formation"
});

   const handleJunior = () => {
    setState((prevState) => ({ ...prevState, niveau: "Junior" }));
  }

   const handleIntermediaire = () => {
   setState((prevState) => ({ ...prevState, niveau: "Intermediaire" }));
  }

   const handleSenior = () => {
   setState((prevState) => ({ ...prevState, niveau: "Senior" }));
  }

  return ( 
     
          <div>
            <h1>Je suis {state.metier} {""} {state.Niveau}</h1>
            <button className='junior' onClick={() => handleJunior() }>Dans trois mois je serai Junior</button>
            <button className='intermediaire' onClick={ () => handleIntermediaire() }>Dans un an je serai Intermediaire</button>
            <button className='senior' onClick={() => handleSenior() }>Dans 5 ans je serai Senior</button>
          </div>
      
    );
  }


export default Metier;
