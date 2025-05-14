import BoxText from '@/components/Helper/BoxText'
import React from 'react'
import PricingCart from './PricingCart'

const Price = () => {
  return (
    <div className='pt-16 pb-16'>
       <div className='text-center'>
        <div className='mx-auto w-fit mb-4'>
                <BoxText text='Pricing' />
            </div>
            <h2 className='text-xl md:text-3xl font-bold'>Our Best Pricing Plan</h2>
            <p className='mt-2 max-w-xl mx-auto text-sm md:text-base'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit inventore quia, fugit atque .
            </p>
            
        </div>
        <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-16'>
           <div data-aos='fade-left' data-aos-anchor-placement='top-center' data-aos-delay='0'>
            <PricingCart type= 'Basic' price= '$29'/>
           </div>
           <div data-aos='fade-left' data-aos-anchor-placement='top-center' data-aos-delay='150'>
            <PricingCart type= 'Advanced' price= '$49'/>
           </div>
           <div data-aos='fade-left' data-aos-anchor-placement='top-center' data-aos-delay='300'>
            <PricingCart type= 'Premium' price= '$99'/>
           </div>
        </div>
    </div>
  )
}

export default Price
