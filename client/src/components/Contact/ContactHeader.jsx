import React from 'react'
import Navbar from '../Navbar'
import ellipse1 from '../../assets/Images/Shared/Ellipse1.png'
import '../CustomCss/Animation.css'
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa';
import { BiLogoInstagramAlt } from 'react-icons/bi'
import { IoIosMail } from 'react-icons/io'
import { BsTelephoneFill } from 'react-icons/bs'
import { ImLocation } from 'react-icons/im'
import { useLocation } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function ContactHeader({ title, pageTitle }) {
  const location = useLocation()
  const path = location.pathname
  return (
    <div className='h-screen bg-gradient-to-br from-[#258425] to-[#85A231] relative overflow-hidden font-mont flex items-center px-2 lg:px-20'>
      <Navbar />
      <img src={ellipse1} alt="ellipse1" className='absolute -left-[20%] -top-[60%] z-0 opacity-90 w-[40%]' />
      <img src={ellipse1} alt="ellipse1" className='absolute -right-[21%] bottom-[9%] opacity-40 w-[37.5%] z-10' />
      <img src={ellipse1} alt="ellipse1" className='absolute  z-0 opacity-[40%] w-[10%] bubble1' />
      <img src={ellipse1} alt="ellipse1" className='absolute -left-[5%] bottom-[10%] opacity-50 z-0  w-[18%]' />
      <img src={ellipse1} alt="ellipse1" className='absolute opacity-30 z-0 w-[25%] bubble3' />
      <img src={ellipse1} alt="ellipse1" className='absolute  opacity-40 z-0 w-[10%] bubble2' />
      <div className='ml-4 lg:ml-20 z-10 relative flex flex-col justify-center mt-10 lg:mt-0 h-full w-full'>
        <h5 className='text-green-900 font-semibold text-xl'>{pageTitle}</h5>
        <h1 className='text-white text-5xl lg:text-7xl font-extrabold mt-3 lg:w-[90%]'>{title}</h1>
        <div className={`flex  text-2xl gap-4 text-white ${path === '/contact' ? 'mt-5 lg:mt-10' : 'mt-32'}`}>
          <span className='rounded-full flex items-center justify-center p-1 h-[3rem] w-[3rem] border-[3px] hover:text-orange-700 hover:bg-white transition ease-in-out duration-300'>
            <FaFacebook />
          </span>
          <span className='rounded-full flex items-center justify-center p-1 h-[3rem] w-[3rem] border-[3px] hover:text-orange-700 hover:bg-white transition ease-in-out duration-300'>
            <BiLogoInstagramAlt />
          </span>
          <span className='rounded-full flex items-center justify-center p-1 h-[3rem] w-[3rem] border-[3px] hover:text-orange-700 hover:bg-white transition ease-in-out duration-300'>
            <FaLinkedinIn />
          </span>
        </div>
        {path === '/contact' ? <div className='flex flex-col px-5 lg:px-0 lg:flex-row justify-center gap-4 lg:gap-10 mt-10 lg:mt-20'>
          <div className='bg-white flex pl-3 lg:pl-6  lg:w-1/3 gap-7 items-center rounded-xl py-4 lg:py-10'>
            <div className='bg-[#1A5D1A] text-2xl md:text-3xl lg:text-4xl text-white rounded-full flex items-center justify-center w-12 h-12 md:h-16 md:w-16 lg:w-20 lg:h-20'>
              <IoIosMail />
            </div>
            <div className='flex flex-col gap-1'>
              <h3 className='font-semibold md:font-bold lg:font-semibold text-lg md:text-2xl lg:text-lg'>Mail Us</h3>
              <p>ihim@kochi.in</p>
              <p>ihim@kochi.in</p>

            </div>
          </div>
          <div className='bg-white flex pl-3 lg:pl-6  lg:w-1/3 gap-7 items-center rounded-xl py-4 lg:py-10'>
            <div className='bg-[#1A5D1A] text-2xl md:text-3xl lg:text-4xl text-white rounded-full flex items-center justify-center w-12 h-12 md:h-16 md:w-16 lg:w-20 lg:h-20'>
              <BsTelephoneFill />
            </div>
            <div className='flex flex-col gap-1'>
              <h3 className='font-semibold md:font-bold lg:font-semibold text-lg md:text-2xl lg:text-lg'>Call Us</h3>
              <p>+91 9542645832</p>
              <p>+91 9542645832</p>

            </div>
          </div>
          <div className='bg-white flex pl-3 lg:pl-6  lg:w-1/3 gap-7 items-center rounded-xl py-4 lg:py-10'>
            <div className='bg-[#1A5D1A] text-2xl md:text-3xl lg:text-4xl text-white rounded-full flex items-center justify-center w-12 h-12 md:h-16 md:w-16 lg:w-20 lg:h-20'>
              <ImLocation />
            </div>
            <div className='flex flex-col gap-1'>
              <h3 className='font-semibold md:font-bold lg:font-semibold text-lg md:text-2xl lg:text-lg'>Locate Us</h3>
              <p>737 Powlowski Light,<br />
                Vytila, Kochi, Kerala, India <br />
                680022</p>
            </div>
          </div>
        </div> : null}
        {/* <button className='flex items-center gap-2 mt-10 w-44 bg-[#EAB600] text-white py-3 hover:bg-[#e4ff4d] hover:text-gray-500 transition ease-in-out duration-300 px-5 rounded-xl  font-semibold'>Know More <ChevronDoubleRightIcon className='w-5' /></button> */}
      </div>
    </div>
  )
}

export default ContactHeader