import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Carrito.css';

export default function CarritoCompras({ carrito, setCarrito }) {
  const navigate = useNavigate();

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const irAPagar = () => {
    navigate('/pagar', { state: { carrito } });
  };

  const total = carrito.reduce((sum, item) => sum + Number(item.precio), 0);

  return (
    <div className="carrito-container">
      <hr className="carrito-separador" />
      <h2 className="carrito-titulo">Carrito de Compras</h2>

      {carrito.length === 0 ? (
        <p className="carrito-vacio">El carrito está vacío</p>
      ) : (
        <>
          <div className="carrito-lista">
            {carrito.map((item) => (
              <div key={item.id} className="carrito-item">
                {item.avatar && (
                  <img
                    src={item.avatar}
                    alt={item.nombre}
                    className="carrito-imagen"
                  />
                )}
                <span className="carrito-nombre">{item.nombre}</span>
                <span className="carrito-precio">
                  ${Number(item.precio).toLocaleString('es-AR')}
                </span>
              </div>
            ))}
          </div>

          <div className="carrito-total">
            <hr />
            <p>Total: ${Number(total).toLocaleString('es-AR')}</p>
          </div>

          <div className="carrito-botones">
            <button className="carrito-boton vaciar" onClick={vaciarCarrito}>
              Vaciar Carrito
            </button>
            <button className="carrito-boton pagar" onClick={irAPagar}>
              Pagar
            </button>
          </div>
        </>
      )}
    </div>
  );
}
