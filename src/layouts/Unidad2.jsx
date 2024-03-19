import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import CardsUnidad2 from '../components/CardsUnidad2'

export default function Unidad2() {
  return (
    <div>
        <Navbar/>
      <h1 className='titulos'>Unidad 2</h1>
      <div>
        <CardsUnidad2/>
      </div>
    </div>
  )
}
