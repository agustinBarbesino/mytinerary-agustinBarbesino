import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Search from './Search'
import CityCard from './CityCard'
import { useSelector, useDispatch } from 'react-redux'
import { getCities, setCities } from '../redux/actions/citiesActions'



export default function Cities() {

    const dispatch = useDispatch();
    const cities = useSelector((state) => state.cities.data)
    const status = useSelector((state) => state.cities.status)
    const search = useSelector((state) => state.search.search)
    const filteredCities = useSelector((state => state.cities.filteredCities))

    useEffect(() => {
        dispatch(getCities());
    }, [dispatch]);

    useEffect(() => {
        const filtered = cities.filter((city) =>
            city.name.toLowerCase().includes(search.toLowerCase())
        );
        dispatch(setCities(filtered));
    }, [dispatch, search, cities]);

    const navigate = useNavigate()

    const handleClick = (id) => {
      navigate(`/city/${id}`)
    }
    
    return (
        <div className='h-full flex flex-col justify-between items-center'>
            {status === 'loading' && (
                <p className='bg-white rounded-sm text-center text-2xl font-semibold p-2 mt-4'>
                    Loading Cities...
                </p>
            )}
            {status === 'failed' && (
                <p className='bg-white rounded-sm text-center text-2xl font-semibold p-2 mt-4'>
                    Error loading Cities
                </p>
            )}
            {status === 'succeeded' && (
                <>
                    <div className='w-full flex justify-center p-3 m-3'>
                        <Search />
                    </div>
                    <div className='w-full h-full flex justify-center flex-wrap'>
                        {filteredCities.map(city => (
                            <CityCard 
                                key={city.id} 
                                name={city.name} 
                                img={city.img} 
                                onClick={() => handleClick(city.id)}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
