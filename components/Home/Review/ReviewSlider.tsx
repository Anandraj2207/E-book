"use client"

import React from 'react'


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReviewCart from './ReviewCart';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1324, min: 764 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
};

const ReviewSlider = () => {
  return (
     <Carousel
          swipeable={false}
          draggable={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
        >
            <div>
                <ReviewCart name='John doe' role='Teacher' image= '/images/user1.jpg' />
            </div>
             <div>
                <ReviewCart name='Jane doe' role='Developer' image= '/images/user2.jpg' />
            </div>
             <div>
                <ReviewCart name='Javi doe' role='Devops Engineer' image= '/images/user1.jpg' />
            </div>
             <div>
                <ReviewCart name='Jack doe' role='Doctor' image= '/images/user2.jpg' />
            </div>
             <div>
                <ReviewCart name='James doe' role='Mern Developer' image= '/images/user1.jpg' />
            </div>
             <div>
                <ReviewCart name='Jasica doe' role='Next js Developer' image= '/images/user2.jpg' />
            </div>
        </Carousel>
  )
}

export default ReviewSlider
