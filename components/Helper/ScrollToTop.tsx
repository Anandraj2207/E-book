"use client"

import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const ScrollToTop = () => {

    const [isVisible, setIsVisible] = useState(false)

    useEffect(()=>{
      const ToggleVisibility : ()=>void = ()=>{
        if (window.scrollY > 300) setIsVisible (true)
            else setIsVisible(false)
         }

         window.addEventListener("scroll",ToggleVisibility)

         return()=>window.removeEventListener("scroll",ToggleVisibility)
    },[])

    const scrollToTop = () =>{
        window.scrollTo({
            top:0,
            behavior: "smooth"
        })
    }


  return (
    <div className='fixed bottom-4 animate-pulse right-4'>
        {isVisible && <button className='bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none ' onClick={scrollToTop}>
            <FaArrowUp />
            </button>}
      
    </div>
  )
}

export default ScrollToTop
