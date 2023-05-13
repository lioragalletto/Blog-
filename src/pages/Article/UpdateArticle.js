import React , {useState} from 'react'
import { useEffect } from 'react';
import axios from "axios"


const UpdateArticle = () => {

  const [error,setError] = useState(false);
  const[messageSuccess,setmessageSuccess]= useState(false)
  const [form, setForm] = useState({
      id : "",
      tittle: "",
      description: "",
      auteur: ""
  });

useEffect( () => {
  console.log("form", form)
},[form])


const handleSubmit =(e) => {
  e.preventDefault();
  axios.get('https://webschool-a1623a.appdrag.site/api/checkToken', {
         params: {
                "token": localStorage.getItem("tokenBlog"),
                "AD_PageNbr": "1",
                "AD_PageSize": "500"
         }
        }).then(function (response) {
            console.log(response.data.Table.length);
            if (response.data.Table.length > 0) {

              axios.get('https://sabik-5af023.appdrag.site/api/UpdateArticles', {
                params: {
                  "tittle" :form.tittle,
                  "auteur" : form.auteur,
                  "description" :form.description,
                  "id" : form.id
                }
              }).then(function(response){
                console.log(response.data);
                setmessageSuccess(true)
                setError(false)
                setForm({tittle:"",auteur:"",description:"",id:""})
              });
            } else {
              setError(true)
              setmessageSuccess(false)
            }
          });
        };
   

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        
       

                    <div>
                        <label htmlFor="">tittle</label>
                        <input type="text" value={form.tittle} onChange={(e) => setForm((prevState) => ({ ...prevState, tittle: e.target.value }))} />
                    </div>
                    <div>
                        <label htmlFor="">Description </label>
                        <input type="text" value={form.description} onChange={(e) => setForm((prevState) => ({ ...prevState, description: e.target.value }))} />
                    </div>
                    <div>
                        <label htmlFor="">auteur</label>
                        <input type="text" value={form.auteur} onChange={(e) => setForm((prevState) => ({ ...prevState, auteur: e.target.value }))} />
                    </div>
                    <div>
                        <label htmlFor="">id</label>
                        <input type="text" value={form.id} onChange={(e) => setForm((prevState) => ({ ...prevState, auteur: e.target.value }))} />
                    </div>
                    <button type="submit"  className="btn btn-primary">Validez pour modifier un article </button>
                    
                        <h1 className="text-success">Bravo un article a ete ajoute</h1>
                    
                    {error &&
                        <h1 className="text-danger">Oups l'article n'est pas ajoute</h1>
                    }
                    
               </form>

                </div>
           
        
  )
}

export default UpdateArticle
