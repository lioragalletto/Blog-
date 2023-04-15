
import React, {useState} from 'react'
import NavBar from '../../components/NavBar/NavBar';
import "./List.css"

const List = () => {

    const [list, setList] = useState([{
        id: 1, 
        coursImportant :  "React js "
    }, {
        id: 2, 
        coursImportant :  "html css"
    }, {
        id: 3, 
        coursImportant :  "vanilla javascript"
    }]);



  return (
    <div>
      <NavBar/>
      
      <table>
  <thead>
    <tr>
      <th></th>
      <th> Liste des cours important</th>
    </tr>
  </thead>
  <tbody>
      {
        list.map((cour, index)=> (
            <tr key={index}>
              <td>{cour.id}</td>
               <td>{cour.coursImportant}</td>
               </tr>
            
        ))}
        </tbody>
        </table>

    </div>
  )
}

export default List