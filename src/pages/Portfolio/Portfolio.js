<<<<<<< HEAD
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
        
=======
>>>>>>> b5cb8b2ff9e6f714feaa1fccb34d625ac224a5aa

import React, { Component } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout/Layout';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    console.log('Mon composant est monté');
    axios
      .get('https://sabik-5af023.appdrag.site/api/getAllProjects', {
        params: {
          AD_PageNbr: '1',
          AD_PageSize: '500',
        },
      })
      .then((response) => {
        console.log(response.data.Table);
        this.setState({ data: response.data.Table });
      });
  }

  render() {
    const { data } = this.state;
    return (
      <>
        <Layout>
          <div className="container">
            <h1 className="titre">Mes projets</h1>
            {data?.map((row) => (
              <div key={row.id} className="bg-secondary shadow-lg rouned m-3 p-3">
                <h2>{row.tittle}</h2>
                <img src={row.image} className="img-fluid" alt="" />
                {row.lien && (
                  <a href={row.lien} target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
                    Clique ici pour le lien
                  </a>
                )}
                <p>{row.description}</p>
              </div>
            ))}
          </div>
<<<<<<< HEAD
        
        
       ) ) }
       <Link to="/">
        <button className="btn btn-primary">retourner a la page initial</button>
      </Link>
    </div>

  
   </>
  )}

=======
        </Layout>
      </>
    );
  }
}
>>>>>>> b5cb8b2ff9e6f714feaa1fccb34d625ac224a5aa

export default Portfolio;
