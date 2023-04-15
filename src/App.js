import './App.css';
import Cv from './pages/CV/Cv';
import {Routes , Route} from "react-router-dom"

import List from "./pages/List/List";
import Metier from "./pages/Metier/Metier";
import Toogle from "./pages/Toogle/Toogle";
import Compteur from "./pages/Compteur/Compteur";



 
function App() {


  
  
  return (
    <div className=''>
      <Routes>
        <Route index element={<Cv/>}  />
        <Route path ="/CV" element={<Cv/>}  />
        <Route path ="/List" element={<List/>}/>
        <Route path="/Metier" element={<Metier/>} />
        <Route path="/Toogle" element={<Toogle/>} />
        <Route path="/Compteur" element={<Compteur/>} />

     </Routes>



   </div>
      
   
  );
}

export default App;
