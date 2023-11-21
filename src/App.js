import React from 'react';
import { Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import './Styles/App.css';
import Register from './pages/Auth/Register';
import HeaderAuth from './components/Headers/HeaderAuth';
import Login from './pages/Auth/Login';

function App() {

  return (

    <BrowserRouter>

    <div className="App">

      <HeaderAuth />
      
      <Routes>

          <Route path="/" element={ <Register /> } />

          <Route path="/Login" element={ <Login /> } />


       </Routes>

    </div>

    </BrowserRouter>

  );

}

export default App;