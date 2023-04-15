import React , {useState} from 'react'
import NavBar from '../../components/NavBar/NavBar'
import "./Toogle.css"

const Toogle = () => {
    const [toogle, setToogle] = useState(true)
  return (
    <div>
      <NavBar/>
      <h1> Application Toogle </h1>
      <button onClick={()=> setToogle(!toogle)}> Toogle</button>
      {toogle && <div> 
        <p> coucou </p>
        </div>}
    </div>
  )
}

export default Toogle
