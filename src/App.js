import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import './app.css'


const App = () =>{
  return (
    <div>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      
    </Routes>
    <Footer />
  </div>
  );
}

export default App;
