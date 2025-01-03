// src/pages/Productos.js
import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate'; // Importamos la librería de paginación
import '../css/Productos/Productos.css'; // Importamos el archivo CSS para los estilos
import TarjetaProducto from '../componentes/tarjetaProducto';  // Importamos el componente tarjetaProducto

function Productos() {
  // Definir los datos de los productos
  // Estado para almacenar los productos y la página actual
  const [productos, setProductos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  // Cargar productos desde el archivo XML
  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/productos.xml')
      .then((response) => response.text()) // Obtener el contenido del archivo como texto
      .then((data) => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, 'application/xml');
        const productosArray = Array.from(xmlDoc.getElementsByTagName('producto')).map((producto) => ({
          id: producto.getElementsByTagName('id')[0].textContent,
          nombre: producto.getElementsByTagName('nombre')[0].textContent,
          precio: producto.getElementsByTagName('precio')[0].textContent,
          imagen: producto.getElementsByTagName('imagen')[0].textContent,
        }));
        setProductos(productosArray); // Guardar los productos en el estado
      })
      .catch((error) => console.error('Error al cargar el XML:', error));
  }, []); // Solo cargar los productos al montar el componente

  // Definir la cantidad de productos por página
  const productosPorPagina = 9;
  // Calcular los productos que se deben mostrar en la página actual
  const offset = currentPage * productosPorPagina;
  const currentProductos = productos.slice(offset, offset + productosPorPagina);
  // Función que maneja el cambio de página
  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };


  return (
    <div className="main-container">
      <h2>Productos</h2>
      <div className="content-section">
        {currentProductos.map(producto => (
          <TarjetaProducto
            key={producto.id}
            nombreProducto={producto.nombre}
            precio={producto.precio}
            imagen={producto.imagen}
          />
        ))}
      </div>

      {/* Paginación */}
      <ReactPaginate
        previousLabel={"Anterior"}
        nextLabel={"Siguiente"}
        breakLabel={"..."}
        pageCount={Math.ceil(productos.length / productosPorPagina)} // Calculamos el número de páginas
        marginPagesDisplayed={2} // Número de páginas al principio y final
        pageRangeDisplayed={3} // Número de páginas visibles a la vez
        onPageChange={handlePageClick}
        containerClassName={"pagination-container-class"}
        activeClassName={"active-page"}
        disabledClassName={"disabled-page"}
      />
    </div>
  );
}

export default Productos;
