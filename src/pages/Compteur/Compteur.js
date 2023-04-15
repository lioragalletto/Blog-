import React ,{useState}from 'react'
import NavBar from '../../components/NavBar/NavBar'
import "./Compteur.css"



const Count = () => {

  const [count, setCount] = useState(0)
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
    
    <div>
      
      <NavBar/>
      <div className='container'>{count}</div>
      <button className='increment' onClick={()=> increment ()}> increment +</button>
      
      <button className='decrement' onClick={()=> decrement()}> decrement - </button>
      
      <button className='reset'onClick={()=> reset()}> Reset   </button>
    </div>
  )
}

export default Count
