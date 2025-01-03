// src/components/ProductoCard.js
import React from 'react';
import '../css/Productos/Productos.css'; // Importamos el archivo CSS para los estilos

const TarjetaProducto = ({ imagen, precio, nombreProducto }) => {
    return (
      <div className="producto-card">
        <div
          className="producto-card-image"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/' + imagen})` }}
        ></div>
  
        <div className="producto-card-content">
          {/* Precio por encima del botón */}
          {/* <div className="producto-card-price">
            <span>€{precio}</span>  
          </div> */}
          <h5>{nombreProducto}</h5>
          {/* <button className="btn btn-primary">Ver más</button> */}
        </div>
      </div>
    );
}
  
export default TarjetaProducto;