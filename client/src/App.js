import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import DogBreedsPage from "./components/DogBreedsPage";
import LoginForm from "./components/LoginForm";
import "./index.css";
import "./App.css";

function App() {

  
  return (
    <div className="App">
      <Header/>
      <LoginForm/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/breeds" element={<DogBreedsPage />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
