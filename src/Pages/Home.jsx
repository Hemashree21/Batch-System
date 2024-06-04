import React from 'react'
import { MdArrowRightAlt  } from 'react-icons/md';
import { IoPlayCircleOutline } from "react-icons/io5";
import homebg from '../Assets/bg-mob.png';
import mob1 from '../Assets/mob-2.png';
import mob2 from '../Assets/mob-3.png';
import achieve from '../Assets/achievement.png';

const Home = () => {
  return (
    <div className='py-6 px-10 lg:px-20 w-full flex flex-col lg:flex-row items-center justify-between mt-10'>
        <div className='lg:w-1/2 w-full lg:pt-14'>
            <h1 className='lg:text-7xl text-5xl'>Make The Best Financial Decisions</h1>
            <p className='text-xl text-gray-500 my-4'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
            <div className='flex flex-col sm:flex-row items-start sm:items-center gap-10'>
                <button className='text-white px-6 py-4 flex justify-center items-center gap-2 bg-black rounded-md hover:bg-slate-800 hover:duration-300'>Get Started <span className='hover:transform hover:translate-x-2 transition-transform duration-300'><MdArrowRightAlt size={20}/></span></button>
                <div className='flex items-center gap-3 cursor-pointer'><IoPlayCircleOutline size={50} className='hover:scale-125 hover:duration-300'/><span className='text-xl cursor-pointer'>Watch Video</span></div>
            </div>
            <div className='w-full flex justify-center mb-20 lg:mb-0'>
                <img src={achieve} alt="" className=''/>
            </div>
        </div>
        <div className="lg:w-2/5 w-full h-100 relative flex">
    <img src={homebg} alt="" className="absolute w-full h-100 z-10"/>
    <img src={mob1} alt="" className="absolute w-full h-100 z-20 lg:bottom-5 lg:left-0 left-3"/>
    <img src={mob2} alt="" className="absolute w-full h-100 z-30 lg:right-24 lg:bottom-24 md:bottom-16 md:right-20 right-8 bottom-10"/>
</div>

    </div>
  )
}

export default Home