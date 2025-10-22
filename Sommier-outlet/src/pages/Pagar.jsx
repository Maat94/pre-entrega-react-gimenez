import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Pagar.css";

export default function Pagar({
  setIsAuthenticated,
  usuario,
  setUsuario,
}) {
  const location = useLocation();
  const navigate = useNavigate();

  // Datos del carrito
  const carrito = location.state?.carrito || [];
  // Calculo del total
  const total = carrito.reduce(
    (suma, producto) => suma + Number(producto.precio),
    0
  );

  // Función para finalizar compra
  const comprar = () => {
    alert("¡Compra realizada con éxito!");
    navigate("/productos");
  };

  // Función para cerrar sesión
  const cerrarSesion = () => {
    setIsAuthenticated(false);
    setUsuario({ nombre: "", email: "" });
  };

  return (
    <div className="pagar-container">
      <div className="pagar-usuario">
        <h2 className="pagar-nombre">{usuario.nombre}</h2>
        <p className="pagar-email">Email: {usuario.email}</p>
        <button className="pagar-boton cerrar" onClick={cerrarSesion}>
          Cerrar sesión
        </button>
        <hr />
      </div>

      <div className="pagar-carrito">
        <h2 className="pagar-titulo">Tu compra:</h2>

        {carrito.map((producto) => (
          <div key={producto.id} className="pagar-item">
            <img
              src={producto.avatar}
              alt={producto.nombre}
              className="pagar-imagen"
            />
            <span className="pagar-nombre-item">{producto.nombre}</span>
            <strong className="pagar-precio">
              ${Number(producto.precio).toLocaleString("es-AR")}
            </strong>
          </div>
        ))}

        <h3 className="pagar-total">
          Total a pagar: ${Number(total).toLocaleString("es-AR")}
        </h3>
      </div>

      <div className="pagar-botones">
        <button className="pagar-boton confirmar" onClick={comprar}>
          Confirmar y Pagar
        </button>
        <button
          className="pagar-boton cancelar"
          onClick={() => navigate("/productos")}
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}