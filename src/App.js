// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './componentes/Menu';  // Importamos la página de contacto
import Principal from './paginas/Principal';  // Importamos la página de inicio
import Productos from './paginas/Productos';  // Importamos la página de productos
import Contacto from './paginas/Contacto';  // Importamos la página de contacto
import './App.css';

function App() {
  return (
    <Router>
      {/* <Header />  Colocamos el Header con el menú */}
      <div className="container-fluid">
        <Menu/> 
        <Routes> {/* Ruta de la pagina para redirigir a todos los elementos que creemos apartir del componente principal */}
          <Route path="/" element={<Principal />} />  {/* Ruta para la página de inicio */}
          <Route path="/productos" element={<Productos />} />  {/* Ruta para la página de inicio */}
          <Route path="/contacto" element={<Contacto />} />  {/* Ruta para la página de contacto */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
