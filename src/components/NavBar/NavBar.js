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
          
        </div>
      </div>
    </nav>
  )
}

export default Navbar
       