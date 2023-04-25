import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './Compteur.css';

class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    document.title = `le compteur est a ${this.state.count}`;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      document.title = `le compteur est a ${this.state.count}`;
    }
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <NavBar />
        <div className='container'>{count}</div>
        <button className='increment' onClick={this.increment}>
          increment +
        </button>
        <button className='decrement' onClick={this.decrement}>
          decrement -
        </button>
        <button className='reset' onClick={this.reset}>
          Reset
        </button>
      </div>
    );
  }
}

export default Count;

