import React from 'react'
import 'animate.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='navbar'>
            <Link to={'/'}>
                <h1 class="animate__animated animate__bounceIn">Home</h1>
            </Link>
            <Link to={'/Unidad1'}>
                <h1 class="animate__animated animate__bounceIn">Unidad 1</h1>
            </Link>
            <Link to={'/Unidad2'}>
                <h1 class="animate__animated animate__bounceIn">Unidad 2</h1>
            </Link>
            <Link to={'/Unidad3'}>
                <h1 class="animate__animated animate__bounceIn">Unidad 3</h1>
            </Link>
            {/* animate__bounceIn */}
            {/* <ul>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#acerca">Acerca de</a></li>
                <li><a href="#servicios">Servicios</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul> */}
        </div>
    )
}
