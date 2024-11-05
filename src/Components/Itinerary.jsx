import React from 'react'

export default function Itinerary({ userName , userImg , price, duration, handleLike }) {
    const renderPrice = (price) => {
        return Array(price)
        .fill(null)
        .map((_, index) => (
            <img className="object-contain" src="../public/images/price.svg"></img>
        ))
    }

  return (
    <>
    <div className='w-full max-h-screen m-3 flex flex-col justify-evenly items-center rounded-2xl border-2 shadow-md bg-white'>
    <div className='w-full h-72 p-3 m-3 flex justify-between items-center bg-white rounded-2xl '>
        <div className='w-1/3 h-full flex flex-col justify-center items-center rounded-2xl'>
            <p className='text-center font-semibold'>Price:</p>
            <div className='w-14 h-14 flex justify-center items-center'>
                {renderPrice(price)}
            </div>
        </div>
        <div className='w-1/3 h-full flex flex-col justify-between items-center rounded-2xl'>
            <div className='w-2/3 h-2/3 p-2'>
                <img className='object-cover rounded-2xl' src={userImg} alt="" />            
            </div>
            <div className='p-2 text-center font-semibold'>
                <h1>{userName}</h1>
            </div>
        </div>
        <div className='w-1/3 h-full flex flex-col justify-center items-center rounded-2xl'>
            <p className='text-center font-semibold'>Duration: </p>
            <p className='text-center'>{duration} minutos.</p>
        </div>
    </div>
    <div className='p-3 mb-2'>
        <button onClick={handleLike}>{"🤍"}</button>
    </div>
    </div>
    
    </>
    
  )
}
