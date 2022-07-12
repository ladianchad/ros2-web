import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { HomIndex } from "./pages/home";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomIndex/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;