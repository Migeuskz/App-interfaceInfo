import React from 'react'

export default function EstilosAckoff() {
    return (
        <div id="grid">
            <div class="left">
                {/* <div className='image'>
                    <img src="./assets/pasado.jpg" alt="pasado" />
                </div> */}
                <div className='contenido'>
                    <h1>Reactivista</h1>
                    <p>Los reactivistas no les satisfacen las cosas tal como están, ni el modo en que ocurren. Prefieren las cosas tal
                        como una vez estuvieron. Por lo tanto, buscan regresar a un estado anterior deshaciendo los cambios
                        relevantes, creen que la tecnología es la principal causa del cambio, la consideran su principal enemigo. A
                        través de la historia se han resistido al progreso y han buscado el retorno a la “vida simple”.

                    </p>
                    {/* <img src="/src/assets/pasado.jpg" alt="algo" /> */}
                </div>

            </div> {/* one*/}

            <div class="center">
                <div className='contenido'>
                    <h1>Inactivista</h1>
                    <p>
                        Los inactivistas están satisfechos con las cosas tal como están. Aun cuando no desean retomar el
                        pasado, no les agrada la forma cómo están evolucionando las cosas, por lo que tratan de impedir el
                        cambio. Sus objetivos son la sobrevivencia y la estabilidad. Atrapados en la marea del cambio, tratan
                        de anclarse y mantenerse en una posición fija
                    </p>
                    {/* <img src="/src/assets/presente.jpg" alt="algo" /> */}
                </div>
            </div> {/* two */}

            <div class="right">
                <div className='contenido'>
                    <h1>Preactivista</h1>
                    <p>
                        El preactivismo es el estilo dominante de la administración actual de los Estados Unidos de Norteamérica. Las
                        personas que lo integran son perfeccionistas y no desean regresar a un estado previo o disponer de las cosas
                        tal como eran. Creen que el futuro será mejor que el presente y el pasado, a su vez tratan de navegar con la
                        marea, para desembarcar en algún lugar en donde nadie haya llegado antes; una vez en este lugar, tratarán
                        de reclamar su derecho de propiedad y de cobrar peaje a los que llegan después.
                    </p>
                    {/* <img src="/src/assets/futuro.jpg" alt="algo" /> */}
                </div>
            </div> {/* three*/}

            <div class="down">
                <div className='contenido'>
                    <h1>Interactivista</h1>
                    <p>
                        Los interactivistas (a veces llamados proactivistas) no desean retornar a un estado previo, prolongar la
                        situación actual, ni acelerar la llegada del futuro. Estos niegan lo que implícitamente suponen los inactivistas,
                        los reactivistas y los preactivistas: que el futuro está fuera de control en gran parte, porque lo único que puede
                        controlarse hasta cierto punto es el propio futuro. Creen que el futuro puede ser influenciado por lo que uno
                        hace y por lo que los demás hacen, del mismo
                    </p>
                    {/* <img src="/src/assets/todo.jpg" alt="algo" /> */}
                </div>
            </div>
        </div>
    )
}
