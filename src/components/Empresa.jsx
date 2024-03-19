import { useState, useEffect } from 'react';

export default function Empresa() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cards = [
        { title: 'Proceso', content: 'Un proceso en NVIDIA es el uso de la plataforma NVIDIA AI Enterprise para acelerar las canalizaciones de la ciencia de datos y optimizar el desarrollo y la implementación de aplicaciones de IA. Esta plataforma incluye herramientas de desarrollo, marcos de trabajo, modelos entrenados previamente y microservicios para profesionales de la IA, así como funciones de gestión para garantizar el rendimiento, la estabilidad de las API y la seguridad. ' },
        { title: 'Procedimiento', content: 'NVIDIA ha implementado procedimientos detallados para garantizar la calidad y la fiabilidad de sus productos y servicios. Estos procedimientos incluyen la creación de diseños comprobables, fabricables y fiables, y el tratamiento de los defectos para evitarlos. ' },
        { title: 'Programa', content: 'NVIDIA ha desarrollado un sistema integrado de gestión de la calidad basado en estándares reconocidos como ISO 9001:2015. Este sistema abarca desde los procedimientos de gestión hasta las prácticas operativas y de desarrollo, y la supervisión de los resultados. Este compromiso con la calidad se extiende a todos los aspectos de la empresa, incluyendo el diseño y la fabricación de semiconductores, sistemas, cables y software.' },
        // Agrega más tarjetas según sea necesario
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % cards.length);
        }, 3000); // Cambia el intervalo según la velocidad deseada
        return () => clearInterval(interval);
    }, [currentIndex, cards.length]);

    return (
        <div className='cardsUnidad2'>
            {cards.map((card, index) => (
                <div key={index} className={`cardEmpresa ${index === currentIndex ? 'active' : ''}`}>
                    <h2>{card.title}</h2>
                    <p>{card.content}</p>
                    <img src="/src/assets/logo.png" className='logo' />
                </div>
            ))}
        </div>
    );
}
