import React from 'react'
import { FaStar } from 'react-icons/fa'

type Props = {
    image:string,
    name:string,
    role:string,
}

const ReviewCart = ({image, name, role}:Props) => {
  return (
    <div>
      <div className='flex items-center space-x-6'>
        <img src={image} alt='User' width={80} height={80} className='rounded-full'/>
        <div>
            <h1 className='text-lg font-bold'>{name}</h1>
            <p className='text-gray-600'>{role}</p>
        </div>
      </div>
      <p className='mt-4 text-sm w-[80%] '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit blanditiis sit delectus, obcaecati tempora vero error quas doloremque voluptatibus adipisci architecto, nihil, minima veritatis nobis numquam ad dignissimos aut officia.</p>
      <div className='flex items-center mt-5'>
        <FaStar className='text-yellow-500 w-5 h-5'/>
        <FaStar className='text-yellow-500 w-5 h-5'/>
        <FaStar className='text-yellow-500 w-5 h-5'/>
        <FaStar className='text-yellow-500 w-5 h-5'/>
        <FaStar className='text-yellow-500 w-5 h-5'/>
      </div>
    </div>
  )
}

export default ReviewCart
