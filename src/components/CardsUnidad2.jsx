import React from 'react'
import Empresa from './Empresa'

export default function CardsUnidad2() {
    return (


        <div className="grid">
            <div className='cardsUnidad2'>
                <div className='card1'>
                    <h2>Proceso</h2>
                    <p>
                        Un proceso es una serie de pasos o actividades que se realizan para lograr un objetivo específico. Un ejemplo de un proceso en una empresa reconocida podría ser el proceso de selección de personal.
                    </p>
                </div>
                <div className='card2'>
                    <h2>Procedimiento</h2>
                    <p>
                        Un procedimiento es un conjunto de instrucciones detalladas que describen cómo realizar una tarea específica. Un ejemplo de un procedimiento en una empresa reconocida podría ser el procedimiento de facturación.
                    </p>
                </div>
                <div className='card3'>
                    <h2>Programa</h2>
                    <p>
                        Un programa es un conjunto de procedimientos y procesos diseñados para lograr un objetivo específico. Un ejemplo de un programa en una empresa reconocida podría ser el programa de gestión de proyectos.
                    </p>
                </div>
            </div>
            <div className='ejemplo'>
            <Empresa/>
            </div>
        </div>

    )
}
