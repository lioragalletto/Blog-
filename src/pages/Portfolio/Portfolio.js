
import React , {useEffect,useState} from 'react'
import axios from "axios"

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
      console.log(response.data.table);
    
          setData(response.data.Table)
        });
      },[]) // il manquait ca


    const handleFilter =  (cb) => {
  
    console.log("cb", cb)
    console.log("data",data)
    const FilterProjects = data.filter(row => row.categorie === cb)
    setData(FilterProjects)

    }
    
    

  
  return (

    <>
    
      <div className="container">
     

     
      <h1> {t("Portfolio.tittle")} </h1> 

     
       
        <button className='btn btn-success' onClick={() => handleFilter("Html/Css")}>Html/Css</button>
        <button className='btn btn-danger' onClick={() => handleFilter("JavaScript")}>JavaScript</button>
        <button className='btn btn-warning' onClick={() => handleFilter("React et JavaScript ")}>JavaScript & React</button>
      
        
      

      { data?.map((row)=> (
         
          <div key={row.id}  className="bg-secondary shadow-lg rouned m-3 p-3" >

           <h2>{row.tittle} </h2>
           
          { row.lien ? (
            <a href={row.lien} target="_blank" rel="noopener noreferrer">
                 <img src={row.image} className='img-fluid'  alt="" />
            </a>
           ) :(
            <img src ={row.image} className='img-fluid'  alt="" />
          )}
          
           {row.lien && <a href={row.lien} target="_blank"rel="noopemer noreferrer" style={{color:"black"}}> {t("Portfolio.click")}  </a>}
          <p> {row.description}</p> 
          <p> {row.categorie}</p>
        
         </div>
      ))}
          

         

       
      </div>
   
        
         
         
  
     
     
    </>
   )

 }
 



export default Portfolio