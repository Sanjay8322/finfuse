
import person from '../assets/person.png'
const Hero = () => {
  return (
    <div className='h-screen bg-[#0c4b54] text-center '>
        <div className=''>
            <div className='flex flex-col items-center justify-center p-10'>
                <p className='p-2 border border-white w-fit rounded-3xl'>#1 Top Fintech Banking Excellence.</p>
                <h1 className='text-4xl lg:text-8xl md:text-5xl font-bold mt-5 lg:mt-20'>
                    Your Secure And 
                    {' '}
                    <span className='text-[#E8f549]'>Trusted</span>
                    {' '}
                     Financial Partner.
                </h1>
                <p className='text-xl font-thin tracking-wide  mt-5 lg:mt-10'>Explore FinFuse today. Your finances: <br/>Discover FinFuse's Fintech Revolutions, Transforming Banking Experiences One Click at a Time.</p>
                <div className='flex flex-wrap justify-center items-center mt-5 lg:mt-7'>
                    <button className='py-3 px-5 bg-[#E8f549] text-[#0c4b54] font-bold tracking-wide rounded-3xl'>Get Started</button>
                    <button className='py-3 px-5 border rounded-3xl tracking-wide m-3'>Watch Our Features</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero