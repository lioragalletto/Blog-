


import React, { useState } from 'react'

const Rechercheutilisateurs = () => {
    const [utilisateurs] = useState([
        { id: 1, nom: 'Alice', metier: "devloppeuse" },
        { id: 2, nom: 'Bob', metier: "camionneur" },
        { id: 3, nom: 'Charlie', metier: "agent de securite" },
        { id: 4, nom: 'David', metier: "animateur" },
        { id: 5, nom: 'Eve', metier: "formateur" },
        { id: 6, nom: 'Eva', metier: "cuisto" }
    ]);
    //const [utilisateurs] = useState([ : Cette ligne utilise la fonction useState pour initialiser l'état local utilisateurs. La valeur initiale de cet état est un tableau contenant une liste d'utilisateurs.


    const [valueInput, setValueInput] = useState('');
    //const [valueInput, setValueInput] = useState(''); : Cette ligne initialise l'état local valueInput à une chaîne de caractères vide et utilise la fonction setValueInput pour mettre à jour cet état.


    const [resultat, setResultat] = useState([]);
    //const [resultat, setResultat] = useState([]); : Cette ligne initialise l'état local resultat à un tableau vide et utilise la fonction setResultat pour mettre à jour cet état.



    const handleInputChange = (e) => {
        console.log("fonction ouverte")
        //const handleInputChange = (e) => { : Cette ligne définit une fonction nommée handleInputChange qui est appelée chaque fois que la valeur du champ de recherche est modifiée
        const valueRecherche = e.target.value
        //const valueRecherche = e.target.value : Cette ligne récupère la valeur saisie dans le champ de recherche à partir de l'objet événement e et la stocke dans une variable valueRecherche.
        console.log("valueRecherche", valueRecherche)
        setValueInput(valueRecherche)
        //setValueInput(valueRecherche) : Cette ligne met à jour l'état local valueInput avec la valeur saisie dans le champ de recherche.

        const resultFilter = utilisateurs.filter(user => user.nom.toLocaleLowerCase().includes(valueRecherche.toLocaleLowerCase()))
        console.log("resultFilter", resultFilter)

        // const resultFilter = utilisateurs.filter(user => user.nom.toLocaleLowerCase().includes(valueRecherche.toLocaleLowerCase())) : Cette ligne utilise la méthode filter() pour filtrer la liste d'utilisateurs en fonction de la valeur saisie dans le champ de recherche. La méthode toLocaleLowerCase() est utilisée pour effectuer une comparaison insensible à la casse.


        setResultat(resultFilter)
        // setResultat(resultFilter) : Cette ligne met à jour l'état local resultat avec la liste filtrée des utilisateurs correspondants.

    }

    return (
        <div>
            <input type="text" value={valueInput} onChange={handleInputChange} />
            
            {resultat.length > 0 ?
                (
                    <div>
                        <h6>Resultat de la recherche</h6>
                        <div>
                            {
                                resultat.map(user => (
                                    <div key={user.id}>
                                        Nom : {user.nom}
                                        <br />
                                        Metier : {user.metier}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                )
                :
                (
                    <div>Aucun resultat a votre requete</div>
                )
            }
        </div>
    )
}
// <input type="text" value={valueInput} onChange={handleInputChange} /> : Cette ligne affiche un champ de saisie de texte qui est lié à l'état local valueInput et qui appelle la fonction handleInputChange à chaque fois que la valeur du champ est modifiée.

//resultat.length > 0 ? : Cette ligne commence une expression conditionnelle qui affiche la liste filtrée des utilisateurs si elle n'est pas vide.

//<h6>Resultat de la recherche</h6> : Cette ligne affiche un titre pour la liste filtrée des utilisateurs.

// // {resultat.map(user => ( : Cette ligne commence une boucle map() qui itère sur la liste filtrée des utilisateurs et affiche les détails de chaque utilisateur correspondant.

// <div key={user.id}> : Cette ligne définit un élément 
// <div> pour chaque utilisateur et utilise l'attribut key pour fournir une clé unique.

//Nom : {user.nom} : Cette ligne affiche le nom de l'utilisateur.

//<br /> : Cette ligne ajoute une ligne vide.

//Metier : {user.metier} : Cette ligne affiche le métier de l'utilisateur.

//))} : Cette ligne ferme la boucle map().



export default Rechercheutilisateurs;