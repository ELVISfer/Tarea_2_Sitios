import React from 'react'
import  { useState, useEffect } from "react";
const url = 'http://localhost:3000/api/quienesSomos';
export const quienesSomos = () => {
  const [datos, setDatos] = useState([]);
  const getquienesSomos = async () => {
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
    getquienesSomos();
  }, []);



  return (
    <>
<div className='container text-center p-5'>
  <h1>Conozcalos!!!! </h1>
</div>
<div className='container'>
<div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <div className="card">
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Vision</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="./Imagenes/bajo1.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Mision</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>     
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Maestros</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button className='btn btn-primary'>Ir a las salas de los maestro</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Historia</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
     <button className='btn btn-primary'>Ir a la historia</button>
      
      </div>
    </div>
  </div>

</div>

</div>
    </>
  )
}