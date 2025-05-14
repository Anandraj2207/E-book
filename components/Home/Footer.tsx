import React from 'react'
import Logo from '../Helper/Logo'
import { FaDribbble, FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='pt-16 pb-16'>
        <div className='w-[80%] mx-auto items-start grid-cols-1 sm:grid-cols-2 grid md:grid-cols-2 lg:grid-cols-4 gap-10'>
            <div>
                <Logo />
                <p className='mt-5 font-semibold text-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias esse voluptas dicta sapiente aut eligendi veritatis 

                </p>
                <div className='flex items-center space-x-4 mt-6'>
                    <FaFacebookF />
                    <FaTwitter />
                    <FaDribbble />
                    <FaYoutube />

                </div>
            </div>
            <div className='space-y-5'>
                <h1 className='text-lg font-bold'>Company</h1>
                <p className='font-medium cursor-pointer text-sm hover:text-blue-950'>About us</p>
                <p className='font-medium cursor-pointer text-sm hover:text-blue-950'>Services</p>
                <p className='font-medium cursor-pointer text-sm hover:text-blue-950'>Our Customer</p>
                <p className='font-medium cursor-pointer text-sm hover:text-blue-950'>Portfolio</p>
                <p className='font-medium cursor-pointer text-sm hover:text-blue-950'>Blog</p>
            </div>
             <div className='space-y-5'>
                <h1 className='text-lg font-bold'>Resources</h1>
                <p className='font-medium cursor-pointer text-sm hover:text-blue-950'>Blog</p>
                <p className='font-medium cursor-pointer text-sm hover:text-blue-950'>Webinar & Events</p>
                <p className='font-medium cursor-pointer text-sm hover:text-blue-950'>Podcast</p>
                <p className='font-medium cursor-pointer text-sm hover:text-blue-950'>E-book & Guides</p>
            </div>
             <div>
                <h1 className='text-lg font-bold'>Contact Us</h1>
               <div className='mt-6'>
                <h1 className='text-sm '>Our Mobile Number</h1>
                <h2 className='text-base font-bold mt-1'>+0123 4234943234</h2>
               </div>
                <div className='mt-6'>
                <h1 className='text-sm '>Our Email Address</h1>
                <h2 className='text-base font-bold mt-1'>example@gmail.com</h2>
               </div>
            </div>
        </div>
        <div className='mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-sm'>
            <p className='text-center md:text-left'>
                Copyright © 2025 Webdev. All rights reserved
            </p>
            <div className='flex items-center space-x-4 mt-4 md:mt-0'>
                <span>Social :</span>
                <span className='text-gray-500 hover:text-gray-800'><FaFacebookF/></span>
                <span className='text-gray-500 hover:text-gray-800'><FaTwitter/></span>
                <span className='text-gray-500 hover:text-gray-800'><FaDribbble/></span>

            </div>
        </div>
      
    </div>
  )
}

export default Footer
