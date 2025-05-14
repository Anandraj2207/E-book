import React from 'react'
import BoxText from '../Helper/BoxText'
import { BiCheck } from 'react-icons/bi'

const About = () => {
  return (
    <div className='pt-16 pb-16'>
        <div className='w-[90%] md:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-5 gap-14 items-center'>
            <div data-aos='zoom-in' data-aos-anchor-placement='top-center'  className='xl:col-span-2'>
                <img src='/images/s.jpg' alt='image' width={500} height={500} className='rounded-xl'></img>
            </div>
            <div className='xl:col-span-3'>
                <BoxText text='About Us' />
                <h1 className='text-xl sm:text-2xl md:text-3xl xl:text-4xl mt-5 mb-6 font-semibold'>About This Best Selling Book</h1>
                <p className='text-sm md:text-base font-semibold'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat doloribus itaque consequatur minima unde ullam ab, explicabo repellendus, inventore magnam ipsam est soluta sunt reprehenderit eligendi at distinctio, pariatur voluptas!

                </p>
                <div className='mt-8 space-y-5'>
                    <div className='flex items-center space-x-2'>
                        <BiCheck className='text-orange-500 w-7 h-7' />
                        <p className='font-semibold text-sm md:text-base'>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <BiCheck className='text-orange-500 w-7 h-7' />
                        <p className='font-semibold text-sm md:text-base'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,</p>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <BiCheck className='text-orange-500 w-7 h-7' />
                        <p className='font-semibold text-sm md:text-base'>Fugiat doloribus itaque consequatur minima unde ullam ab,</p>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <BiCheck className='text-orange-500 w-7 h-7' />
                        <p className='font-semibold text-sm md:text-base'>inventore magnam ipsam est soluta sunt reprehenderit eligendi at distinctio,</p>
                    </div>
                    <div className='mt-14'>
                    <a href="#_" className="rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                        <span className="relative">Read More &rarr;</span>
                    </a>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default About
