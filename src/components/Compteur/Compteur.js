<<<<<<< HEAD:src/components/Compteur/Compteur.js
import React ,{useState}from 'react'
import { useEffect } from 'react'
import Layout from '../../components/Layout/Layout'

import "./Compteur.css"



const Count = () => {

  const [count, setCount] = useState(0)
=======
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
>>>>>>> b5cb8b2ff9e6f714feaa1fccb34d625ac224a5aa:src/pages/Compteur/Compteur.js

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
<<<<<<< HEAD:src/components/Compteur/Compteur.js
   const decrement =() => {
    setCount(count-1)
   }
   const reset=() => {
  setCount((0))
   }
   
    
  return (
    
    <>
    <Layout>
    <div>
      
      
      <div className='container'>{count}</div>
      <button className='increment' onClick={()=> increment ()}> increment +</button>
      
      <button className='decrement' onClick={()=> decrement()}> decrement - </button>
      
      <button className='reset'onClick={()=> reset()}> Reset   </button>
    </div>
    </Layout>
    </>
  )
=======
>>>>>>> b5cb8b2ff9e6f714feaa1fccb34d625ac224a5aa:src/pages/Compteur/Compteur.js
}

export default Count;

