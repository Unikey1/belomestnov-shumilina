import styles from './App.css';
import React from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom"; 
import Signs from "./pages/Signs";
import AboutUs from "./pages/AboutUs"; 
import Contacts from "./pages/Contacts";
import Reviews from "./pages/Reviews";
import Advantages from "./pages/Advantages";
import Nav from "./layout/Nav"; 



function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Advantages/>}>
        </Route>
        <Route path="/catsigns" element={<Signs/>}>
        </Route>
        <Route path="/aboutus" element={<AboutUs/>}>
        </Route>
        <Route path="/reviews" element={<Reviews/>}>
        </Route>
        <Route path="/contacts" element={<Contacts/>}>
        </Route>
      </Routes>
      <footer> © Все на этом сайте защищено</footer>
    </>
  );
}

export default App;
