import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Navbar from '../components/NavBar';
import Books from '../components/Books';
import Characters from '../components/Characters'; 
import Houses from '../components/Houses';
import Spells from '../components/Spells';
function AppRoutes() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books></Books>} />
        <Route path="/Characters" element={<Characters></Characters>} />
        <Route path="/Houses" element={<Houses></Houses>} />
        <Route path="/Spells" element={<Spells></Spells>} />
      </Routes>
    </BrowserRouter>
    </>
  );
};


export default AppRoutes