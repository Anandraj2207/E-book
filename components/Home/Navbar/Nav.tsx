"use client"
import Logo from '@/components/Helper/Logo'
import ThemeToggle from '@/components/Helper/ThemeToggle'
import { navlinks } from '@/constants/constants'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FiDownload } from 'react-icons/fi'
import { HiBars3BottomRight } from 'react-icons/hi2'

type Props = {
    openNav: ()=> void;
}

const Nav = ({openNav}:Props) => {
    const [navBg,setNavBg] = useState(false)
    useEffect (()=>{
        const handler = ()=>{
            if(window.scrollY >= 90) setNavBg(true)
            if(window.scrollY < 90) setNavBg(false)  
        }
         
        window.addEventListener("scroll",handler)
        return()=>window.removeEventListener("scroll",handler)

    }, [])
  return (
    <div className={`transition-all ${navBg ? 'bg-white text-black shadow-md' : 'fixed'} duration-200 h-[12vh] z-[100] fixed w-full`}>
      <div className='flex items-center h-full justify-between w-[90%] mx-auto'>
        <Logo />
        <div className='hidden lg:flex items-center space-x-10'>
            {navlinks.map((link)=>{
                return <Link href={link.url} key={link.id} className=' hover:text-orange-500 font-semibold transition-all duration-200 dark:hover:text-orange-500'>
                    <p>{link.label}</p>
                </Link>
            })}
        </div>
        <div className='flex items-center space-x-4'>
            <a href="#_" className=" rounded px-5 py-2.5 overflow-hidden group bg-orange-500 relative hover:bg-gradient-to-r hover:from-orange-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative z-20 flex items-center text-sm"><FiDownload className='mr-3 w-5 h-5'/> Download</span>
            </a>
           <ThemeToggle />
           <HiBars3BottomRight onClick={openNav} className='w-8 cursor-pointer text-orange-500 lg:hidden'/>
        </div>
      </div>
    </div>
  )
}

export default Nav
