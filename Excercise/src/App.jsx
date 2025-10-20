import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Inicio from './pages/Inicio'
import Nosotros from './pages/Nosotros'
import Navbar from './pages/Navbar'
import Productos from './pages/Productos'
import ProductoDetalle from './pages/DetalleProductos'
import Header from './pages/Header'
import Footer from './pages/Footer'

function App() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/nosotros' element={<Nosotros />}/>
        <Route path='/productos' element={<Productos/>}/>
        <Route path='productos/:id' element={<ProductoDetalle/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App