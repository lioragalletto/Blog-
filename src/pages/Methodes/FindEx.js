import React, { useState } from 'react'

const UtilisateurRecherche = () => {
    const [utilisateurs] = useState([
        { id: 1, nom: 'Alice', metier: "devloppeuse" },
        { id: 2, nom: 'Bob', metier: "camionneur" },
        { id: 3, nom: 'Charlie', metier: "agent de securite" },
        { id: 4, nom: 'David', metier: "animateur" },
        { id: 5, nom: 'Eve', metier: "formateur" },
        { id: 6, nom: 'Eva', metier: "cuisto" }
    ]);
    //Cette ligne crée un tableau utilisateurs qui est initialisé avec six objets contenant des informations sur les utilisateurs.

    const [idRecherche, setIdRecherche] = useState("");// stock l'ID de l'utilisateur recherche 
    const [utilisateurTrouve, setUtilisateurTrouve] = useState(null);// qui stock l'utilisateur trouve 
    const handleInputChange = (e) => {
        // console.log("fonction active", e.target.value)
        setIdRecherche(e.target.value)
    }
    // Cette fonction est appelée chaque fois que l'utilisateur tape dans l'input. Elle utilise setIdRecherche pour mettre à jour la valeur de idRecherche.


    const rechercherUtilisateur = () => {
        console.log("SearchUser open")
        const utilisateur = utilisateurs.find(user => user.id === parseInt(idRecherche))
        console.log("utilisateur", utilisateur)
        if (utilisateur) {
            setUtilisateurTrouve(utilisateur)
        } else {
            setUtilisateurTrouve(null)
        }
    };
// Cette fonction est appelée lorsque l'utilisateur clique sur le bouton de recherche. Elle recherche l'utilisateur correspondant à l'ID entré par l'utilisateur en utilisant la méthode find() sur le tableau utilisateurs. Si elle trouve un utilisateur, elle met à jour la valeur de userTrouve. Si elle ne trouve pas l'utilisateur, elle met la valeur de userTrouve à null.


return (
    <div>
        {utilisateurs?.map((pers)=> (
            <div>
                {pers.nom}
                {pers.id}
            </div>
        ))}
      <input type="text" value={idRecherche} onChange={handleInputChange} />
      <button onClick={rechercherUtilisateur}>Rechercher par id</button>

      {utilisateurTrouve ? (
        <div>
          Utilisateur trouvé : {utilisateurTrouve.nom}
        </div>
      ) : (
        <div>
          Utilisateur non trouvé.
        </div>
      )}

    </div>
  );
};
  
//Le code entre les balises <div> et </div> contient une boucle qui parcourt un tableau d'utilisateurs (utilisateurs?) en utilisant la méthode "map". Pour chaque utilisateur dans le tableau, le nom et l'identifiant de l'utilisateur sont affichés dans un élément div.

//Le composant contient également un élément <input> qui permet à l'utilisateur de saisir un identifiant de recherche.

//Lorsque l'utilisateur saisit un identifiant de recherche, la méthode "onChange" appelle la fonction "handleInputChange" pour mettre à jour l'état du composant avec la nouvelle valeur saisie.

//Lorsque l'utilisateur clique sur le bouton "Rechercher par id", la méthode "onClick" appelle la fonction "rechercherUtilisateur" qui recherche l'utilisateur correspondant à l'identifiant saisi.

// Si l'utilisateur est trouvé, le composant affiche le nom de l'utilisateur trouvé dans un élément div. Si l'utilisateur n'est pas trouvé, le composant affiche "Utilisateur non trouvé" dans un élément div.




export default UtilisateurRecherche;