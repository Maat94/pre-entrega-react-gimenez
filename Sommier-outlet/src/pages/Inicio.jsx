import React from "react";
import "../styles/Inicio.css";
import bannerInicio from "/src/images/banner-inicio.jpg";
import Asesor from "/src/images/asesor.jpg"

function Inicio() {
  return (
    <>
      {/* --- Sección principal con dos columnas --- */}
      <div className="inicio">

        {/* --- Columna izquierda --- */}
        <div className="banner">
          <img
            src={bannerInicio}
            alt="Sommier Sealy Linen"
            className="banner-img"
          />

          <div className="banner-info">
            <h2 className="producto-nombre">
              Sommier 1 Plaza Resorte Meyer Sleep (080x190)
            </h2>

            <div className="precios">
              <div>
                <p className="etiqueta">Precio</p>
                <h3 className="precio">$509.999</h3>
                <p className="precio-detalle">Precio sin imp. $421.487</p>
              </div>

              <div>
                <p className="etiqueta">12 cuotas sin interés</p>
                <h3 className="cuota">$42.499</h3>
              </div>
            </div>

            <button className="boton">Lo quiero</button>

            <div className="promo">
              <p>
                <strong>30% OFF</strong> en 1 pago de $357.000
              </p>
            </div>
          </div>
        </div>

        {/* --- Columna derecha --- */}
        <div className="info-lateral">
          <h2>Elegí el descanso que te merecés</h2>
          <p>
            En <strong>SommierOutlet</strong> tenemos los mejores colchones y
            sommiers con hasta <strong>50% OFF</strong> y <strong>12 cuotas sin interés</strong>.
            Envíos gratis a todo el país y calidad garantizada.
          </p>
          <p>
            Aprovechá las ofertas exclusivas y renová tu descanso hoy mismo.
          </p>
        </div>
      </div>

      {/* --- Nueva sección: Asesor personalizado --- */}
      <div className="asesor-section">
        <img
          src={Asesor} // reemplazá por tu imagen real
          alt="Asesor de atención al cliente"
          className="asesor-img"
        />
        <h2 className="asesor-titulo">
          Te ayudamos a encontrar el colchón ideal para vos
        </h2>
        <p className="asesor-subtitulo">
          Hablá con un experto certificado en calidad de atención
        </p>
        <div className="asesor-botones">
          <button className="asesor-btn whatsapp">WhatsApp</button>
          <button className="asesor-btn tienda">Encontrá tu tienda</button>
        </div>
      </div>
    </>
  );
}

export default Inicio;