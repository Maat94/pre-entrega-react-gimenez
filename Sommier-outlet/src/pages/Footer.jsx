import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <h2 className="footer-logo">
            <span className="white">Sommier</span>
            <span className="yellow">Outlet</span>
          </h2>
          <p className="footer-desc">
            Colchones y sommiers de calidad con hasta 50% OFF y 12 cuotas sin interés.  
            Elegí el descanso que te merecés.
          </p>
        </div>

        <div className="footer-contact">
          <h3>Contacto</h3>
          <p>📍 Buenos Aires, Argentina</p>
          <p>📞 +54 9 11 5555-5555</p>
          <p>✉️ info@sommieroutlet.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 SommierOutlet. Todos los derechos reservados.
      </div>
    </footer>
  );
}