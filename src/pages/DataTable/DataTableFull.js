import DataTable from 'react-data-table-component';
import { Button } from 'react-bootstrap';
import React, {useState} from "react"

function DataTableSearch() {

    const [filterText, setFilterText] = useState("");
    // filterText est une chaîne vide qui stocke le texte à utiliser pour filtrer les données.
    const [selectedRows, setSelectedRows] = React.useState([]);
    //selectedRows stocke les lignes sélectionnées de la table
    const [toggleCleared, setToggleCleared] = React.useState(false);
    //toggleCleared est un booléen qui indique si les lignes sélectionnées ont été supprimées
    const [dataStock, setDataStock] = useState([ {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    }]);
    //dataStock stocke un tableau d'objets qui contient des données simulées pour la table.
    

    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true,
        },
        {
            name: 'Year',
            selector: row => row.year,
            sortable: true,
        },
    ];
// //Cette partie définit une constante nommée columns qui stocke un tableau d'objets de colonnes qui contient les noms et sélecteurs des colonnes de la table. Les colonnes peuvent également être triées

    const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;
    //Cette ligne de code crée une composante React fonctionnelle appelée ExpandedComponent qui prend un paramètre data. La composante retourne un élément pre avec le contenu de la variable data affichée comme une chaîne de caractères JSON formatée avec 2 espaces pour chaque niveau d'imbrication.

   //en d'autres termes, lorsqu'un utilisateur clique sur une ligne de la table, la fonction ExpandedComponent est appelée et affiche les données détaillées de la ligne sélectionnée sous forme de chaîne de caractères JSON formatée. La méthode JSON.stringify prend en entrée l'objet data et le transforme en chaîne de caractères JSON. Le premier argument est l'objet à convertir, le deuxième argument est un sélecteur de repli pour les propriétés qui contiennent des valeurs undefined ou des fonctions. Ici, null est utilisé pour éliminer les propriétés qui contiennent des valeurs undefined. Le troisième argument est le nombre d'espaces utilisés pour l'indentation de chaque niveau d'imbrication. Dans ce cas, 2 espaces sont utilisés pour une présentation plus lisible.

    const filteredItems = dataStock?.filter((item) => {
        return (
          ( item.title?.toLowerCase().includes(filterText.toLowerCase())) ||
          ( item.year?.toLowerCase().includes(filterText.toLowerCase()))
        );
      });
      //Le code commence par appeler la méthode filter sur le tableau dataStock, qui est le tableau d'objets contenant les données à afficher dans la table. filter est une méthode JavaScript qui permet de créer un nouveau tableau avec tous les éléments du tableau initial qui passent le test spécifié dans une fonction.

     //La fonction passée à filter prend un seul argument, ici appelé item, qui correspond à chaque objet du tableau. Dans cette fonction, on teste si le titre ou l'année de l'objet contient le texte entré dans la barre de recherche en utilisant la méthode toLowerCase() pour comparer des chaînes de caractères sans tenir compte de la casse. Si l'objet passe le test, il est ajouté au nouveau tableau créé par filter.

      // Enfin, le nouveau tableau de données filtrées est stocké dans la variable filteredItems. Cette variable est utilisée plus tard pour afficher les données dans la table.

      const handleSearch = (event) => {
        console.log(event.target.value);
        setFilterText(event.target.value);
      };
       //Cette fonction est appelée à chaque changement dans la saisie de l'utilisateur. Elle met à jour la variable d'état filterText pour refléter la saisie de l'utilisateur.



      function convertArrayOfObjectsToCSV(array) {
        let result;
    
        const columnDelimiter = ";";
        const lineDelimiter = "\n";
        //Définition des délimiteurs pour les colonnes et les lignes
    
        const keys = Object.keys(dataStock[0]);
        //  Récupération des noms de colonnes du tableau de données
        result = "";
        //Initialisation de la variable result à une chaîne vide
        result += keys.join(columnDelimiter);
        // Ajout des noms de colonnes séparés par le délimiteur de colonne
        result += lineDelimiter;
       // Ajout du délimiteur de ligne



        array.forEach((item) => {
          //parcours du tableau de données pour récupérer les valeurs de chaque objet
          let ctr = 0;
          keys.forEach((key) => {
            if (ctr > 0) result += columnDelimiter;
           //Ajout du délimiteur de colonne si ce n'est pas la première colonne
            result += item[key]

            // Ajout de la valeur de la colonne actuelle à la chaîne de résulta
            ctr++;
            //Incrémentation du compteur de colonne
          });
          result += lineDelimiter;
          //Ajout du délimiteur de ligne à la fin de chaque ligne
        });
    
        return result;
      }
      //En résumé, cette fonction prend un tableau d'objets en entrée et convertit les données en une chaîne de caractères au format CSV. Pour ce faire, elle utilise les délimiteurs de colonnes et de lignes spécifiés et récupère les noms de colonnes du premier objet du tableau. Ensuite, elle ajoute chaque valeur de colonne de chaque objet en parcourant le tableau de données et en utilisant les délimiteurs appropriés pour séparer les colonnes et les lignes. Finalement, elle retourne la chaîne de caractères CSV résultante.

      function downloadCSV() {
        const link = document.createElement("a");
        let csv = convertArrayOfObjectsToCSV(dataStock);
        if (csv == null) return;
        let date = new Date().toLocaleDateString();
        const filename = `transactions${date}.csv`;
        if (!csv.match(/^data:text\/csv/i)) {
          csv = `data:text/csv;charset=utf-8,${csv}`;
        }
        link.setAttribute("href", encodeURI(csv));
        link.setAttribute("download", filename);
        link.click();
      }
      //

      const contextActions = React.useMemo(() => {
		const handleDelete = () => {
			
			if (window.confirm(`Are you sure you want to delete:\r ${selectedRows.map(r => r.title)}?`)) {
				setToggleCleared(!toggleCleared);
			}
		};

		return (
			<Button key="delete" onClick={handleDelete} style={{ backgroundColor: 'red' }} icon>
				Delete
			</Button>
		);
	}, [dataStock, selectedRows, toggleCleared]);

    const handleRowSelected = React.useCallback(state => {
		setSelectedRows(state.selectedRows);
	}, []);

    

    return (
        <>
        <h1>React data table</h1>
        <input type="text" placeholder="Search..." onChange={handleSearch} />
        <DataTable
            columns={columns}
            data={filteredItems}
            selectableRows
            expandableRowsComponent={ExpandedComponent}
            onSelectedRowsChange={handleRowSelected}
            expandableRows
            striped
            pagination
            highlightOnHover
            contextActions={contextActions}
            actions={
                <Button onClick={() => downloadCSV()}>Export to excel</Button>
              }
              fixedHeader
        />
        </>
    );
};

export default DataTableSearch