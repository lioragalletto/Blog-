import React from 'react'


const Header = (props) => {
	
  return (
   
			<div className="conteneur">
				<div className="normal-flex">
					<div className="haut-gauche">
						<h1>Nom Prénom {props.name}</h1>
						<strong><span>C</span>ommunication</strong> /
						<strong><span>M</span>arketing</strong> /
						<strong><span>D</span>igital</strong>
					</div>
					<div className="haut-droit">
						<a href="a">Télécharger mon c.v.</a>
					</div>
				</div>
			</div> 

			
	
  )
}

export default Header
