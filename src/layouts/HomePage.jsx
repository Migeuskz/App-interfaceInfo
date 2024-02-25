import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <h1 className='titulos'>Bienvenido</h1>
      <div className='perfil' >
        <img src="/src/assets/perfil.jpg" alt="foto de perfil" />
    <p>Esta es una aplicacion para explicar los temas de planificacion dedl tiempo hecha por Miguel Angel Sanchez Papalotzi de 8vo "A" IDGS.</p>
      </div>
      <Footer/>
    </div>
  )
}
