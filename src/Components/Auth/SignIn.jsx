import React from 'react'
import Button from "../Button"
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from "../../redux/actions/authActions"


export default function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const auth = useSelector((state) => state.auth)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login({ email, password }))
    }

    const handleLoginGoogle = () => {
        window.location.href = "http://localhost:8085/api/auth/signIn/google"
    }

    const loading = auth.loading
    const error = auth.error
    const isAuthenticated = auth.isAuthenticated

    useEffect(() => {
        if (isAuthenticated) {
          navigate("/home")
        }
      }, [isAuthenticated, navigate])

  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <form onSubmit={handleSubmit} className="w-1/3 p-3 flex flex-col items-center bg-white rounded-2xl shadow-2xl">
        <div className="p-4 m-3">
            <h1 className="font-bold text-2xl">Sign In</h1>
        </div>
        <div className="w-3/5 m-3">
            <label className="mb-2 pb-1">Email:</label>
            <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-2 p-1 rounded-lg hover:border-blue-700"
            required
            />
        </div>
        <div className="w-3/5 m-3">
            <label className="mb-2 pb-1">Password:</label>
            <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border-2 p-1 rounded-lg hover:border-blue-700"
            required
            />
        </div>
        <div className="">
            <button type="submit" className="p-2 m-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700">
            Sign In
            </button>
        </div>
        <div>
          <button
            type="button"
            onClick={handleLoginGoogle}
            className="p-2 m-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700">
            Sign In with Google
            </button>
        </div>
        <div className="mt-4">
          <button
            type="button"
            onClick={() => navigate("/register")}
            className="text-sm text-blue-500 hover:underline"
          >
            ¿You don´t have an account? Sign up here!
          </button>
        </div>
        
    </form>
    </div>
  )
}



