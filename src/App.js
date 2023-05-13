<<<<<<< HEAD
import "./App.css"
import React from "react";
import Cv from './pages/CV/Cv';
import {Routes , Route} from "react-router-dom"
import PageError from './pages/PageError/PageError';
import Blog from './pages/Blog/Blog';
import Article from './pages/Article/Article';
import Home from './pages/Home/Home';
import Test from './pages/Test/Test';
import Portfolio from './pages/Portfolio/Portfolio';
import PresUseState from './pages/UseStatesSection/PresUseState';
import UseStateObject from './pages/UseStatesSection/UseStateObject';
import UseStateToogle from './pages/UseStatesSection/UseStateToogle';
import UseStateList from "./pages/UseStatesSection/UseStateList"
import UseStateNumber from "./pages/UseStatesSection/UseStateNumber"

import PresUseEffect from './pages/UseEffectSection/PresUseEffect';
import UefVide from './pages/UseEffectSection/UefVide';
import UseEffectDependance from "./pages/UseEffectSection/UseEffectDependance"
import UseEffectReturn from "./pages/UseEffectSection/UseEffectReturn"
import StyleReact from "./pages/StyleReact/StyleReact"

import DataTableBasique from './pages/DataTable/DataTableBasique';
import DataTableFull from './pages/DataTable/DataTableFull';
import DataTableSort from './pages/DataTable/DataTableSort';
=======
import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Cv from './pages/CV/Cv';
import UseEffectCompo from "./pages/UseEffectCompo/UseEffectCompo";
import Blog from './pages/Blog/Blog';
import PageError from './pages/PageError/PageError';
import Portfolio from "./pages/Portfolio/Portfolio";
import Compteur from "./pages/Compteur/Compteur";
import List from "./pages/List/List";
import Metier from "./pages/Metier/Metier";
import Toogle from "./pages/Toogle/Toogle";
import Article from "./pages/Article/Article";
import CountInterval from "./pages/CountInterval/CountInterval";
import MouseMove from "./pages/MouseMove/MouseMove";
import "./App.css";
>>>>>>> b5cb8b2ff9e6f714feaa1fccb34d625ac224a5aa

import PresUseRef from './pages/PresUseRef/PresUseRef';
import Login from './pages/Login/Login.js';
import AddArticle from './pages/Article/AddArticle';
import UpdateArticle from './pages/Article/UpdateArticle';
import DeleteArticle from './pages/Article/DeleteArticle';
import AddPortfolio from "./pages/Portfolio/AddPortfolio";
import DeletePortfolio from "./pages/Portfolio/DeletePortfolio";
import UpdatePortfolio from "./pages/Portfolio/UpdatePortfolio";
import HKbase from "./pages/HookForm/HKbase";
import HfSelect from "./pages/HookForm/HfSelect";
import HfBlur from "./pages/HookForm/HfBlur";
import FormikExemple from "./pages/HookForm/FormikExemple"
import AxiosPost from './pages/ApiSection/AxiosPost';
import AxiosGet from './pages/ApiSection/AxiosGet';

class App extends Component {
  
<<<<<<< HEAD
  
  return (
   
      
 <Routes>
  
 
   
         
        <Route index element= {<Home/>}   />
        <Route path ="/Cv" element={<Cv/>}  />
        <Route path ="/Blog" element={<Blog/>}  />
        <Route path ="/Porfolio" element={<Portfolio/>}  />
        <Route path ="" element={<Blog/>}  />
       
         {/* Section UseState */}
         <Route path="/PresUseState" element={<PresUseState />} />
        <Route path="/usfObject" element={<UseStateObject />} />
        <Route path="/UseStateToogle" element={<UseStateToogle />} />
        <Route path="/UseStateList" element={<UseStateList />} />
        <Route path="/UseStateNumber" element={<UseStateNumber />} />

        {/* Section UseEffect */}
        <Route path="/PresUseEffect" element={<PresUseEffect />} />
        <Route path="/UefVide" element={<UefVide />} />
        <Route path="/UseEffectDependance" element={<UseEffectDependance />} />
        <Route path="/UseEffectReturn" element={<UseEffectReturn />} />\

        {/* Section CSS */}
        <Route path="/StyleReact" element={<StyleReact />} />
        <Route path="/Test" element={<Test />} />

        <Route path="/DataTableBasique" element={<DataTableBasique />} />
        <Route path="/DataTableSort" element={<DataTableSort />} />
        <Route path="/DataTableFull" element={<DataTableFull />} />

        <Route path="/PresUseRef" element={<PresUseRef />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/AddArticle" element={<AddArticle />} />
        <Route path="/Article" element={<Article />} />
        <Route path="/UpdateArticle" element={<UpdateArticle />} />
        <Route path="/DeleteArticle" element={<DeleteArticle />} />
        <Route path="/AxiosPost" element={<AxiosPost />} />
        <Route path="/AxiosGet" element={<AxiosGet />} />

        <Route path="/AddPortfolio" element={<AddPortfolio />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/UpdatePortfolio" element={<UpdatePortfolio />} />
        <Route path="/DeletePortfolio" element={<DeletePortfolio />} />
        <Route path="/HKbase" element={<HKbase />} />

        <Route path="/HfSelect" element={<HfSelect/>} />

        <Route path="/FormikExemple" element={<FormikExemple />} />
        <Route path="/HfBlur" element={<HfBlur/>} />
        <Route path="*" element={<PageError/>} />
   
  </Routes>



   
      
   
  );
=======
  render() {
    return (
      <Routes>
        <Route index element={<Portfolio />} />
        <Route path="/Cv" element={<Cv />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/CountInterval" element={<CountInterval />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/useEffectCompo" element={<UseEffectCompo />} />
        <Route path="/Compteur" element={<Compteur />} />
        <Route path="/List" element={<List />} />
        <Route path="/MouseMove" element={<MouseMove />} />
        <Route path="/Toogle" element={<Toogle />} />
        <Route path="/Metier" element={<Metier />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="*" element={<PageError />} />
      </Routes>
    );
  }
>>>>>>> b5cb8b2ff9e6f714feaa1fccb34d625ac224a5aa
}

export default App;

