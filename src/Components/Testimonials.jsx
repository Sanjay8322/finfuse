import React from 'react'
import { useEffect } from 'react'
import user1 from '../assets/user-1.png'
import user2 from '../assets/user-2.png'
import user3 from '../assets/user-3.png'
import user4 from '../assets/user-4.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Testimonials = () => {
    useEffect(()=>{
        Aos.init({duration:1200})
      })
  return (
    <div className='mt-10 lg:mt-20'>
        <div className='flex-wrap text-black flex justify-center gap-5 items-center p-5 lg:p-20'>
            <h1 className='text-3xl lg:text-5xl max-w-lg font-semibold'>Hear!
                {' '}
                <span className='text-[#0c4b54]'>Our Customers</span>{' '}
                Have to Say
            </h1>
            <div>
                <p className='max-w-sm text-neutral-500'>
                Echoes of Satisfication : Delving Into the Stories of FinFuse's Satisfied Customers, Each Testimonial a Testament.
                </p>
                <button className='bg-[#0c4b54] py-3 px-5 text-white w-fit rounded-3xl mt-4'>See more Reviews</button>
            </div>  
        </div>

        <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 place-items-center gap-3 p-4'>
            <div className='flex flex-col space-y-3 max-w-sm bg-[#eef2f3] p-4 justify-center rounded-xl h-fit 'data-aos="fade-up">
                <img src={user1} alt="" className='w-20 rounded-full'/>
                <h2 className='text-black'>Sarah Parker</h2>
                <p className='text-neutral-400'>FinFuse transformed the way I handle my Finance. Their intuitive budgeting tools helped me save more.</p>
            </div>

            <div>
                <div className='flex flex-col space-y-3 max-w-sm bg-[#eef2f3] p-4 justify-center rounded-xl' data-aos="fade-up">
                    <img src={user2} alt="" className='w-20 rounded-full'/>
                    <h2 className='text-black'>Micheal Jackson</h2>
                    <p className='text-neutral-400'>FinFuse transformed the way I handle my Finance. Their intuitive budgeting tools helped me save more.</p>
                </div>

                <div className='flex flex-col space-y-3 max-w-sm bg-[#eef2f3] p-4 justify-center rounded-xl mt-4' data-aos="fade-up">
                    <img src={user3} alt="" className='w-20 rounded-full'/>
                    <h2 className='text-black'>Emily Chen</h2>
                    <p className='text-neutral-400'>FinFuse transformed the way I handle my Finance. Their intuitive budgeting tools helped me save more.</p>
                </div>
            </div>
            <div className='flex flex-col space-y-3 max-w-sm bg-[#eef2f3] p-4 justify-center rounded-xl h-fit' data-aos="fade-up">
                <img src={user4} alt="" className='w-20 rounded-full'/>
                <h2 className='text-black'>Daivd Thompson</h2>
                <p className='text-neutral-400'>FinFuse transformed the way I handle my Finance. Their intuitive budgeting tools helped me save more.</p>
            </div>
        </div>

    </div>
  )
}

export default Testimonials