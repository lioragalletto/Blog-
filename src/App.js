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


class App extends Component {
  
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
}

export default App;

