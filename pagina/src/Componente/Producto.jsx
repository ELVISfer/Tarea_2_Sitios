import React from 'react'
import  { useState, useEffect } from "react";
const url = 'http://localhost:3000/api/Producto';
export const Producto = () => {
  const [datos, setDatos] = useState([]);
  const getProducto = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Error al obtener datos del servidor");
      }
      const data = await response.json();
      setDatos(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducto();
  }, []);



  return (
    <>
<div className='container text-center p-5'>
  <h1>Ventas de Bajismo </h1>
</div>
<div className='container'>
<div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <div className="card">
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Bajo de 4 cuerda</h5>
        <h4 className="card-title">L. 4000</h4>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
     <button className='btn btn-primary'>Ir al Informacion</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="./Imagenes/bajo1.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Bajo de 5 cuerda</h5>
        <h4 className="card-title">L. 7000</h4>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button className='btn btn-primary'>Ir al Informacion</button>
     
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Bajo de 6 cuerda</h5>
        <h4 className="card-title">L. 10000</h4>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button className='btn btn-primary'>Ir al Informacion</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Bajo de 8 cuerda</h5>
        <h4 className="card-title">L. 12000</h4>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
     <button className='btn btn-primary'>Ir al Informacion</button>
      
      </div>
    </div>
  </div>

</div>

</div>
    </>
  )
}