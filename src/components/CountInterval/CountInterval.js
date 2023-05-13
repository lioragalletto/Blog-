import React ,{useState,useEffect} from 'react'
import Layout from '../../components/Layout/Layout';


const CountInterval = () => {
  const [time,setTime] = useState();



  useEffect(() => {
    
     const SetintervalId = setInterval(()=>{
      setTime((prevstate) => ( prevstate +1))
     },1000)
     return ()=> clearInterval(SetintervalId)
  }, []);


  return (
    <>
    <Layout>
    <div>
     <h1> Mon compteur tourne depuis : {time} </h1>
      
    </div>
   </Layout>
</>
  )
}

export default CountInterval




