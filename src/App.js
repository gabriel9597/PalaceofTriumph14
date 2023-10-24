import React from "react";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inicio from "./componentes/inicio/inicio";

function App() {
  return <Router>
    <Routes>
      <Route path='/' element={<Inicio/>} />
    </Routes>
  </Router>
}

export default App;