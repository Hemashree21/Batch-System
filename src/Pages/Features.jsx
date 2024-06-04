import React from 'react';
import feat from '../Assets/bg-features.png';
import star from '../Assets/star.png';
import hex from '../Assets/hex.png';
import cube from '../Assets/cube.png';

const Features = () => {

    const featuring = [
        {
            id: 1,
            icon: star,
            title: "budgeting intervals",
            desc: "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
        },
        {
            id: 2,
            icon: hex,
            title: "budgeting intervals",
            desc: "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
        },
        {
            id: 3,
            icon: cube,
            title: "budgeting intervals",
            desc: "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
        },
    ]
  return (
    <div id='features' className='py-6 px-10 lg:px-20 w-full flex flex-col-reverse lg:flex-row items-center justify-between'>
        <div className='lg:w-1/2 w-ful'>
            <img src={feat} alt="" />
        </div>
        <div className='lg:w-1/2 w-full'>
            <h3 className='text-red-500 uppercase tracking-widest text-xl mb-2'>features</h3>
            <h1 className='capitalize lg:text-5xl text-3xl font-bold mb-10'>uifry premium</h1>
            <div>
                {featuring.map(({id, icon, title, desc}) => (
                    <div key={id}>
                    <div className='flex items-center gap-2 mt-6 mb-2'>
                        <img src={icon} alt="" />
                        <h3 className='font-bold text-lg capitalize'>{title}</h3>
                    </div>
                    <p className='text-gray-500 text-lg mb-2'>{desc}</p>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Features