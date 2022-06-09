import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Contact from './pages/Contact';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import RecipesDetail from './pages/RecipesDetail';

const AppRoutes: React.FC = () => {
  return(
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/receitas" element={<Recipes/>}>
                <Route path=":id" element={<RecipesDetail />} />
            </Route> 
            <Route path="/contatos" element={<Contact />} />
        </Routes>
      </BrowserRouter>
  );
}

export default AppRoutes;