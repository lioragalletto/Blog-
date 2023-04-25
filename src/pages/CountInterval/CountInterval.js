import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout';

class CountInterval extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState(prevState => ({ time: prevState.time + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { time } = this.state;
    return (
      <>
        <Layout>
          <div>
            <h1>Mon compteur tourne depuis : {time}</h1>
          </div>
        </Layout>
      </>
    );
  }
}

export default CountInterval;





