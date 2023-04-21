import "./App.css"
import Cv from './pages/CV/Cv';
import {Routes , Route} from "react-router-dom"
import  UseEffectCompo from "./pages/UseEffectCompo/UseEffectCompo"
import Blog from './pages/Blog/Blog';
import PageError from './pages/PageError/PageError';
import Portfolio from "./pages/Portfolio/Portfolio";
import Compteur from "./pages/Compteur/Compteur";

import List from "./pages/List/List";
import Metier from "./pages/Metier/Metier";
import Toogle from "./pages/Toogle/Toogle";





 
function App() {


  
  
  return (
    <div className=''>
      
      <Routes>
        <Route index element= {<Portfolio/>}   />
        <Route path ="/Cv" element={<Cv/>}  />
        <Route path ="/Portfolio" element={<Portfolio/>}  />
        <Route path ="blog" element={<Blog/>}/>
        <Route path="/useEffectCompo" element={<UseEffectCompo/>}/>
        <Route path="/Compteur" element={<Compteur/>}/>
        <Route path="/List" element={<List/>}/>
        <Route path="/Toogle" element={<Toogle/>}/>
        <Route path="/Metier" element={<Metier/>}/>
        <Route path="*" element={<PageError/>} />

     </Routes>



   </div>
      
   
  );
}

export default App;
