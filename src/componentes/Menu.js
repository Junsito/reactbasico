import React from 'react';
import { NavLink } from 'react-router-dom';  // Cambiamos a NavLink para la funcionalidad de activo
import '../css/Componentes/Menu.css'; // Importamos el archivo CSS para los estilos

function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/" exact>Inicio</NavLink> {/* Nombre de la app */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mx-auto" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/productos"
                activeClassName="active"  // La clase que se aplicará al enlace activo
              >
                Productos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/contacto"
                activeClassName="active"
              >
                Contacto
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
