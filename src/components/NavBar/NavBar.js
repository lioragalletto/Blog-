import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import "./NavBar.css";

const Navbar = () => {
   const changeOnOver = () => {
    const element = document.getElementsByClassName("flex-menu")[0];
    element.style.border = "2px solid blue";
  };


return (
<nav>
      <div className="conteneur">
        <div className="flex-menu" onMouseOver={() => changeOnOver()}>
          <Link to="/" >Accueil</Link>
          <Link to="/Cv" >Mon c.v.</Link>
          <Link to="/blog" >Blog</Link>
          <Link to="/contact" >contact</Link>
          <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
              React
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/useEffectCompo" >UseEffect</Dropdown.Item>
              <Dropdown.Item as={Link} to="/Counter">Compteur</Dropdown.Item>
              <Dropdown.Item as={Link} to="/CountInterval">setInterval</Dropdown.Item>
              <Dropdown.Item as={Link} to="/MouseMove">Mouse Move</Dropdown.Item>
              <Dropdown.Item >Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
       