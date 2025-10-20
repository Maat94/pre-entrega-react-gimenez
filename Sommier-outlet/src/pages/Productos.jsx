import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CarritoCompras from "./Carrito";
import "../styles/Productos.css"


export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [carrito, setCarrito] = useState([]);


  useEffect(() => {
    fetch("https://68e523af8e116898997e8885.mockapi.io/api/productos")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setProductos(datos);
        setCargando(false);
      })
      .catch((error) => {
        {console.error("Error!,", error)}
        setError("Hubo un problema al cargar los productos.");
        setCargando(false);
      });
  }, []);

  const agregarAlCarrito = (producto) => {
    setCarrito ([...carrito, producto]);
    alert(`Producto ${producto.nombre} agregado al carrito!`)
  }

  if (cargando) {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
      <p>Cargando productos...</p>
    </div>
  );
}
  if (error) return <p>{error}</p>;


  return (
    <>
    <ul id='lista-productos'>
      {productos.map((producto) => (
        <li key={producto.id}>
          <h3>{producto.nombre}</h3>
          <br />
         <p>{producto.descripcion}</p>
          <br />
          <p>${producto.precio}</p>
          <br />
          <img src={producto.avatar} alt={producto.nombre} width="100" />
          <Link to={`/productos/${producto.id}`} state={{producto}}><button>Más info</button></Link>
          <button onClick={() =>agregarAlCarrito(producto)}>Comprar</button>
        </li>
      ))}
    </ul>
    <CarritoCompras carrito={carrito} setCarrito={setCarrito}/>
    </>
  );
}