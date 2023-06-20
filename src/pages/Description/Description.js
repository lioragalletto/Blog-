import React from 'react'

import {Link} from "react-router-dom"
import "./Description.css"

const Description = () => {
  return (
    <div>
       <div className= "home-page">
        <div className='content'>
      <h1 className='heading'> Salut , je suis Liora Galletto </h1>
      <p className='text'> Développeuse passionné par les nouvelles technologies et l’univers du web, je suis spécialisé dans le développement front-end. Polyvalent, je maîtrise plusieurs langages de programmation dont HTML, CSS ,JavaScript et React  ainsi que  la création de sites web et d’applications. Je sais identifier et comprendre les besoins des utilisateurs pour de meilleurs résultats. Disponible immédiatement.  </p>
      <Link to= "Portfolio"  className='btn btn-secondary'> Projets </Link>

    </div>
    </div>
    </div>
  )
}

export default Description
