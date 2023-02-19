import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import DogBreedsPage from "./components/DogBreedsPage";
import LoginForm from "./components/LoginForm";
import SelectedBreedDetails from "./components/SelectedBreedDetails";
import Dog from "./components/Dog";
import WhyAdopt from "./components/WhyAdopt";
import "./index.css";
import "./App.css";
import FindYourMatch from "./components/FindYourMatch";


function App() {

  
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/breeds" element={<DogBreedsPage />} />
          <Route path="/breeds/:id" element={<SelectedBreedDetails />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
    
      <Dog/>
      <Footer />
    </div>
  );
}

export default App;
