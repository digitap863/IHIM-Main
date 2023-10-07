import React from 'react'
import jumping from '../../assets/Images/Shared/girl-jumping.png'

// eslint-disable-next-line react/prop-types
function AboutUs({title,content}) {
  return (
    <div className='flex gap-x-32 font-mont ml-40 my-24 justify-center'>
        <div className='flex justify-center items-center'> 
        <img src={jumping} alt="" className='w-[70rem]'/>
        </div>
        <div className=''>
            <p className='font-extrabold mb-5'>{title==='ABOUT US'?title:''}</p>
            <h2 className={`text-[#1A5D1A] ${title==='ABOUT US'?'':'mt-16'} mb-5 font-bold text-5xl`}>{title}</h2>
            <p className='text-gray-700 w-[75%] leading-[1.8rem]'>{content}</p>
        </div>
    </div>
  )
}

export default AboutUs