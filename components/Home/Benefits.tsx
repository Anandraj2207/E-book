import React from 'react'
import { BiBook, BiLink, BiVideo } from 'react-icons/bi'
import { MdEco } from 'react-icons/md'
import BoxText from '../Helper/BoxText'

const benefits = [
    {
        title: "Cost-Effective Option",
        description:
        "Ebooks typically come at a lower price point compared to printed books, making them accessible to a broad audience.",
        icon: <BiVideo className="w-6 h-6 text-white" />,
    },
    {
        title: "Eco-Conscious Choice",
        description:
        "Ebooks are environmentally friendly as they are digital, eliminating the need for paper, ink, and other physical resources.",
        icon: <MdEco className="w-6 h-6 text-white" />
    },
    {
        title: "Enhanced Visibility",
        description:
        "Ebooks can be effortlessly searched and shared across the internet, enabling readers to discover new books easily.",
        icon: <BiBook className="w-6 h-6 text-white" />,
    },
    {
        title: "Enhanced Convenience",
        description:
        "Ebooks have the capacity to incorporate interactive features like videos, audio, and more, elevating the overall reading experience.",
        icon: <BiLink className="w-6 h-6 text-white" />,
    }, 
]

const Benefits = () => {
  return (
    <div className='pt-16 pb-16'>
        <div className='py-16 px-4 w-[98%] md:w-[80%] mx-auto text-center'>
            <div className='mx-auto w-fit mb-4'>
                <BoxText text='Benefits' />
            </div>
            <h2 className='text-xl md:text-3xl font-bold'>Discover your Benefits</h2>
            <p className='mt-2 max-w-xl mx-auto text-sm md:text-base'>
                 Plus, enjoy the convenience of offline access to our ebooks, allowing
                 you to read at your convenience, anytime, and anywhere.
            </p>
            
    
            <div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 items-start justify-center'>
                <div className='flex flex-col gap-6'>
                    {benefits.slice(0, 2).map((benefit, index) => (
                        <div key={index} data-aos='fade-left' data-aos-anchor-placement='top-center' data-aos-delay={300 + index * 100} className='p-6 shadow-md rounded-xl text-left border border-gray-200 dark:border-none'>
                            <div>
                                <div className='w-12 h-12 mb-4 rounded-full bg-orange-500 flex items-center justify-center'>
                                    <span className='text-3xl'>{benefit.icon}</span>
                                </div>
                                <div>
                                    <h3 className='text-base md:text-lg font-semibold mb-3'>{benefit.title}</h3>
                                    <p className='text-sm'>{benefit.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

        
                <div data-aos='zoom-in' data-aos-anchor-placement='top-center' data-aos-delay='300' className='flex justify-center items-center'>
                    <img src="/images/b.jpg" alt='image' className='rounded-xl shadow-md w-full max-w-[300px] md:max-w-[330px]' />
                </div>

                <div className='flex flex-col gap-6'>
                    {benefits.slice(2).map((benefit, index) => (
                        <div key={index} data-aos='fade-right' data-aos-anchor-placement='top-center' data-aos-delay={index * 100} className='p-6 shadow-md rounded-xl text-left border border-gray-200 dark:border-none'>
                            <div>
                                <div className='w-12 h-12 mb-4 rounded-full bg-orange-500 flex items-center justify-center'>
                                    <span className='text-3xl'>{benefit.icon}</span>
                                </div>
                                <div>
                                    <h3 className='text-base md:text-lg font-semibold mb-3'>{benefit.title}</h3>
                                    <p className='text-sm'>{benefit.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='mt-8'>
            <button className='bg-orange-500 hover:bg-orange-700 text-white px-6 py-2 md:px-8 md:py-3 rounded text-lg font-medium transition duration-300'>Read More &rarr;</button>
        </div>
        </div>
       
    </div>
  )
}

export default Benefits
