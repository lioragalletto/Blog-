

import React , {useEffect,useState} from 'react'
import axios from "axios"
/*import NavBar from '../../components/NavBar/NavBar';*/
/*import Header from '../../components/Header/Header';*/ 
import {Link} from "react-router-dom"
import NavbarOffCanva from '../../components/NavbarBoot/NavbarOffCanva'
import i18n from '../../i18n/config'





const  Blog = () => {

    const [data, setData] = useState();
    const [activeFooter, setActiveFooter] = useState(false);
    //La variable data sera utilisée pour stocker les données des articles de blog, et activeFooter sera utilisée pour afficher ou masquer un pied de page dans la page du blog.
    const [language, setLanguage] = useState();

    
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
  //Cette partie du code utilise le hook useEffect de React pour effectuer
  useEffect(() => {
    const handleChangeLanguage = () => {
      // La langue a changé, faites quelque chose ici...
      console.log('La langue a changé ! Nouvelle langue :', i18n.language);
      setLanguage(i18n.language)
    };
    
    i18n.on('languageChanged', handleChangeLanguage);

    // Nettoyage : supprime l'écouteur d'événement lorsque le composant est démonté
    return () => {
      i18n.off('languageChanged', handleChangeLanguage);
    };  }, [i18n]);

  const HandleFooter = () => {
    setActiveFooter(!activeFooter)
  }
//Cette fonction HandleFooter est utilisée pour inverser l'état activeFooter lorsque l'utilisateur clique sur un bouton.

  return (
    
     <>
     <NavbarOffCanva/>
      <div className="container">
      
      3
     
      <h1 className='titre'> Mon Blog </h1>
      {
        data?.map((row)=> (
          <Link className='text-decoration-none text-dark' to ={`/article/${row.id}`}>
         
          <div key ={row.id}  className="bg-secondary shadow-lg rouned m-3 p-3" >
           <h2>{ language === "fr" ?  row.tittle  : row.tittleEn} </h2>
          <img src ={row.image} className="img-fluid" alt= ""/>
          <p>{language === "fr" ?   row.description.slice(0, 100) : row.descriptionEn?.slice(0, 100)}...</p>

          <p> {language === "fr" ? row.auteur : row.auteurEn } </p>
          </div>
          </Link>
          
        )
        ) }
          <Link to="/">
            <button className="btn btn-primary">retourner a la page initial</button>
          </Link>
    </div>
    <div>Hello blog</div>
        <button onClick={() => HandleFooter()} >active Footer</button>


    </>
  )}
  export default Blog

//Le tableau d'articles de blog est stocké dans l'état "data" grâce au hook useState. Il est récupéré depuis une API à l'aide d'une requête HTTP GET effectuée dans le hook useEffect.La méthode map est utilisée pour parcourir le tableau d'articles et générer un lien vers chaque article avec le titre, une courte description, l'image et l'auteur. 

//La méthode slice est utilisée pour afficher uniquement les 100 premiers caractères de la description.Le composant Link de la bibliothèque "react-router-dom" est utilisé pour créer les liens vers les pages d'articles individuels. 
//la propriété "to" de Link contient l'URL dynamique qui inclut l'identifiant unique de chaque article, stocké dans la propriété "id" de chaque objet article dans le tableau "data".Le code HTML pour chaque article est contenu dans une div avec la classe "bg-secondary shadow-lg rounded m-3 p-3".
// Cette div contient le titre de l'article, une courte description, l'image de l'article et l'auteur de l'article.

