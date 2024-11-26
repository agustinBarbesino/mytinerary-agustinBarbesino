import React from 'react'
import { NavLink } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../redux/actions/authActions'
import ProfileButton from '../ProfileButton'  

const routes =[
    {to: "/" , text: "Home"},
    {to: "/cities" , text: "Cities"}
]

export default function NavBar() {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.auth.user)
    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <nav>
          <ul className="flex justify-between items-center gap-2">
            {routes.map((route, index) => (
              <li key={index}>
                <NavLink
                  to={route.to}
                  className={({ isActive }) =>
                    isActive
                      ? "transition ease-in-out delay-100 font-bold text-white bg-blue-700 rounded-full p-2 hover:scale-110 hover:bg-slate-300"
                      : "transition ease-in-out delay-100 font-bold rounded-full p-2 hover:scale-110 hover:bg-slate-300"
                  }
                >
                  {route.text}
                </NavLink>
              </li>
            ))}
    
            {!user ? (
              <li>
                <NavLink
                  to="/login"
                  className="transition ease-in-out delay-100 font-bold rounded-full p-2 hover:scale-110 hover:bg-slate-300"
                >
                  Login
                </NavLink>
              </li>
            ) : (
              <>
                <li>
                  <button
                    onClick={handleLogout}
                    className="font-bold rounded-full p-2 hover:bg-slate-500"
                  >
                    Logout
                  </button>
                </li>
                <li>
                  <ProfileButton />
                </li>
              </>
            )}
          </ul>
        </nav>
      );
    }