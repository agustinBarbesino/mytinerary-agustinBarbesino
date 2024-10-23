import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Button from './Button'

export default function CityDetails() {
    const [city, setCity] = useState(null)
    const [error, setError] = useState(null)

    const { id } = useParams()
    
    useEffect(() => {

        setError(null)

        
        
        let url = `http://localhost:8085/api/cities/all`
        
        fetch(url)
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok')
            }
            return res.json();
        })
        .then(data => {
            const foundCity = data.response.find(city => city.id == id)
            
            if (foundCity) {
                setCity(foundCity)
            } else {
                setError('City not found')
            }
            
        })
        .catch(err => {
            setError(err.message)
        })
        
    }, [])

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/cities`)
      }
    
    return (
        <>
            {error ? ( 
                    <>
                    <div className='h-screen'>
                        <p className=' bg-white rounded-sm text-center text-2xl font-semibold p-2 mt-4'>{error}</p>
                    </div>
                </>
                ) : city? (
                    <>
                        <div className='h-screen flex flex-col justify-start items-center'>
                            <div className='w-4/5 sm:w-1/2 md:w-1/2 lg:w-1/2 h-80 flex flex-col lg:flex-row justify-between items-center p-3 m-3 bg-zinc-50 rounded-2xl shadow-md'>
                                <div className='w-full lg:w-1/2 h-full overflow-hidden rounded-2xl'>
                                    <img className='w-full h-full object-cover' src={city.img} alt={city.name} />
                                </div>
                                <div className='w-1/2 h-full flex justify-center items-center'>
                                    <h1 className='font-bold p-2'>{city.name}</h1>    
                                </div>
                            </div>      
                            <div>
                                <p className="m-3 text-center text-3xl bg-white rounded-md">This site is underconstruction! Come back later!</p>
                            </div>
                            <div className='m-3'>
                                <Button onClick={handleClick} text={"Go Back to Cities"}></Button>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className='h-screen'>
                            <p className=' bg-white rounded-sm text-center text-2xl font-semibold p-2 mt-4'>No city found!</p>
                        </div>
                    </>
                )}
        </>
    )
}