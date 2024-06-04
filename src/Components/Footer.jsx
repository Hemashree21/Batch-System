import React from 'react';
import logo from '../Assets/logo.png';
import help from '../Assets/help.png';
import call from '../Assets/call.png';
import logotext from '../Assets/logo-text.png';

const Footer = () => {
  return (
    <>
    <div className='px-10 lg:px-20 w-full flex flex-col gap-5 lg:flex-row lg:gap-0 items-top mt-32'>
      <div className='lg:w-1/5 w-full'>
      <span className='flex items-center'><img src={logo} alt="" className='h-10 w-10'/><img src={logotext} alt="" className='uifry h-10 mt-2'/></span>
        <span className='flex items-center gap-2 my-2'><img src={help} alt="" />help@frybix.com</span>
        <span className='flex items-center gap-2 my-2'><img src={call} alt="" />+1234 456 678 89</span>
      </div>
      <div className='lg:w-1/6 w-full'>
        <h2 className='text-4xl mb-3'>Links</h2>
        <ul>
          <a href="/"><li className='my-3 capitalize cursor-pointer hover:font-semibold'>Home</li></a>
          <li className='my-3 capitalize cursor-pointer hover:font-semibold'>About Us</li>
          <li className='my-3 capitalize cursor-pointer hover:font-semibold'>Bookings</li>
          <li className='my-3 capitalize cursor-pointer hover:font-semibold'>Blog</li>
        </ul>
      </div>
      <div className='lg:w-1/6 w-full'>
      <h2 className='text-4xl mb-3'>Legal</h2>
        <ul>
          <li className='my-3 capitalize cursor-pointer hover:font-semibold'>Terms of Use</li>
          <li className='my-3 capitalize cursor-pointer hover:font-semibold'>Privacy Policy</li>
          <li className='my-3 capitalize cursor-pointer hover:font-semibold'>Cookie Policy</li>
        </ul>
      </div>
      <div className='lg:w-1/6 w-full'>
      <h2 className='text-4xl mb-3'>Product</h2>
        <ul>
          <li className='my-3 capitalize cursor-pointer hover:font-semibold'>Take Tour</li>
          <li className='my-3 capitalize cursor-pointer hover:font-semibold'>Live Chat</li>
          <li className='my-3 capitalize cursor-pointer hover:font-semibold'>Reviews</li>
        </ul>
      </div>
      <div className='lg:w-1/5 w-full'>
      <h2 className='text-4xl mb-3'>Newsletter</h2>
      <ul>
          <li className='my-3 capitalize cursor-pointer hover:font-semibold'>Stay Up to Date</li>
      </ul>
      <span className='flex'>
        <input type="text" placeholder='Your email' className='shadow-md px-4 py-3'/>
        <button className='px-6 py-3 rounded-md text-white bg-black subscribe'>Subscribe</button>
      </span>
      </div>
    </div>
    <div className='py-20'>
      <div className='fade-line'/>
      <p className='text-center mt-8'>Copyright 2022 uifry.com all rights reserved</p>
    </div>
    </>
  )
}

export default Footer