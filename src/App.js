import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home';
import ForYou from '../src/pages/ForYou';
import LoginModal from './components/LoginModal';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ForYou" element={<ForYou />} />
      </Routes>
      <LoginModal />
    </Router>
  );
}

export default App;
