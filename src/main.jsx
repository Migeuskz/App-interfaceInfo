import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './layouts/HomePage'
import Unidades from './layouts/Unidades'
import Unidad1 from './layouts/Unidad1'
import Unidad2 from './layouts/Unidad2'
import Unidad3 from './layouts/Unidad3'
import EstilosAckoff from './components/EstilosAckoff'
import TemaAckoff from './views/TemaAckoff'

const router = createBrowserRouter([
  {
    path: '/',
    // element: <h1>Bienvenido</h1>
    element: <HomePage />,
    errorElement: <h1>Error 404</h1>
  },
  {
    path: '/Unidad1',
    element: <Unidad1/> ,
    children: [
      {
        path: '/Unidad1/Tema1',
        element: <h1>Unidad 1</h1>
      },
      {
        path: 'Unidad1/Tema2',
        element: <TemaAckoff/>
      },
      {
        path: '/Unidad1/Tema3',
        element: <h1>Unidad 3</h1>
      },
    ]
  },
  {
    path: '/Unidad2',
    element: <Unidad2/>,
  },
  {
    path: '/Unidad3',
    element: <Unidad3/>,
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
