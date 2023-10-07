import React from 'react'
import mission1 from '../../assets/Images/Home/mission1.png'
import mission2 from '../../assets/Images/Home/mission2.png'
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid'

function VisionMission() {
    return (
        <div className='mb-10'>
            <h1 className='text-[#1A5D1A] font-bold text-5xl text-center'>VISION & MISSION</h1>
            <div className='bg-[#E0F0D5] mx-20 flex mt-10 flex-col justify-center rounded-[3.5rem] shadow-xl items-center pb-10'>
                <div className='flex'>
                    <div className='w-[50%] flex flex-col justify-center items-center p-10'>
                        <img src={mission1} alt="" className='w-[40%]' />
                        <h3 className='text-[#1A5D1A] text-3xl font-bold my-4'>Our Vision</h3>
                        <p className='w-[70%] text-center leading-relaxed text-[1.1rem]'>Development & happiness are the most important
                            desire of an individual. This is true with people from
                            all walks of life. When they attain this desire they
                            self-actualization of their needs hierarchy</p>
                        have the feeling of the landing at the plane of
                    </div>
                    <div className='w-[50%] flex flex-col justify-center items-center p-10'>
                        <img src={mission2} alt="" className='w-[40%]' />
                        <h3 className='text-[#1A5D1A] text-3xl font-bold my-4'>Our Mission</h3>
                        <p className='w-[70%] text-center leading-relaxed text-[1.1rem]'>Facilitating opportunities and activities enabling
                            Self improvement to the individuals from all
                            walks of life those who are getting associated
                            with the self improvement movement of
                            the organization</p>

                    </div>
                </div>
                <button className='flex items-center text-center gap-2 w-44 bg-[#EAB600] text-white py-3 hover:bg-[#e4ff4d] hover:text-gray-500 transition ease-in-out duration-300 px-10 rounded-xl  font-semibold'>Join Now <ChevronDoubleRightIcon className='w-5' /></button>
            </div>
        </div>
    )
}

export default VisionMission