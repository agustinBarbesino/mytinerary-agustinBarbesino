import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../../redux/actions/registerActions'

export default function SignUp() {
  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    img: "",
    country: ""
  })

  const dispatch = useDispatch()
  const register = useSelector((state) => state.register)
  const loading = register.loading
  const error = register.error
  const success = register.success
  
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(userData));
  }

  const countries = ["Argentina", 
    "Brazil", 
    "Canada", 
    "USA", 
    "Germany", 
    "France", 
    "Italy", 
    "Spain", 
    "Portugal", 
    "Poland", 
    "Austria", 
    "Turkey", 
    "Switzerland", 
    "Sweden", 
    "Denmark", 
    "Netherlands", 
    "Belgium", 
    "Ireland", 
    "United Kingdom",
    "Mexico",
    "Chile",
    "Colombia",
    "Ecuador",
    "Peru",
    "Uruguay",
    "Venezuela",
    "Bolivia",
    "Paraguay"]

  return (
    <div className="w-full pt-10 h-screen flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-3/5 max-w-md bg-white rounded-2xl shadow-lg flex flex-col justify-center items-center"
      >
        <h2 className="m-2 text-2xl font-bold text-center">Register</h2>
        {["name", "lastName", "email", "password"].map((field) => (
          <div key={field} className='w-4/5 m-2 flex flex-col'>
            <label className="capitalize p-1">{field}:</label>
            <input
              type={field === "password" ? "password" : "text"}
              name={field}
              value={userData[field]}
              onChange={handleChange}
              required
              className="border-2 p-1 rounded-lg hover:border-blue-700"
            />
          </div>
        ))}
        <div className='w-4/5 m-2 flex flex-col'>
          <label className="">Profile Image (URL):</label>
          <input
            type="text"
            name="img"
            value={userData.img}
            onChange={handleChange}
            className="w-full border-2 p-1 rounded-lg hover:border-blue-700"
          />
        </div>
        <div className='w-4/5 m-2 flex flex-col'>
          <label className="">Country:</label>
          <select
            name="country"
            value={userData.country}
            onChange={handleChange}
            required
            className="w-full border-2 p-1 rounded-lg hover:border-blue-700"
          >
            <option value="">Select a country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="p-2 m-4 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </button>
        {error && <p className="p-2 m-4 font-bold text-red-500 text-center">{error}</p>}
        {success && <p className="p-2 m-4 font-bold text-green-500 text-center">Registration successful!</p>}
      </form>
    </div>
  )
}
