import React, { useState } from 'react'
import Image from 'next/image'
import { AiFillStar } from 'react-icons/ai'
import Currency from 'react-currency-formatter'

const Product = ({id, title, price, description, category, image, hasPrime}) => {
const [rating] = useState(Math.floor(Math.random()* (3 + 1) + 2))

  return (
    <div className='p-4 bg-white mt-4 mb-5 mx-4 relative z-20'>
        <p className='text-sm text-right text-gray-400 absolute z-10 right-2 top-2 italic'>{category}</p>
        <div>
            <Image src={image} width={200} height={200} objectFit="contain" alt={title} className='m-auto'/> 
            <h4>{title}</h4>
            <div className='flex'>
                {Array(rating).fill().map((star, i) => (
                    <AiFillStar size={15} className='text-yellow-500'/>
                ))}
            </div>
            <p className='text-sm my-2 line-clamp-2'>{description}</p>
            <div className='font-semibold py-2'>
                <Currency quantity={price} currency='GBP' />
            </div>
            {hasPrime && (
                <div className='flex items-center'>
                    <img className="w-12" src='https://papareact.com/fdw' alt='Prime'/>
                    <p className='text-xs text-gray-400'>FREE next-day Delivery</p>
                </div>
            )}
            <button className='button mt-auto'>Add to Basket</button>
        </div>
    </div>
  )
}

export default Product