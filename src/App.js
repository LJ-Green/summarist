import React from "react";
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ForYou from "./pages/ForYou";
import Book from "./pages/Book";
import Player from "./pages/Player";
import ChoosePlan from "./pages/ChoosePlan";
import Settings from "./pages/Settings";
import MyLibrary from "./pages/MyLibrary";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="foryou" element={<ForYou />} />
        <Route path="book/:id" element={<Book />} />
        <Route path="mylibrary" element={<MyLibrary />} />
        <Route path="player/:id" element={<Player />} />
        <Route path="chooseplan" element={<ChoosePlan />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;