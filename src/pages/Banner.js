import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <div className='relative '>
        <div className='absolute w-full  h-36 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-10'></div>
        <Carousel
        autoPlay
        infiniteLoop
        showStatus = {false}
        showIndicators = {true}
        showThumbs = {false}
        interval={5000}
        >
            <div>
                <img loading='lazy' src="https://m.media-amazon.com/images/I/51DWgNo1fdL._SX3000_.jpg"/>
            </div>
            <div>
                <img loading='lazy' src="https://m.media-amazon.com/images/I/71g6i7uFs4L._SX3000_.jpg"/>
            </div>
            
        </Carousel>
    </div>
  )
}

export default Banner