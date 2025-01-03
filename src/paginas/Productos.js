// src/pages/Productos.js
import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate'; // Importamos la librería de paginación
import '../css/Productos/Productos.css'; // Importamos el archivo CSS para los estilos
import TarjetaProducto from '../componentes/tarjetaProducto';  // Importamos el componente tarjetaProducto

function Productos() {
  const [productos, setProductos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('');

  // Cargar productos desde el archivo XML
  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/productos.xml')
      .then((response) => response.text())
      .then((data) => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, 'application/xml');
        const productosArray = Array.from(xmlDoc.getElementsByTagName('producto')).map((producto) => ({
          id: producto.getElementsByTagName('id')[0].textContent,
          nombre: producto.getElementsByTagName('nombre')[0].textContent,
          precio: producto.getElementsByTagName('precio')[0].textContent,
          imagen: producto.getElementsByTagName('imagen')[0].textContent,
          categoria: producto.getElementsByTagName('categoria')[0].textContent,
        }));
        setProductos(productosArray);
      })
      .catch((error) => console.error('Error al cargar el XML:', error));
  }, []);

  const productosPorPagina = 9;
  const offset = currentPage * productosPorPagina;
  const productosFiltrados = selectedCategory
    ? productos.filter(producto => producto.categoria.toLowerCase() === selectedCategory.toLowerCase())
    : productos;
  const currentProductos = productosFiltrados.slice(offset, offset + productosPorPagina);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setCurrentPage(0);
  };

  return (
    <div className="main-container">
      <h2>Productos</h2>

      {/* Filtro estilizado por categoría */}
      <div className="filter-container">
        <label htmlFor="category-filter" className="filter-label">Filtrar por categoría:</label>
        <select 
          id="category-filter" 
          value={selectedCategory} 
          onChange={handleCategoryChange} 
          className="category-select"
        >
          <option value="">Todas</option>
          <option value="Chuches">Chuches</option>
          <option value="Patatas Fritas">Patatas Fritas</option>
          <option value="Chocolates">Chocolates</option>
          <option value="Licores">Licores</option>
          {/* Agrega más categorías si es necesario */}
        </select>
      </div>

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
        pageCount={Math.ceil(productosFiltrados.length / productosPorPagina)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination-container-class"}
        activeClassName={"active-page"}
        disabledClassName={"disabled-page"}
      />
    </div>
  );
}

export default Productos;
