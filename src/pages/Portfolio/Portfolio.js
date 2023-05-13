import React , {useEffect,useState} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';
import {useTranslation} from "react-i18next"
 





const  Portfolio = () => {

    const [data, setData] = useState();
    const {t} = useTranslation()

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
    <>
    
   

    
      <div className="container">
     
     
      <h1> {t("Portfolio.tittle")} </h1> 
      {
        data?.map((row)=> (
         
          <div key={row.id}  className="bg-secondary shadow-lg rouned m-3 p-3" >
           <h2>{t("Portfolio.tittle1")} </h2>
           
          { row.lien ?
            <a href={row.lien} target="_blank" rel="noopener noreferrer">
                 <img src={row.image} className='img-fluid'  alt="" />
            </a>
            :
            <img src ={row.image} className='img-fluid'  alt="" />
          }
          
           {row.lien && <a href={row.lien} target="_blank"rel="noopemer noreferrer" style={{color:"black"}}> {t("Portfolio.click")}  </a>}
          <p> {row.description}</p> 
        

          </div>
        
        
       ) ) }
       <Link to="/">
        <button className="btn btn-primary">retourner a la page initial</button>
      </Link>
    </div>

  
   </>
  )}


export default Portfolio
