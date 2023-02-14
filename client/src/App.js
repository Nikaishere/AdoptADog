import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import DogBreedsPage from "./components/DogBreedsPage";
import "./index.css";
import "./App.css";

function App() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <div className="App">
      <Header/>
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type='text'
          value={username}
          name='Username'
          placeholder='Username'
          onChange={(event) => setUsername(event.target.value)}>
        </input>
      </div>
      <div>
        <input
          type='password'
          value={password}
          name='Password'
          placeholder='Password'
          onChange={(event) => setPassword(event.target.value)}>
        </input>
      </div>
      <button>
        Login
      </button>
      </form>  


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
