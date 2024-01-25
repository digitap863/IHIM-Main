import React from 'react'
import AboutUs from '../components/Home/AboutUs'
import '../components/CustomCss/Animation.css'
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
            <div className='max-w-[1920px] mx-auto'>
            <div className='h-screen bg-gradient-to-br from-[#258425] to-[#85A231] relative overflow-hidden font-mont'>
                <Navbar />
                <img src={ellipse1} alt="ellipse1" className='absolute -left-[20%] -top-[60%] z-0 opacity-90 w-[40%]' />
                <img src={ellipse1} alt="ellipse1" className='absolute   -right-[60%] bottom-[20%] lg:-right-[21%] lg:bottom-[9%] opacity-40 w-full lg:w-[37.5%] z-10' />
                <img src={ellipse1} alt="ellipse1" className='absolute  z-0 opacity-[40%] w-[10%] bubble1' />
                <img src={ellipse1} alt="ellipse1" className='absolute -left-[5%] bottom-[10%] opacity-50 z-0  w-[18%]' />
                <img src={ellipse1} alt="ellipse1" className='absolute opacity-30 z-0 w-[25%] bubble3' />
                <img src={ellipse1} alt="ellipse1" className='absolute  opacity-40 z-0 w-[10%] bubble2' />
                <div className='lg:ml-36 ml-8 z-20 relative flex flex-col mt-20 lg:mt-0 lg:justify-center h-full'>
                    <h1 className='text-white text-[2.1rem] md:text-7xl font-bold lg:font-extrabold lg:w-[70%] max-w-[50rem]'>Development And Happiness To All</h1>
                    <p className='text-white mt-5 text-lg md:w-[70%] md:text-xl lg:text-lg lg:w-[35%] leading-tight'>Equipped for exploring and identifying one’s own Human Resource Potentials by himself</p>
                    <button className='flex items-center gap-2 mt-10 w-44 bg-[#EAB600] text-white py-3 hover:bg-[#e4ff4d] hover:text-gray-500 transition ease-in-out duration-300 px-5 rounded-xl  font-semibold'>Know More <ChevronDoubleRightIcon className='w-5' /></button>
                </div>
                <div className='absolute bottom-[10%] -right-[5%] lg:right-12 lg:-top-2 w-full lg:w-[37%] z-10 overflow-hidden'>
                    <img src={clouds} alt="" className='absolute cloud' />
                    <img src={girl} alt="" className=' object-contain relative z-10' />
                </div>
            </div>
            <div className='relative overflow-hidden'>
                <AboutUs title={"ABOUT US"} content={`Welcome to our captivating activities that promise excitement and enrichment. Dive into thrilling adventures, connect with local cultures, and explore nature's wonders. From adrenaline-pumping escapades to serene escapes, our activities cater to all interests.`} />
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