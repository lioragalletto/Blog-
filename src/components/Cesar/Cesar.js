import React, {useEffect, useState} from 'react'
import imgCesar from "../../assets/delon_cesar.jpg"

const Cesar = () => {
    const [nameofKing, setNameofKing] = useState("vide"); // une variable


    const [testArme, setTestArme] = useState(0);

    useEffect(() => { // ecouter letat du component
        console.log("moi cesar je suis monté")
        setNameofKing("Cesar")

        return () => {
            setNameofKing("")
            setTestArme("")
           alert("Cesar et son arme ont ete demonté") ; 
        } 

    }, []);

    useEffect(() => {
        console.log("mon arme a ete modifie")
    }, [testArme]);

    const handleClick = () => {
  
        setTestArme(prevState=> (prevState+1 ) )// des que je veux aj une pers a mon roi je fai prevstate +1
        
    }
    //setTestArme(prevState => (prevState + 1)): Cette ligne utilise le hook setTestArme pour mettre à jour la valeur de testArme. La fonction setTestArme reçoit une fonction de rappel en paramètre, appelée prevState (état précédent), qui représente la valeur actuelle de testArme. La fonction de rappel retourne la nouvelle valeur de testArme, qui est obtenue en ajoutant 1 à l'état précédent. Ainsi, à chaque fois que la fonction handleClick est appelée, la valeur de testArme est augmentée de 1.
    //En résumé, lorsque l'utilisateur clique sur le bouton, la fonction handleClick est exécutée, ce qui incrémente la valeur de testArme de 1. Cela entraîne également une mise à jour du composant, car la valeur de testArme est utilisée dans le rendu pour afficher le nombre d'armées de soldats de l'empereur Cesar.
  return (
    <div className='container'>
      <h1>Cesar vous dit bonjour</h1>
      <img src={imgCesar} alt="cesar" />
      le nom du roi est  : {nameofKing}
      <p>j'ai une armee de {testArme} millier de soldat</p>
      <button className='btn btn-dark' onClick={()=> handleClick()}>ajouter des soldat a l'emperur</button>
    </div>
  )
}


export default Cesar
