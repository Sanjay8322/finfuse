import React from 'react'
import { useEffect } from 'react'
import { MapPin,Mail } from 'lucide-react'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Footer = () => {
    useEffect(()=>{
        Aos.init({duration:1200})
      })
  return (
    <div className='bg-[#0c4b54] pt-10 lg:pt-20 pb-10 lg:pb-20'>
        <div className='flex flex-col justify-center items-center space-y-10 p-5'>
            <h1 className='text-4xl font-semibold tracking-wide'>Let's Join FinFuse, We Protect Your Money.</h1>
            <div className='flex flex-wrap gap-4 justify-center items-center'>
                <div className='flex space-x-5 border border-white py-3 px-5 rounded-3xl w-72' data-aos="fade-up">
                    <MapPin />
                    <p>No 255, Main Street, India.</p>
                </div>

                <div className='flex space-x-5 border border-white py-3 px-5 rounded-3xl w-72' data-aos="fade-up">
                    <Mail />
                    <p>info.finfuse@mail.com</p>
                </div>
            </div>
        </div>

        <div className='flex flex-col items-center justify-center mt-10'>
            <hr className='w-4/5 h-px bg-white border-0 my-1' />
            <div className='flex flex-wrap gap-4 justify-center items-center mt-5'>
                <h2>Privacy Policy</h2>
                <h2>Terms and Conditions</h2>
            </div>
        </div>
        <div>

        </div>
    </div>
  )
}

export default Footer