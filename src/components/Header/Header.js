
import React, { Component } from 'react';
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changeColor: "red"
    };
  }

  handleClick = () => {
    this.setState({ changeColor: "blue" });
  }

  render() {
    console.log("props depuis Header", this.props);
    return (
      <div className="conteneur">
        <div className="normal-flex">
          <div className="haut-gauche">
            <h1 className={`text-${this.state.changeColor}`} onClick={this.handleClick}>{this.props.name}</h1>

            <strong><span>C</span>ommunication</strong> /
            <strong><span>M</span>arketing</strong> /
            <strong><span>D</span>igital</strong>
          </div>
          <div className="haut-droit">
            <a href="/">Télécharger mon c.v.</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
