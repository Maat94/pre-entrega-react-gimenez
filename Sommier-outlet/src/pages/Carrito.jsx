import React from 'react';
import '../styles/Carrito.css';

export default function CarritoCompras({ carrito, setCarrito }) {
  const vaciarCarrito = () => {
    setCarrito([]);
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

          <button className="carrito-boton" onClick={vaciarCarrito}>
            Vaciar Carrito
          </button>
        </>
      )}
    </div>
  );
}
