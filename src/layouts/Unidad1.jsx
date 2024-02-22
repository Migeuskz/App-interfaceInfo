import React from 'react'
import Navbar from '../components/Navbar'
import CarruselTemas1 from '../components/CarruselTemas1'
import { Outlet } from 'react-router-dom'

export default function Unidad1() {
  return (
    <div>
      <Navbar />
      <CarruselTemas1 />
      <div>
        <Outlet/>
      </div>
    </div>
  )
}
