import React from 'react'
import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getCities } from '../../redux/actions/citiesActions'
import Button from '../Button'
import Itineraries from './Itineraries'

export default function CityDetails() {

    const { id } = useParams();
    const dispatch = useDispatch();
    const cities = useSelector((state) => state.cities.data);
    const status = useSelector((state) => state.cities.status);
    const city = cities.find((c) => c.id == id);

    useEffect(() => {
        if (status === 'idle') {
        dispatch(getCities());
        }
    }, [dispatch, status]);

    if (status === 'loading') return <p 
                                        className='
                                        bg-white rounded-sm text-center text-2xl font-semibold p-2 mt-4'
                                        >Loading city details...
                                    </p>
    if (status === 'failed') return <p 
                                        className='
                                        bg-white rounded-sm text-center text-2xl font-semibold p-2 mt-4'
                                        >Error loading city details
                                    </p>
    if (!city) return   <p 
                            className='
                            bg-white rounded-sm text-center text-2xl font-semibold p-2 mt-4'
                            >City not found
                        </p>

    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/cities`)
      }
    
      return (
        <div className='h-full flex flex-col justify-start items-center'>
            {status === 'loading' && (
                <p className='bg-white rounded-sm text-center text-2xl font-semibold p-2 mt-4'>
                    Loading city details...
                </p>
            )}
            {status === 'failed' && (
                <>
                <p className='bg-white rounded-sm text-center text-2xl font-semibold p-2 mt-4'>
                    Error loading city details
                </p>
                <div className='m-3'>
                <Button onClick={handleClick} text={"Go Back to Cities"}></Button>
                </div>
                </> 
            )}
            {status === 'succeeded' && city && (
                <>
                <div className='min-h-screen flex flex-col items-center'>
                <div className='w-4/5 sm:w-1/2 md:w-1/2 lg:w-1/2 flex flex-col lg:flex-row justify-evenly items-center p-3 m-3 bg-zinc-50 rounded-2xl shadow-md'>
                        <div className='w-full lg:w-1/2 overflow-hidden rounded-2xl'>
                            <img className='w-full h-full object-cover' src={city.img} alt={city.name} />
                        </div>
                        <div className='w-1/2 p-3 flex flex-col justify-center items-center'>
                            <h1 className='font-bold p-2'>{city.name}</h1>
                            <p className='text-justify'>{city.description}</p>    
                        </div>
                    </div>      
                    <div className='h-full'>
                        <Itineraries id={city._id}></Itineraries>
                    </div>
                    <div className='m-3'>
                        <Button onClick={handleClick} text={"Go Back to Cities"}></Button>
                    </div>
                </div>
                    
                </>
            )}
            {status === 'succeeded' && !city && (
                <>
                <p className='bg-white rounded-sm text-center text-2xl font-semibold p-2 mt-4'>
                    City not found
                </p>
                <div className='m-3'>
                    <Button onClick={handleClick} text={"Go Back to Cities"}></Button>
                </div>
                </>
                
            )}
        </div>
    )
}