import React from 'react'
import Home from './pages/Home'
import Sobre from './pages/Sobre';
import Videos from './pages/Videos';
import Funcoes from './pages/Funcoes';
import Materiais from './pages/Materiais';
import Criadores from './pages/Criadores';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { Global } from './styles/Global';



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