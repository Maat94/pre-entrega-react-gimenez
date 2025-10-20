import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nosotros.css';

function Nosotros() {
  return (
    <div className="nosotros-container">
      <div className="nosotros-content">
        <h1 className="nosotros-title">Sobre Nosotros</h1>
        <p className="nosotros-text">
          En <span className="marca">SommierOutlet</span> creemos que un buen descanso transforma tu vida.
          Desde hace más de 10 años ofrecemos colchones y sommiers de calidad, seleccionados cuidadosamente
          para garantizar el confort, la durabilidad y el bienestar de cada cliente.  
        </p>
        <p className="nosotros-text">
          Trabajamos con las mejores marcas del país, ofreciendo precios accesibles y planes de financiación
          que se adaptan a vos. Nuestro compromiso es simple: brindarte el descanso que te merecés con
          atención personalizada y servicio postventa confiable.
        </p>

        <div className="nosotros-info">
          <div className="nosotros-card">
            <h2>Misión</h2>
            <p>
              Ofrecer productos que mejoren la calidad del descanso de las personas, combinando calidad,
              innovación y atención personalizada.
            </p>
          </div>
          <div className="nosotros-card">
            <h2>Visión</h2>
            <p>
              Ser líderes en descanso y confort, reconocidos por la confianza y satisfacción de nuestros clientes.
            </p>
          </div>
          <div className="nosotros-card">
            <h2>Valores</h2>
            <ul>
              <li>Calidad y compromiso</li>
              <li>Transparencia</li>
              <li>Innovación constante</li>
              <li>Atención humana</li>
            </ul>
          </div>
        </div>

        <div className="nosotros-button">
          <Link to="/">
            <button className="volver-btn">Volver al Inicio</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nosotros;