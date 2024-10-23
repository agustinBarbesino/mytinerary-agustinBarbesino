import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Search from './Search'
import CityCard from './CityCard'



export default function Cities() {
    const [cities, setCities] = useState([])
    const [search, setSearch] = useState("")
    const [error, setError] = useState(null)

    useEffect(() => {

        setError(null)
        
        let url = `http://localhost:8085/api/cities/all?name=${search}`
        
        fetch(url)
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok')
            }
            return res.json();
        })
        .then(data => {
            setCities(data.response)
            console.log(data.response);
            
        })
        .catch(err => {
            setError(err.message)
        })
        
    }, [search])

    const navigate = useNavigate()

    const handleClick = (id) => {
      navigate(`/city/${id}`)
    };
    
    return (
    <div className='h-full flex flex-col justify-between items-center'>
        <div className='w-full flex justify-center p-3 m-3 '>
            <Search search={search }setSearch={setSearch}></Search>
        </div>
        <div className='w-full h-full flex justify-center flex-wrap'>
            {error ? ( 
                    <>
                    <div className='h-screen'>
                        <p className=' bg-white rounded-sm text-center text-2xl font-semibold p-2 mt-4'>{error}</p>
                    </div>
                </>
                ) : 
            cities.length > 0 ? (
                cities.map(city => (
                    <CityCard 
                        key={city.id} 
                        name={city.name} 
                        img={city.img} 
                        onClick={() => handleClick(city.id)}/>
                ))
                ) : (
                    <>
                        <div className='h-screen'>
                            <p className=' bg-white rounded-sm text-center text-2xl font-semibold p-2 mt-4'>No cities found matching your search</p>
                        </div>
                    </>
                    
                )}
        </div>
    </div>
  )
}