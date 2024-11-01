import React from 'react'
import mission1 from '../../assets/Images/Home/mission1.png'
import mission2 from '../../assets/Images/Home/mission2.png'
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid'
import bubble from '../../assets/Images/Shared/Ellipse1.png'

function VisionMission() {
    return (
        <div className='mb-10 font-mont'>
            <h1 className='text-[#1A5D1A] font-bold text-3xl md:text-4xl lg:text-5xl text-center'>VISION & MISSION</h1>
            <div className='mx-4'>

                <div className='bg-[#E0F0D5]   flex mt-10 flex-col justify-center overflow-hidden rounded-3xl lg:rounded-[3.5rem] shadow-xl items-center pb-10 relative max-w-screen-2xl mx-auto '>
                    <img src={bubble} alt="" className='absolute w-[15%] opacity-30  bottom-[6%] right-[7%] rotate-180' />
                    <img src={bubble} alt="" className='absolute w-[12%] opacity-10 -bottom-[2%] right-[50%] float' />
                    <img src={bubble} alt="" className='absolute w-[10%] opacity-20 -top-[0%] -rotate-90 left-[6%] float2' />
                    <div className='flex flex-col md:flex-row relative p-3 '>
                        <div className='md:w-[50%] flex flex-col justify-center items-center mt-10 lg:mt-0 lg:p-10'>
                            <img src={mission1} alt="" className='w-[60%] lg:w-[40%] ' />
                            <h3 className='text-[#1A5D1A] text-3xl font-bold mt-4 mb-1'>Our Vision</h3>
                            <h6 className='text-[#1A5D1A] text-xl font-semibold mb-4'>Development and Happiness of all</h6>
                            <p className='md:w-[90%] lg:w-[80%] text-justify
                         leading-relaxed text-sm lg:text-[1rem]'>Empower individuals worldwide to unlock their full potential through a movement dedicated to human resource development. We blend the profound insights of Eastern and Western Personality Development and Management theories, creating a transformative journey towards self-realisation, skill enhancement, and overall well-being.</p>

                        </div>
                        <div className='md:w-[50%] flex flex-col justify-center items-center   lg:p-10'>
                            <img src={mission2} alt="" className='w-[60%] lg:w-[40%] md:mt-10 lg:mt-0' />
                            <h3 className='text-[#1A5D1A] text-3xl font-bold mt-4 mb-1'>Our Mission</h3>
                            <h6 className='text-[#1A5D1A] text-xl font-semibold mb-4 text-center leading-tight'>Empowering Human Transformation <br/> through scientific methods</h6>
                            <p className='md:w-[90%] lg:w-[80%] text-justify leading-relaxed text-sm lg:text-[1rem]'>Foster a global community of empowered individuals who have harnessed their Human Resource Potentials, transforming them into valuable Human Resource Capitals. Our vision is to bridge East and West, cultivating a dynamic space where individuals thrive in personal and professional capacities, contributing to a world enriched by the collective development and happiness of its members.</p>
                        </div>
                    </div>
                    <button className='flex items-center relative text-center gap-2 w-48 bg-[#EAB600] text-white py-3 hover:bg-[#e4ff4d] hover:text-gray-500 transition ease-in-out duration-300 px-10 rounded-xl  font-semibold'>Join Now <ChevronDoubleRightIcon className='w-5' /></button>
                </div>
            </div>
        </div>
    )
}

export default VisionMission