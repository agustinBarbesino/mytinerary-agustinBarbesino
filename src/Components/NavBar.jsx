import React from 'react'
import { NavLink } from "react-router-dom"

//Rutas de la barra navegación
const routes =[
    {to: "/" , text: "Home"},
    {to: "/cities" , text: "Cities"}
]

export default function NavBar() {
  return (
    <>
        <nav>
            <ul className='flex justify-between gap-2'>
                {routes.map((route, index) => (
                    <li key={index}>
                        <NavLink to={route.to} className={({isActive}) => isActive?
                            'transition ease-in-out delay-100 font-bold text-white bg-blue-700 rounded-full p-2 hover:scale-110 hover:bg-slate-300' :
                               'transition ease-in-out delay-100 font-bold rounded-full p-2 hover:scale-110 hover:bg-slate-300'} > {route.text} </NavLink>
                    </li>
                ))}
            </ul>
        </nav> 
    </>
  )}
