import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'
import CitiesPage from './Pages/CitiesPage'
import Details from './Pages/Details'
import './App.css'
import StandardLayout from './Layouts/StandardLayout'


const router = createBrowserRouter([
  { element: <StandardLayout></StandardLayout>,
    children: [
      { path: '/', element: <Home/> },
      { path: '/home', element: <Home/> },
      { path: '/cities', element: <CitiesPage/> },
      { path: '/city/:id', element: <Details/>}
    ]
  },
  
]);

function App() {

  return (
    <>
    <div className='bg-cover bg-center h-full' style={{backgroundImage: "url(" + '../public/images/background.jpg' + ")"}}>
      <RouterProvider router={router}></RouterProvider>
    </div>
    </>
  )
}

export default App
