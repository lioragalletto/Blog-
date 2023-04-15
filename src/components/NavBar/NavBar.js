import React from "react"
import { Link } from "react-router-dom"



const NavBar = ()=> {
	return (

         <nav>
				<div className="conteneur">
					<div className="flex-menu">
						 <Link to="/Cv">Cv</Link>
					     <Link to="/List"> List</Link>
						 <Link to="/Compteur"> Compteur </Link>
						 <Link to="/Toogle"> Toogle</Link>
						 <Link to="/Metier"> Metier </Link>
						
					</div>
				</div>
			</nav>
  
	)
  

}
export default  NavBar