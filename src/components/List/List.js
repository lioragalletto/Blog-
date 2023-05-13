<<<<<<< HEAD:src/components/List/List.js

import React, {useState} from 'react'


import "./List.css"

const List = () => {

    const [list] = useState([{
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
    <>
   
    <div>
     
      
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

   
    </>
  )
=======
import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout';
import "./List.css";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          id: 1,
          coursImportant: "React js"
        },
        {
          id: 2,
          coursImportant: "html css"
        },
        {
          id: 3,
          coursImportant: "vanilla javascript"
        }
      ]
    };
  }

  render() {
    const { list } = this.state;
    return (
      <>
        <Layout>
          <div>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th> Liste des cours importants</th>
                </tr>
              </thead>
              <tbody>
                {list.map((cour, index) => (
                  <tr key={index}>
                    <td>{cour.id}</td>
                    <td>{cour.coursImportant}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Layout>
      </>
    );
  }
>>>>>>> b5cb8b2ff9e6f714feaa1fccb34d625ac224a5aa:src/pages/List/List.js
}

export default List;
