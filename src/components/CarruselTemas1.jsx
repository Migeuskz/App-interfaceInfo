import React from 'react'
import 'animate.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function CarruselTemas1() {
  const [indiceActual, setIndiceActual] = useState(0);
  const tarjetas = [
    { titulo: 'Planeación Estrategica', contenido: 'Plan: “modelo sistemático de una actuación pública o privada, que se elabora anticipadamente para dirigirla y encauzarla”.', ruta: <Link to={'Unidad1/Tema1'}>ver mas</Link> },
    { titulo: 'Estilos de Planificación Ackoff', contenido: 'Según Ackoff, el proceso de la planeación en las organizaciones se orienta por las actitudes que los administradores tengan hacia la formulación de la planeación. ', ruta: <Link to={'Unidad1/Tema2'}>ver mas</Link> },
    { titulo: 'Modelos Organizacionales', contenido: 'También llamados estructuras organizacionales, se refieren a la forma en que una empresa, área o departamento, deben estar alineados con objetivos en común.' },
    // Agrega más objetos de tarjetas según sea necesario
  ];

  const cambiarCarta = (direccion) => {
    setIndiceActual((prevIndice) => {
      let nuevoIndice = prevIndice + direccion;
      if (nuevoIndice <  0) {
        nuevoIndice = tarjetas.length -  1;
      } else if (nuevoIndice >= tarjetas.length) {
        nuevoIndice =  0;
      }
      return nuevoIndice;
    });
  };

  return (
    <>
    <h1 class="animate__animated animate__bounceIn titulo">Temario: Unidad 1</h1>

    <div className="carrusel-container">
      <button className="carrusel-control" onClick={() => cambiarCarta(-1)}>Anterior</button>
      <div className="carrusel-item">
        <h2>{tarjetas[indiceActual].titulo}</h2>
        <p>{tarjetas[indiceActual].contenido}</p>
        <button className='vermas'>{tarjetas[indiceActual].ruta}</button>
        
      </div>
      {/* <!-- Agrega más tarjetas según sea necesario --> */}
      <button className="carrusel-control" onClick={() => cambiarCarta(1)}>Siguiente</button>
    </div>
    </>
  );
}

