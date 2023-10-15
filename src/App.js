import React from "react";
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ForYou from "./pages/ForYou";
import Book from "./pages/Book";
import Player from "./components/Player";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="forYou" element={<ForYou />} />
        <Route path="book/:id" element={<Book />} />
        <Route path="player" element={<Player />} />
      </Routes>
    </Router>
  );
}

export default App;