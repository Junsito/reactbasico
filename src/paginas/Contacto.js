import React from 'react';

function Contacto() {
  return (
    <div className="contact-container">
      <h2>Contacto</h2>
      <p>¡Nos encantaría saber de ti! Aquí tienes nuestra información de contacto:</p>
      
      <div className="contact-info">
        <h3>Dónde estamos</h3>
        
        <p><strong>Móvil:</strong> +123 456 7890</p>
        <p><strong>Correo:</strong> contacto@ejemplo.com</p>
        <p><strong>Dirección:</strong> Calle Ejemplo 123, Ciudad, País</p>
      </div>

      <div className="map-container">
        <h3>Visítanos en el mapa</h3>
        {/* Google Maps iframe */}
        <iframe
          title="Mapa"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.673456215847!2d-122.4242515846816!3d37.77492977975922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c2b71fdab%3A0x95b55c5731495d29!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1ses-419!2s!4v1672771713790!5m2!1ses-419!2s"
          width="100%" 
          height="400" 
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contacto;
