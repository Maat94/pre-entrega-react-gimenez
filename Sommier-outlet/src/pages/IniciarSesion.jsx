import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "../styles/IniciarSesion.css";

export default function IniciarSesion({ setIsAuthenticated, setUsuario }) {
  const navigate = useNavigate();
  const ubicacion = useLocation();

  const [formulario, setFormulario] = useState({ nombre: '', email: '' });

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (formulario.nombre && formulario.email) {
      setIsAuthenticated(true);
      setUsuario(formulario);

      // Si venía del carrito, redirige a pagar
      if (ubicacion.state?.carrito) {
        navigate('/pagar', { state: { carrito: ubicacion.state.carrito } });
      } else {
        navigate('/productos');
      }
    } else {
      alert('Completa todos los datos');
    }
  };

  return (
    <div className="iniciar-container">
      <h1>Inicia sesión para continuar</h1>
      <form className="iniciar-form" onSubmit={manejarEnvio}>
        <input
          className="iniciar-input"
          type="text"
          placeholder="Nombre completo"
          value={formulario.nombre}
          onChange={(e) =>
            setFormulario({ ...formulario, nombre: e.target.value })
          }
          required
        />
        <input
          className="iniciar-input"
          type="email"
          placeholder="Email"
          value={formulario.email}
          onChange={(e) =>
            setFormulario({ ...formulario, email: e.target.value })
          }
          required
        />
        <div className="iniciar-botones">
          <button className="iniciar-boton" type="submit">
            Iniciar Sesión
          </button>
          <button
            className="iniciar-boton cancelar"
            type="button"
            onClick={() => navigate('/productos')}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}