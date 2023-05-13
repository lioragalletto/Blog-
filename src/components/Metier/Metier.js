import React,{useState} from 'react'


import "./Metier.css"


const Metier = () => {
    const [state, setState] = useState({
        
         id:1,
         metier : "FullStack Dev",
         niveau : "en formation"

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
}

export default Metier
