import React from 'react'
import Button from './Button'

const cityRoute = {}

export default function CityCard({ name , img, onClick }) {
  return (
    <div className='flex flex-col items-center w-3/4 md:w-1/4 lg:w-1/5 h-80 m-3 bg-zinc-50 rounded-2xl shadow-md'>
        <div className='w-full h-48 overflow-hidden rounded-t-2xl'>
          <img className='w-full h-full object-cover' src={img} alt={name} />
        </div>
        <h1 className='font-bold p-2'>{name}</h1>
        <div className='pt-3'>
          <Button onClick={onClick} text={"go to this city!"}></Button>
        </div>
    </div>
  )
}