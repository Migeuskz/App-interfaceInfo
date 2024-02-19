import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './layouts/HomePage'
import Unidades from './layouts/Unidades'

const router = createBrowserRouter([
  {
    path: '/',
    // element: <h1>Bienvenido</h1>
    element: <HomePage />,
    errorElement: <h1>Error 404</h1>
  },
  {
    path: '/Unidad',
    element: <Unidades />,
    children: [
      {
        path: '/Unidad/unidad1',
        element: <h1>Unidad 1</h1>
      },
      {
        path: '/Unidad/unidad2',
        element: <h1>Unidad 2</h1>
      },
      {
        path: '/Unidad/unidad3',
        element: <h1>Unidad 3</h1>
      },
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
