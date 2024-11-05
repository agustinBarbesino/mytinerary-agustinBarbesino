import React from 'react'

export default function Itinerary({ userName , userImg , price, duration, handleLike }) {
    const renderPrice = (price) => {
        return Array(price)
        .fill()
        .map((_, index) => (
            <svg key={index} ></svg>
        ))
    }

  return (
    <>
    <div className='w-3/5 p-3 flex justify-between items-center bg-white rounded-2xl shadow-sm'>
        <div className='w-1/3 border-1 border-blue-500 rounded-2xl'>
            Price: {renderPrice(price)}
        </div>
        <div className='w-1/3 flex flex-col justify-between items-center border-1 border-blue-500 rounded-2xl'>
            <div>
                <img src={userImg} alt="" />            
            </div>
            <div>
                <h1>{userName}</h1>
            </div>
        </div>
        <div className='w-1/3 border-1 border-blue-500 rounded-2xl'>
            Duration: {duration}
        </div>
    </div>
    <div>
        <button onClick={handleLike}>{liked?"❤️":"🤍"}</button>
    </div>
    </>
    
  )
}
