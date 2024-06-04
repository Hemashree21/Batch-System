import React, { useContext, useState } from 'react';
import logo from '../Assets/logo.png';
import logotext from '../Assets/logo-text.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import {Switch} from "antd";
import { ThemeContext } from '../App';
import '../App.css';

const Header = () => {

    const [nav, setNav] = useState(false);
    const [activeLink, setActiveLink] = useState(1);
    const { theme, toggleTheme } = useContext(ThemeContext); 
    const [themes, setThemes] = useState("light");

    const handleThemeChange = () => {
      toggleTheme(); 
      setThemes((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    const links = [
        {
        id: 1,
        link: 'Home',
        href: "#",
        },
        {
        id: 2,
        link: 'About Us',
        href: "#advantages",
        },
        {
        id: 3,
        link: 'Testimonials',
        href: "#testimonials",
        },
        {
        id: 4,
        link: 'Features',
        href: "#features"
        },
    ]
  return (
    <div className='px-10 py-6 lg:px-20 w-full flex items-center justify-between relative'>
        <div className='flex w-1/2 items-center justify-between'>
           <span className='flex items-center h-full'><img src={logo} alt="" className='h-10 w-10'/><img src={logotext} alt="" className='uifry h-10 mt-2'/></span>
           <ul className='hidden lg:flex lg:w-2/3 items-center justify-between text-lg'>
            {links.map(({id, link, href}) => (
                <li key={id} className={`hover:scale-105 hover:font-semibold duration-300 cursor-pointer ${activeLink === id ? 'text-red-500 font-extrabold' : ''}`} onClick={() => setActiveLink(id)}><a href={href}>{link}</a></li>
            ))}
           </ul>
        </div>
        
        <div className='flex items-center justify-center gap-10 flex-row-reverse'>
            <div onClick={() => setNav(!nav)} className='lg:hidden cursor-pointer text-gray-500 z-50'>
                {nav ? 
                <div className='flex justify-center items-end gap-5'>
                    <Switch style={{ backgroundColor: themes === "dark" ? "gray" : "gray"}} onChange={handleThemeChange} checked={theme === "dark"} checkedChildren="Dark Mode" unCheckedChildren="Light Mode" />
                <FaTimes className='text-3xl' />
                </div>
                 : <FaBars className='text-3xl' />}
            </div>
            {nav && (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white'>
                    {links.map(({ id, link, href }) => (
                        <li key={id} className='cursor-pointer py-8 text-4xl'><a href={href}>{link}</a></li>
                    ))}
                </ul>
            )}
            <div className='hidden md:block'><Switch style={{ backgroundColor: themes === "dark" ? "#000000" : ""}} onChange={handleThemeChange} checked={theme === "dark"} checkedChildren="Dark Mode" unCheckedChildren="Light Mode" /></div>
            <a href="#download"><button className='text-white bg-black lg:py-3 lg:px-10 md:py-2 md:px-6 py-2 px-4 rounded-md hover:bg-slate-800 hover:duration-300'>Download</button></a>
        </div>
    </div>
  )
}

export default Header