import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'
import CitiesPage from './Pages/CitiesPage'
import Details from './Pages/Details'
import './App.css'
import StandardLayout from './Layouts/StandardLayout'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Profile from "./Pages/Profile"
import PrivateRoute from "./Components/PrivateRoute"


const router = createBrowserRouter([
  { element: <StandardLayout></StandardLayout>,
    children: [
      { path: '/', element: <Home/> },
      { path: '/home', element: <Home/> },
      { path: '/cities', element: <CitiesPage/> },
      { path: '/city/:id', element: <Details/>},
      { path: '/login', element: <Login/>},
      { path: '/register', element: <Register/>},
      { path: '/profile', element: (<PrivateRoute> <Profile /> </PrivateRoute>) }
    ]
  },
  
]);

function App() {

  return (
    <>
    <div className='bg-cover bg-repeat-y bg-center min-h-screen' style={{backgroundImage: "url(" + '../public/images/background.jpg' + ")"}}>
      <RouterProvider router={router}></RouterProvider>
    </div>
    </>
  )
}

export default App
