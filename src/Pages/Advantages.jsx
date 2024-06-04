import React from 'react';
import pro from "../Assets/bg-advantages.png";
import alert from '../Assets/alert.png';
import feat from '../Assets/bg-features.png';
import star from '../Assets/star-bg.png';
import visa from '../Assets/visa.png';

const Advantages = () => {
    const pros = [
        {
            id: 1,
            icon: alert,
            title: "clever notifications",
            desc: "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.",
        },
    ]

    const pros1 = [
        {
            id: 1,
            icon: star,
            title: "fully customizable",
            desc: "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.",
        },
    ]
  return (
    <>
    <div id="advantages" className='pt-6 px-10 lg:px-20 w-full flex flex-col lg:flex-row items-center justify-between'>
        <div className='lg:w-1/2 w-full'>
            <h3 className='text-red-500 uppercase tracking-widest text-xl mb-2'>advantages</h3>
            <h1 className='capitalize lg:text-5xl text-3xl font-bold mb-10'>why choose uifry?</h1>
            <div>
                {pros.map(({id, icon, title, desc}) => (
                    <div key={id}>
                    <div className='flex items-center gap-2 my-6'>
                        <img src={icon} alt="" />
                        <h3 className='font-bold text-lg capitalize'>{title}</h3>
                    </div>
                    <p className='text-gray-500 text-lg mb-2'>{desc}</p>
                </div>
                ))}
            </div>
        </div>
        <div className='lg:w-1/2 w-full'>
            <img src={pro} alt="" />
        </div>
    </div>

    <div id='features' className='pb-6 px-10 lg:px-20 w-full flex flex-col-reverse lg:flex-row items-center justify-between'>
        <div className='lg:w-1/2 w-full flex relative'>
            <img src={feat} alt=""/>
            <img src={visa} alt="" className='z-20 absolute md:top-48 md:left-60 top-24 left-28 h-1/5 md:h-auto'/>
        </div>
        <div className='lg:w-1/2 w-full'>
            <div>
                {pros1.map(({id, icon, title, desc}) => (
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
    </>
  )
}

export default Advantages