import React ,{useState}from 'react'
import { useEffect } from 'react'
import Layout from '../../components/Layout/Layout'

import "./Compteur.css"



const Count = () => {

  const [count, setCount] = useState(0)



  useEffect(() => {
    document.title = `le compteur est a ${count}`
    
  }, [count]);
  const increment =() => {
    setCount(count+1)
  }
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
}

export default Count
