import React, { useRef, useState } from 'react'
import axios from "axios"

const DeleteArticle = () => {

  const inputRef = useRef(null)
  const [messageSuccess, setMessageSuccess] = useState(false);
  const [messageError, setmessageError] = useState(false);
  // console.log(inputRef)

  const handleSubmit = (e) => {
    console.log("ma fonction est declenchE")
    e.preventDefault()
    //La fonction handleSubmit est un gestionnaire d'événements appelé lorsque l'utilisateur soumet le formulaire. Elle prend un paramètre e qui correspond à l'événement de soumission.

    //Dans cette fonction, la première ligne console.log("ma fonction est declenchE") affiche un message dans la console du navigateur pour indiquer que la fonction a été déclenchée.

   //La deuxième ligne e.preventDefault() empêche le comportement par défaut de la soumission du formulaire qui consiste à recharger la page. En effet, la soumission du formulaire déclenche normalement une requête HTTP et recharge la page. En appelant preventDefault(), on empêche ce comportement par défaut et on peut gérer la soumission du formulaire avec du code JavaScript.

    console.log(inputRef.current.value)

    axios.get('https://sabik-5af023.appdrag.site/api/DeleteArticles', {
      params: {
        "id": inputRef.current.value
      }
    }).then(function (response) {
      console.log(response.data);
      if (response.data.affectedRows > 0) {
        setMessageSuccess(true)
        setmessageError(false)
      }else{
        setmessageError(true)
        setMessageSuccess(false)
      }
      
    });
  }

  return (
    <div>
      <h1> DeleteArticle</h1>

      <form onSubmit={handleSubmit} >
        <label htmlFor=""> Id de mon article</label>
        <input style={{backgroundColor : "red"}} type="text" ref={inputRef} />
        <input type="submit" value="Supprimer" />
        { messageSuccess &&
          <h2 className="text-success">Larticle a ete supprime</h2>
        }
        {messageError &&
          <h2 className="text-warning">larticle na pas ete supprime</h2>
        }

      </form>
          
    </div>
  )
}

export default DeleteArticle
// 