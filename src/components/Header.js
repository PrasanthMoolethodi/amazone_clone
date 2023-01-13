import React from 'react'
import Image from 'next/image'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {FiMenu} from 'react-icons/fi'

const Header = () => {
  return (
      <header className="">
          <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
              <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
                  <Image
                      src="https://links.papareact.com/f90"
                      height={40}
                      width={150}
                      objectFit="contain"
                      className="cursor-pointer"
                  />
              </div>
              <div className='hidden sm:flex flex-auto items-center bg-white rounded-md overflow-hidden'>
                <input className='py-2 px-4 h-full flex-auto rounded-sm focus:outline-none'/>
                <button className='w-8 h-10 flex justify-center items-center bg-yellow-400 hover:bg-yellow-500'>
                    <BiSearch/>
                    </button>
                
              </div>
              <div className='flex justify-between mr-4 space-x-6 text-xs items-center text-white ml-6'>
                <div className="link">
                    <p>Hello Sunny Sanga</p>
                    <p><b>Accounts &amp; List</b></p>
                </div>
                <div className="link">
                    <p>Returns</p>
                    <p><b>& Orders</b></p>
                </div>
                <div className="hidden sm:block link relative">
                    <span className='absolute p-1 -top-1 -right-3 text-black w-5 h-5 text-center leading-3 bg-yellow-400 rounded-full'>0</span>
                    <AiOutlineShoppingCart size= {30}/>
                    <p>Basket</p>
                </div>
              </div>
          </div>
          {/* bottom */}
          <div className='flex p-4 items-center bg-amazon_blue_Light text-white text-xs'>
            <div className='flex space-x-3 text-sm'>
                <p className='link flex items-center'>
                   <FiMenu size={20} className="mr-2"/>
                   All 
                </p>
                <p className='link'>Prime Video</p>
                <p className='link'>Amazone Business</p>
                <p className='link'>Today's Deal</p>
                <p className='link hidden sm:inline-flex'>Eletronics</p>
                <p className='link hidden sm:inline-flex'>Food & Grocery</p>
                <p className='link hidden sm:inline-flex'>Prime</p>
                <p className='link hidden sm:inline-flex'>Buy Again</p>
                <p className='link hidden sm:inline-flex'>Shopper Toolkit</p>
                <p className='link hidden sm:inline-flex'>Health & Personal Care</p>
            </div>
          </div>
           {/* bottom */}
      </header>
  );
}

export default Header