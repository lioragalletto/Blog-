import React , {useEffect,useState} from 'react'
import axios from "axios"
import NavBar from '../../components/NavBar/NavBar';
import Header from '../../components/Header/Header';




const  Portfolio = () => {

    const [data, setData] = useState();

useEffect(() => {
    console.log("mon composant est monte")
    axios.get('https://sabik-5af023.appdrag.site/api/getAllProjects', {
      params: {
        "AD_PageNbr" : "1",
        "AD_PageSize" : "500"
      }
    }).then(function(response){
      console.log(response.data.Table);
      setData(response.data.Table)
    });
  },[]) // il manquait ca
  
  return (
    
   

    
      <div className="container">
      {<Header/>}
      {<NavBar/>}
     
      <h1 className='titre'> Mes projets </h1>
      {
        data?.map((row)=> (
         
          <div key ={row.id}  className="bg-secondary shadow-lg rouned m-3 p-3" >
           <h2>{row.tittle} </h2>
          <img src ={row.image} alt= ""  style={{width :"800px"}}/>
           {row.lien && <a href ={row.lien} target="_blank"rel="noopemer noreferrer" style={{color:"black"}}> Clique ici pour le lien </a>}
          <p> {row.description}</p> 


          </div>
          
        )
        ) }
    </div>
  )}


export default Portfolio
