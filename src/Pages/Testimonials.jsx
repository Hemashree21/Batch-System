import React, { useState } from 'react';
import review from '../Assets/review.png';
import p1 from '../Assets/profile1.png';
import p2 from '../Assets/profile2.png';
import p3 from '../Assets/profile3.png';
import p4 from '../Assets/profile4.png';
import p5 from '../Assets/profile5.png';

const Testimonials = () => {

  const [selectedId, setSelectedId] = useState(1);

  const feedback = [
    {
      id: 1,
      title: "the best financial accounting app ever!",
      desc: "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”",
      profile: p1,
      name: "Nick Jones",
    },
    {
      id: 2,
      title: "tdehf dehwvde df r dbewhbfh!",
      desc: "“Arcu at dictum sapien, mollis. Vulp rhjw frb rehbhjr fr grhjbghrvr hrgj stique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”",
      profile: p2,
      name: "David dhsb",
    },
    {
      id: 3,
      title: "the best efew ebdgh efwgvgh feerf!",
      desc: "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultstique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”",
      profile: p3,
      name: "ebhf ehbf",
    },
    {
      id: 4,
      title: "jwsdnw debfhebj dbhbhd hdbhwe ef!",
      desc: "“Arcu at dictum sn mn rmrf fjrekgnjkrg rjnkergt mauris etiam odio. Duis tristique lacus, et. jrfnjre rhgbhrgb ef bhbgfhr frbhrbjhr eget ac dolor neque lorem sapien, suspendisse aliquam.”",
      profile: p4,
      name: "wdnqj daedw",
    },
    {
      id: 5,
      title: "tefref bfhweb efbhw dhwf heqfbhe efwnjnk!",
      desc: "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, und cjwe fjebhjwrbfhjr frhfbhjrbfhjrf ern fhbvjfn vren hjr fnr fhrenfnmr fnjrnfnmvrjn fvnre fhj frj fse aliquam.”",
      profile: p5,
      name: "Nicky thomas",
    },
  ]
  return (
    <div id="testimonials" className='py-6'>
        <h3 className='text-center uppercase w-full tracking-widest text-red-500 text-xl'>Testimonial</h3>
        <h1 className='lg:w-1/2 w-full text-center mt-4 block m-auto text-3xl lg:text-7xl font-extrabold capitalize'>what our users say about us?</h1>
        <div className='py-6 px-10 lg:px-20 w-full flex flex-col-reverse lg:flex-row items-center justify-between'>
          <div className='lg:w-1/2 w-full'>
            <img src={review} alt="" />
          </div>
          <div className='lg:w-1/2 lg:mt-0 mt-10 w-full'>
          {feedback.filter(({ id }) => id === selectedId).map(({ id, title, desc, name }) => (
            <div key={id}>
              <h1 className='font-bold lg:text-5xl text-xl mb-8 capitalize'>{title}</h1>
              <p className='text-gray-500 lg:text-xl text-md'>{desc}</p>
              <div className='flex lg:h-12 lg:w-12 my-8 h-8 w-8'>
                {feedback.map(({ id, profile }) => (
                  <img 
                    key={id}
                    src={profile}
                    alt=""
                    className={`mr-6 cursor-pointer transition-transform transform ${selectedId === id ? 'scale-150' : 'scale-100 opacity-50'}`}
                    onClick={() => setSelectedId(id)}
                  />
                ))}
              </div>
              <p className='lg:text-2xl text-xl font-semibold capitalize'>{name}</p>
            </div>
          ))}
        </div>
        </div>
    </div>
  )
}

export default Testimonials