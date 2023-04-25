import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout';
import './Toogle.css';

class Toogle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toogle: true,
    };
  }

  handleToogle = () => {
    this.setState((prevState) => ({
      toogle: !prevState.toogle,
    }));
  };

  render() {
    const { toogle } = this.state;
    return (
      <>
        <Layout>
          <div>
            <h1>Application Toogle</h1>
            <button onClick={this.handleToogle}>Toogle</button>
            {toogle && (
              <div>
                <p>coucou</p>
              </div>
            )}
          </div>
        </Layout>
      </>
    );
  }
}

export default Toogle;
