import React, { Component } from 'react';
import "./Footer.css";

class Footer extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <footer>
          <nav className="conteneur"><a href="informations.html">Informations</a> - <a href="mentionslégales.html">Mentions légales</a> - <a href="Contact.html">Contact</a></nav>
          <p className="conteneur">© 2023 Conception et réalisation par {this.props.name} Tous droits réservés.</p>
        </footer>
      </div>
    );
  }
}

export default Footer;
