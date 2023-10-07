import React from 'react'
import AboutUs from '../components/Home/AboutUs'
import leaf from '../assets/Images/Shared/leaf.png'
import OurServices from '../components/Home/OurServices'
import VisionMission from '../components/Home/VisionMission'
import Footer from '../components/Shared/Footer'
import ContactUs from '../components/Shared/ContactUs'
import Testimonials from '../components/Home/Testimonials'
import girl from '../assets/Images/Shared/girl-swinging.png'
import Navbar from '../components/Navbar'
import ellipse1 from '../assets/Images/Shared/Ellipse1.png'
import clouds from '../assets/Images/Shared/clouds.png'
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid'

function Home() {
    return (
        <div>
            <div className='h-screen bg-gradient-to-br from-[#258425] to-[#85A231] relative overflow-hidden font-mont'>
                <Navbar />
                <img src={ellipse1} alt="ellipse1" className='absolute -left-[20%] -top-[60%] z-0 opacity-90 w-[40%]' />
                <img src={ellipse1} alt="ellipse1" className='absolute -right-[21%] bottom-[9%] opacity-40 w-[37.5%] z-10' />
                <img src={ellipse1} alt="ellipse1" className='absolute  z-0 opacity-[40%] w-[10%] bubble1' />
                <img src={ellipse1} alt="ellipse1" className='absolute -left-[5%] bottom-[10%] opacity-50 z-0  w-[18%]' />
                <img src={ellipse1} alt="ellipse1" className='absolute opacity-30 z-0 w-[25%] bubble3' />
                <img src={ellipse1} alt="ellipse1" className='absolute  opacity-40 z-0 w-[10%] bubble2' />
                <div className='ml-36 z-10 relative flex flex-col justify-center h-full'>
                    <h1 className='text-white  text-7xl font-extrabold w-[70%]'>Development And Happiness To All</h1>
                    <p className='text-white mt-5 text-lg w-[35%] leading-tight font-[00]'>Building the right attitude to personal growth that leads to career growth.</p>
                    <button className='flex items-center gap-2 mt-10 w-44 bg-[#EAB600] text-white py-3 hover:bg-[#e4ff4d] hover:text-gray-500 transition ease-in-out duration-300 px-5 rounded-xl  font-semibold'>Know More <ChevronDoubleRightIcon className='w-5' /></button>
                </div>
                <div className='absolute right-12 -top-2 w-[37%] z-10 overflow-hidden'>
                    <img src={clouds} alt="" className='absolute cloud' />
                    <img src={girl} alt="" className=' object-contain relative z-10' />
                </div>
            </div>
            <div className='relative overflow-hidden'>
                <img src={leaf} alt="leaf" className='absolute w-40' />
                <img src={leaf} alt="leaf" className='absolute w-40 bottom-0 -rotate-90 -left-9' />
                <img src={leaf} alt="leaf" className='absolute w-40 bottom-16 rotate-90 -right-9 transform -scale-x-100' />
                <AboutUs title={"ABOUT US"} content={`Welcome to our captivating activities that promise excitement and enrichment. Dive into thrilling adventures, connect with local cultures, and explore nature's wonders. From adrenaline-pumping escapades to serene escapes, our activities cater to all interests.`}/>
                <OurServices />
                <VisionMission />
                <Testimonials />
                <ContactUs />
                <Footer />
            </div>
        </div>
    )
}

export default Home