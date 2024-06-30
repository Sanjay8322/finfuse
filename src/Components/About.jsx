import work from '../assets/work.jpg'
import pattern from '../assets/pattern.jpg'
import { Trophy } from 'lucide-react'
import team from '../assets/team.jpg'
const About = () => {
  return (
    <div className='bg-[#eef2f3] mt-10 pb-10 lg:mt-20 lg:pb-20'>
        <div className='flex-wrap text-black flex justify-center gap-5 items-center p-5 lg:p-20'>
            <h1 className='text-3xl lg:text-5xl max-w-lg font-semibold'>How
                {' '}
                <span className='text-[#0c4b54]'>FinFuse Work To Serve </span>
                You Better
            </h1>

            <p className='max-w-sm text-neutral-500'>
            We Pave the Way for Tomorrow's Financial Frontier by
            Seamlessly Integrating Innovation, Accessibility, and Trust, Crafting Solutions That Empower Individuals Crafting Solutions That Empower Individuals
            </p>
        </div>


        <div className='flex flex-wrap justify-center items-center'>
            <div className='max-w-lg m-3  h-auto relative'>
                <img src={team} alt=""  className='rounded-2xl object-fill'/>
                {/* <div className='text-3xl absolute text-white inset-0 flex items-center justify-center'>
                <Trophy />
                </div> */}
                {/* <h2 className='text-3xl absolute text-white inset-0 flex items-center justify-center hover:hidden'><Trophy/></h2> */}
                <div className="absolute top-0 left-0 w-full h-full bg-[#0c4b54]/40 rounded-lg flex items-center justify-center flex-col text-white opacity-0 transition-opacity duration-400 cursor-pointer hover:opacity-100">
                    <h3 className="text-3xl font-bold mb-2">900+ Projects</h3>
                </div>
            </div>
            <div className='max-w-lg h-auto m-3 relative'>
                <img src={work} alt="" className='rounded-2xl object-fill'/>
                <div className="absolute top-0 left-0 w-full h-full bg-[#0c4b54]/40 rounded-lg flex items-center justify-center flex-col text-white opacity-0 transition-opacity duration-400 cursor-pointer hover:opacity-100">
                    <h3 className="text-3xl font-bold mb-2">How We Work</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About