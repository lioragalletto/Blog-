import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Layout from '../../components/Layout/Layout';

class MouseTracker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: { x: 0, y: 0 }
    };
  }

  handleMouseMove = (event) => {
    this.setState({ position: { x: event.clientX, y: event.clientY } });
    console.log("position", { x: event.clientX, y: event.clientY });
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.handleMouseMove);
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove);
  }

  render() {
    const { position } = this.state;
    return (
      <>
        <Layout>
          <div>
            <Link to="/">
              <button className="btn btn-danger">retour</button>
            </Link>
            <p>Position de la souris :</p>
            <p>
              X: {position.x}, Y: {position.y}
            </p>
          </div>
        </Layout>
      </>
    );
  }
}

export default MouseTracker;
