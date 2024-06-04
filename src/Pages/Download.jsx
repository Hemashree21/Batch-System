import React from 'react';
import domino from '../Assets/domino.png';
import apple from '../Assets/apple.png';

const Download = () => {
  return (
    <div id="download" className='flex items-center justify-center lg:mt-32 mt-10'>
        <div className='w-3/4 bg-black rounded-md flex'>
            <div className='w-3/4 lg:px-16 p-3 block m-auto'>
            <h1 className='capitalize text-white lg:text-5xl text-2xl font-extrabold my-4'>Ready to get started?</h1>
            <p className='text-gray-500 my-4 lg:text-xl text-lg'>Risus habitant leo egestas mauris diam eget morbi tempus vulputate.</p>
            <button className='bg-white my-4 lg:px-5 py-3 px-3 rounded-md flex items-center justify-center text-md lg:text-lg gap-2'>Download App <span><img src={apple} alt="" /></span></button>
            </div>
            <img src={domino} alt="" className='hidden lg:block flex-end'/>
        </div>
    </div>
  )
}

export default Download