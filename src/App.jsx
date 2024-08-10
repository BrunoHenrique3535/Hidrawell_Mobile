import React from 'react'
import Home from './pages/Home'
import Sobre from './pages/Sobre';
import Videos from './pages/Videos';
import Funcoes from './pages/Funcoes';
import Materiais from './pages/Materiais';
import Criadores from './pages/Criadores';

import {createBrowserRouter, RouterProvider} from "react-router-dom";



const rotas = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/sobre",
    element: <Sobre/>
  },
  {
    path: "/videos",
    element: <Videos/>
  },
  {
    path: "/funcoes",
    element: <Funcoes/>
  },
  {
    path: "/materiais",
    element: <Materiais/>
  },
  {
    path: "/criadores",
    element: <Criadores/>
  }
]);

export default function () {
  return (
    <RouterProvider router={rotas}/>
  )
}