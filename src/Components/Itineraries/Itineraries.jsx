import Itinerary from './Itinerary'
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getItineraries, toggleLike } from '../../redux/actions/itinerariesActions';
  
export default function Itineraries({ id }) {
  const dispatch = useDispatch();
  const itineraries = useSelector((state) => state.itineraries.data);
  const status = useSelector((state) => state.itineraries.status);
  
  useEffect(() => {
    dispatch(getItineraries(id));
  }, [dispatch, id]);

  const handleLike = (itineraryId) => {
    dispatch(toggleLike(itineraryId));
  };
  
  return (
    <div className='w-full min-h-screen flex justify-center'>
        {status === 'loading' && <p>Cargando itinerarios...</p>}
        {status === 'failed' && <p>Error al cargar itinerarios</p>}
        {status === 'succeeded' && (
          <>
          <div className='w-3/5 p-3 flex flex-col justify-start items-center rounded-2xl shadow-sm'>
          {itineraries.map((itinerary) => (
            <Itinerary 
                userName={itinerary.userName} 
                userImg={itinerary.userImg} 
                price={itinerary.price} 
                duration={itinerary.duration} 
                key={itinerary.id}
                handleLike={handleLike} 
            />
            ))}
          </div>
          </>
        )}
    </div>
)
}
