import React from 'react'
import jumping from '../../assets/Images/Shared/girl-jumping.png'
import leaf from '../../assets/Images/Shared/leaf.png'
import bubble from '../../assets/Images/Shared/Ellipse1.png'
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid'
import { useLocation, useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function AboutUs({ title, content }) {
  const location = useLocation()
  const path = location.pathname
  const navigate = useNavigate()
  return (
    <div className='flex gap-x-32 gap-y-12 font-mont  lg:pl-40 py-24 justify-center flex-col lg:flex-row relative overflow-hidden'>
      <img src={leaf} alt="" className='absolute w-[12%] -left-[0%] -top-[0%]' />
      <img src={bubble} alt="" className='absolute w-[20%] opacity-30 -top-[10%] -right-[3%]' />
      <img src={bubble} alt="" className='absolute w-[20%] opacity-[15%] float top-[40%] right-[40%]' />
      <img src={bubble} alt="" className='absolute w-[40%] lg:w-[13%] opacity-20 bottom-[30%] -left-[5%]' />
        <div className='flex justify-center items-center relative px-10 lg:px-0'>
          <img src={jumping} alt="" className='w-[70rem] md:w-[50%] lg:w-[40rem] xl:w-[70rem]' />
        </div>
        <div className='relative px-4 lg:px-0 flex flex-col items-center self-center lg:items-start w-full'>
          <p className='font-extrabold mb-5 hidden lg:block'>{title === 'ABOUT US' ? title : ''}</p>
          <h2 className={`text-[#1A5D1A] ${title === 'ABOUT US' ? '' : 'mt-16'} text-center lg:text-left mb-5 font-bold text-3xl md:text-4xl lg:text-5xl`}>{title}</h2>
          <p className='text-gray-700 text-justify md:w-[85%] lg:w-[75%] leading-[1.8rem] ' dangerouslySetInnerHTML={{ __html: content }}></p>
          {path === '/about' ? null : <button onClick={() => {
            navigate('/about')
          }} className='flex items-center  text-sm lg:text-base gap-2 mt-10 w-44 bg-[#EAB600] text-white py-3 hover:bg-[#e4ff4d] hover:text-gray-500 transition ease-in-out duration-300 px-5 rounded-xl  font-semibold'>Know More <ChevronDoubleRightIcon className='w-5' /></button>}
        </div>
    
    </div>
  )
}

export default AboutUs