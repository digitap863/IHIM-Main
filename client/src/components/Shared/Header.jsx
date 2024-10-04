import React from 'react'
import Navbar from '../Navbar'
import ellipse1 from '../../assets/Images/Shared/Ellipse1.png'
import '../CustomCss/Animation.css'

// eslint-disable-next-line react/prop-types
function Header({ title, subtitle, img,pageTitle }) {
  return (
    <div className='h-screen bg-gradient-to-br from-[#258425] to-[#85A231] relative overflow-hidden font-mont flex flex-col lg:flex-row items-center lg:px-20'>
      <Navbar />
      <img src={ellipse1} alt="ellipse1" className='absolute -left-[20%] -top-[60%] z-0 opacity-90 w-[40%]' />
      <img src={ellipse1} alt="ellipse1" className='absolute -right-[50%] lg:-right-[21%] bottom-[20%] lg:bottom-[9%] opacity-40 w-[100%] lg:w-[37.5%] z-10' />
      <img src={ellipse1} alt="ellipse1" className='absolute  z-0 opacity-[40%] w-[20%] lg:w-[10%] bubble1' />
      <img src={ellipse1} alt="ellipse1" className='absolute -left-[5%] bottom-[10%] opacity-50 z-0 w-[30%] lg:w-[18%]' />
      <img src={ellipse1} alt="ellipse1" className='absolute opacity-30 z-0 w-[25%] bubble3' />
      <img src={ellipse1} alt="ellipse1" className='absolute  opacity-40 z-0 w-[10%] bubble2' />
      <div className='xl:ml-36 ml-10 z-10 relative flex flex-col mt-32 lg:mt-0 lg:justify-center md:gap-3 lg:gap-0 h-full w-full'>
        <h5 className='text-green-900 font-semibold text-xl'>{pageTitle}</h5>
        <h1 className='text-white text-4xl md:text-6xl font-bold lg:font-extrabold w-[90%]'>{title}</h1>
        <p className='text-white mt-5  text-lg md:w-[60%] lg:w-[65%] leading-tight'>{subtitle}</p>
        {/* <button className='flex items-center gap-2 mt-10 w-44 bg-[#EAB600] text-white py-3 hover:bg-[#e4ff4d] hover:text-gray-500 transition ease-in-out duration-300 px-5 rounded-xl  font-semibold'>Know More <ChevronDoubleRightIcon className='w-5' /></button> */}
      </div>
      <div className=' lg:w-[37%] z-10 overflow-hidden h-full'>
        <img src={img} alt="" className=' object-contain absolute bottom-32 lg:bottom-20 right-5 lg:right-20 w-[90%] lg:w-[40%] z-10' />
      </div>
    </div>
  )
}

export default Header   