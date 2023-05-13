import DataTable from 'react-data-table-component'; // importation du module
import React, { useEffect, useState } from "react"
import axios from 'axios';

const columns = [
    {
        name: 'title',
        selector: row => row.title,
        sortable: true,
    },
    {
        name: 'body',
        selector: row => row.body,
        sortable: true,
    },
    {
        name: 'id',
        selector: row => row.id,
        sortable: true,
    },
    {
        name: 'userId',
        selector: row => row.userId,
        sortable: true,
    },
];
//On crée un tableau de colonnes pour la table. Chaque objet de colonne contient un nom, un sélecteur (pour extraire la valeur de chaque cellule de la colonne à partir des données de la ligne) et une propriété indiquant si la colonne est triable ou non.

function DataTableBasique() { // nom du component

    const [dataPost, setDataPost] = useState();
    const [errorMessage, seterrorMessage] = useState(false);
    //On initialise deux états avec les hooks useState. dataPost sera utilisé pour stocker les données des articles récupérées depuis l'API, errorMessage sera utilisé pour afficher un message d'erreur si la requête vers l'API échoue.

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
                // handle success
                console.log(response.data);
                setDataPost(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                seterrorMessage(true)
            })
    }, []);
//On utilise le hook useEffect pour récupérer les données des articles depuis une API en ligne. Nous utilisons axios pour envoyer une requête GET à l'URL de l'API, puis nous stockons les données récupérées dans dataPost. Si une erreur se produit, errorMessage est défini sur true. Le tableau vide [] en deuxième argument signifie que ce code ne doit être exécuté qu'une seule fois, lors du premier rendu.
    return (
        <div className='container'>
            <DataTable
                columns={columns}
                data={dataPost}
                fixedHeader
                highlightOnHover
                pagination
            />
            {errorMessage === true  &&
                <div className="alert alert-danger" role="alert">
                    l'url est mauvaise
                </div>
            }
            
        </div>
    );
};

// pr error message = si err mess est true alors jaffiche le mess 
export default DataTableBasique // export du component

// explication du return: Cette partie correspond au rendu du composant DataTableBasique.

//On définit d'abord une div avec la classe container qui englobe le composant DataTable ainsi que le code conditionnel qui affiche un message d'erreur si une erreur survient lors de la requête.

//DataTable est un composant fourni par le module react-data-table-component. Il prend en entrée un ensemble de columns (colonnes) et un ensemble de data (données) et affiche un tableau en fonction de ces deux entrées.

//Les colonnes sont définies dans la variable columns juste avant la déclaration du composant. Chaque objet column a trois propriétés : name qui définit le nom de la colonne, selector qui définit le nom de la propriété à afficher dans la colonne et sortable qui indique si la colonne est sortable ou non.

//Les données sont récupérées à partir de l'API https://jsonplaceholder.typicode.com/posts via une requête HTTP GET grâce à la librairie axios. Les données sont stockées dans le state dataPost grâce au hook useState.

//Si une erreur survient lors de la requête, le message d'erreur sera affiché grâce au code conditionnel : {errorMessage && ...}. Ici, si errorMessage est true, alors un message d'alerte rouge avec le texte "l'url est mauvaise" sera affiché.