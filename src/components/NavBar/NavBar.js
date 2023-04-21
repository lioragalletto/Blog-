import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import {Dropdown} from "react-bootstrap"


const NavBar = ()=> {
	const changeOver = () => {
	  const element = document.getElementsByClassName("flex-menu")[0]
	  element.style.border ="2px solid blue"
	}
	return (

         <nav>
				<div className="conteneur">
					<div className="flex-menu" onMouseOver={()=> changeOver()}>
						 <Link to="/"> Portfolio </Link>
						 <Link to="/Cv">Cv</Link>
						 <Link to="/blog" >Blog</Link>
                         <Link to="/contact" >contact</Link>
					    
						 <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
              UseEffect
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/useEffectCompo" >UseEffect</Dropdown.Item>
              <Dropdown.Item as={Link} to="/Compteur"> Compteur </Dropdown.Item>
			  <Dropdown.Item as={Link} to="/Metier">  Metier </Dropdown.Item>
			  <Dropdown.Item as={Link} to="/List"> List </Dropdown.Item>
			  <Dropdown.Item as={Link} to="/Toogle"> Toogle </Dropdown.Item>
              <Dropdown.Item >Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

					</div>
				</div>
			</nav>
  
	)
  

}
export default  NavBar