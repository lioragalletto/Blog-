
import React , {useEffect,useState} from 'react'
import axios from "axios"
import NavBar from '../../components/NavBar/NavBar';
import Header from '../../components/Header/Header';




const  Blog = () => {

    const [data, setData] = useState();

useEffect(() => {
    console.log("mon composant est monte")
    axios.get('https://sabik-5af023.appdrag.site/api/getallBlog', {
  params: {
    "AD_PageNbr" : "1",
    "AD_PageSize" : "500"
  }
}).then(function(response){
  console.log(response.data);
  setData(response.data.Table)
});
  },[]) 
  
  return (
    
   

    
      <div className="container">
      {<Header/>}
      {<NavBar/>}
     
      <h1 className='titre'> Mon Blog </h1>
      {
        data?.map((row)=> (
         
          <div key ={row.id}  className="bg-secondary shadow-lg rouned m-3 p-3" >
           <h2>{row.tittle} </h2>
          <img src ={row.image} alt= ""/>
           
          <p> {row.description}</p> 


          </div>
          
        )
        ) }
    </div>
  )}


export default Blog
