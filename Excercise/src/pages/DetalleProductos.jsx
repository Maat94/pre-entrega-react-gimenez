import { Link, useParams, useLocation } from "react-router-dom";
import "../styles/DetalleProductos.css";

const ProductoDetalle = () => {
  const { id } = useParams();
  const location = useLocation();
  const producto = location.state?.producto;

  if (!producto) {
    return (
      <div className="detalle-container">
        <p>No se pudo cargar el producto</p>
        <Link to="/productos">
          <button className="detalle-boton">Volver a Productos</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="detalle-container">
      <h2 className="detalle-titulo">Detalles del Producto {id}</h2>

      <p className="detalle-info">
        <strong>{producto.nombre}</strong>
      </p>
      <p className="detalle-info">
        <strong>Descripción:</strong> {producto.descripcion}
      </p>
      <p className="detalle-precio">${producto.precio}</p>

      <img
        src={producto.avatar}
        alt={producto.nombre}
        className="detalle-imagen"
      />

      <Link to="/productos">
        <button className="detalle-boton">Volver</button>
      </Link>
    </div>
  );
};

export default ProductoDetalle;