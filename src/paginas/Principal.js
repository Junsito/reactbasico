import React from 'react';
import { Carousel } from 'react-bootstrap'; // Importamos el componente Carousel de React-Bootstrap
import '../css/Principal/Principal.css'; // Importamos el archivo CSS para los estilos

function Principal() {
  return (
    <div className="main-container">
      <div className="content-section">
        <h2>Bienvenidos a Nuestra Página</h2>
        <p>Somos una empresa dedicada a ofrecer productos de alta calidad para mejorar tu día a día. Con más de 10 años de experiencia en el mercado, trabajamos con los mejores proveedores para traerte lo mejor en cada categoría.</p>
        
        <h3>¿Qué hacemos?</h3>
        <p>Nos especializamos en la venta de productos de consumo, tecnología y artículos para el hogar. Con un enfoque en la satisfacción de nuestros clientes, ofrecemos productos de calidad con precios accesibles.</p>

        {/* Carrusel de imágenes */}
        <div className="carousel-container">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="imagendefectogrande.svg"
                alt="Imagen 1"
              />
              <Carousel.Caption>
                <h3>Lo mejor para ti</h3>
                <p>Ofrecemos productos de la más alta calidad para ti y tu familia.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="imagendefectogrande.svg"
                alt="Imagen 2"
              />
              <Carousel.Caption>
                <h3>Productos Innovadores</h3>
                <p>Te traemos las últimas novedades en tecnología y más.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="imagendefectogrande.svg"
                alt="Imagen 3"
              />
              <Carousel.Caption>
                <h3>Soluciones para el hogar</h3>
                <p>Descubre nuestra amplia gama de productos para tu casa.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Principal;
