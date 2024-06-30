import { useEffect } from 'react'
import picture from '../assets/picture1.jpg'
import picture2 from '../assets/picture2.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Features = () => {
    useEffect(()=>{
        Aos.init({duration:1200})
    })
  return (
    <div className='flex flex-col items-center p-5'>
        
        <h1 className='text-black text-3xl font-bold tracking-wide w-fit text-center mt-10' data-aos="fade-up">Empowering Your Financial<br/>Future</h1>
        <p className='text-black text-l tracking-wide max-w-sm mt-5 text-center' data-aos="fade-up">Your Trusted Partner in Financial Solutions - Simplify your finances, Maximize your potential and Secure your Future Empower. </p>
       
        <div className="flex flex-wrap justify-center items-center gap-3 mt-10" data-aos="fade-up">
            <div className='max-w-lg  h-auto'>
                <img src={picture} className='object-fit rounded-xl w-full h-full' alt="Image description" />
            </div>
            <div className="bg-[#eef2f3] text-black flex flex-col text-black p-8 space-y-5 justify-center max-w-lg h-full rounded-2xl">
                <p className='uppercase font-thin text-l'>fintech</p>
                <h2 className='text-2xl font-bold'>You With Fintect Solutions</h2>
                <p>Discover Tailored Fintech Solutions for Every Aspect of Your Financial Journey <br/>- From Budgeting and Investing to Retirement planning & Beyond.</p>
                <button className='bg-[#0c4b54] py-3 px-5 text-white w-fit rounded-2xl'>Open an Account</button>
            </div>
        </div>


        <div className="flex flex-wrap justify-center items-center gap-3 mt-10 " data-aos="fade-up">
            <div className="bg-[#eef2f3] text-black flex flex-col text-black p-8 space-y-5 justify-center max-w-lg  rounded-2xl h-full">
                <p className='uppercase font-thin text-l'>empowering</p>
                <h2 className='text-2xl font-bold'>Empowering your Financial Journey</h2>
                <p>Your Comprehensive Fintech Partner, offering Innovation Tools and Expert Guidance to Optimize Your Financial Strategy<br/> Achieve your goals.</p>
                <button className='bg-[#0c4b54] py-3 px-5 text-white w-fit rounded-2xl'>Check Account</button>
            </div>
            <div className='max-w-lg'>
                <img src={picture2} className='object-fit rounded-xl w-full h-full' alt="Image description" />
            </div>
        </div>
      
      
     
    </div>
  )
}

export default Features