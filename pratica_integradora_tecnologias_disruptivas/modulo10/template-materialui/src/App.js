import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/Home";
import ListarTarefa from "./pages/tarefa/ListarTarefa";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tarefas" element={<ListarTarefa />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;