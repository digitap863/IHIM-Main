import React from 'react'
import mission1 from '../../assets/Images/Home/mission1.png'
import mission2 from '../../assets/Images/Home/mission2.png'
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid'
import bubble from '../../assets/Images/Shared/Ellipse1.png'

function VisionMission() {
    return (
        <div className='mb-10 font-mont'>
            <h1 className='text-[#1A5D1A] font-bold text-3xl lg:text-5xl text-center'>VISION & MISSION</h1>
            <div className='bg-[#E0F0D5] mx-4 lg:mx-20 flex mt-10 flex-col justify-center overflow-hidden rounded-3xl lg:rounded-[3.5rem] shadow-xl items-center pb-10 relative'>
            <img src={bubble} alt="" className='absolute w-[15%] opacity-30  bottom-[6%] right-[7%] rotate-180' />
            <img src={bubble} alt="" className='absolute w-[12%] opacity-10 -bottom-[2%] right-[50%] float' />
            <img src={bubble} alt="" className='absolute w-[10%] opacity-20 -top-[0%] -rotate-90 left-[6%] float2' />
                <div className='flex flex-col lg:flex-row relative'>
                    <div className='lg:w-[50%] flex flex-col justify-center items-center mt-10 lg:mt-0 lg:p-10'>
                        <img src={mission1} alt="" className='w-[60%] lg:w-[40%]' />
                        <h3 className='text-[#1A5D1A] text-3xl font-bold my-4'>Our Vision</h3>
                        <p className='lg:w-[70%] text-center leading-relaxed text-[1.1rem]'>Development & happiness are the most important
                            desire of an individual. This is true with people from
                            all walks of life. When they attain this desire they
                            self-actualization of their needs hierarchy  have the feeling of the landing at the plane of</p>
                       
                    </div>
                    <div className='lg:w-[50%] flex flex-col justify-center items-center p-5  lg:p-10'>
                        <img src={mission2} alt="" className='w-[80%] lg:w-[40%]' />
                        <h3 className='text-[#1A5D1A] text-3xl font-bold my-4'>Our Mission</h3>
                        <p className='lg:w-[70%] text-center leading-relaxed text-[1.1rem]'>Facilitating opportunities and activities enabling
                            Self improvement to the individuals from all
                            walks of life those who are getting associated
                            with the self improvement movement of
                            the organization</p>

                    </div>
                </div>
                <button className='flex items-center relative text-center gap-2 w-48 bg-[#EAB600] text-white py-3 hover:bg-[#e4ff4d] hover:text-gray-500 transition ease-in-out duration-300 px-10 rounded-xl  font-semibold'>Join Now <ChevronDoubleRightIcon className='w-5' /></button>
            </div>
        </div>
    )
}

export default VisionMission