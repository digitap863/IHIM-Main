import React from 'react'
import { BsCalendar2DateFill } from 'react-icons/bs'
import { PiPlantFill } from 'react-icons/pi'
import { TbBookFilled } from 'react-icons/tb'
import { GiWitchFlight } from "react-icons/gi"
import leaf from '../../assets/Images/Shared/leaf.png'
import leafM from '../../assets/Images/Shared/leafMirror.png'
import bubble from '../../assets/Images/Shared/Ellipse1.png'

function TourismServices() {
    return (
        <div className='mt-20 font-mont flex-col justify-center items-center flex relative'>
            <img src={leafM} alt="" className='absolute w-[10%] rotate-90 bottom-[30%] -right-[2%]' />
            <img src={bubble} alt="" className='absolute w-[15%] opacity-20 float rotate-90 bottom-[30%] right-[30%]' />
            <img src={bubble} alt="" className='absolute w-[15%] opacity-20 float2 rotate-90 top-[10%] left-[30%]' />
            <img src={bubble} alt="" className='absolute w-[9%] opacity-20 rotate-90 top-[40%] -left-[1%]' />
            <img src={leaf} alt="" className='absolute w-[10%] -rotate-90 top-[10%] -left-[2%]' />
            <h5 className='text-[#1A5D1A] text-center text-4xl font-bold'>Tourism And Services</h5>
            <div className='w-[80%] grid grid-cols-2 gap-10 mt-20'>
                <div className='bg-white relative rounded-3xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 ease-in-out duration-300 px-10 py-16 '>
                    <div className='bg-[#1A5D1A] rounded-full text-5xl flex justify-center items-center h-20 w-20 text-white absolute -top-[10%]'><TbBookFilled /></div>
                    <h3 className='font-semibold text-2xl mb-7'>Edu - Tours</h3>
                    <p className='leading-relaxed text-[0.9rem] text-justify'>{`Human Resource Potential Development Studies and Training" focuses on unlocking and enhancing the capabilities of individuals within an organization. This comprehensive program involves identifying strengths, addressing areas for growth, and providing tailored training to optimize employee skills, productivity, and overall contribution to the company's success.`}</p>
                </div>
                <div className='bg-white relative rounded-3xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 ease-in-out duration-300 px-10 py-16 '>
                    <div className='bg-[#1A5D1A] rounded-full text-5xl flex justify-center items-center h-20 w-20 text-white absolute -top-[10%]'><PiPlantFill /></div>
                    <h3 className='font-semibold text-2xl mb-7'>Eco - Tours</h3>
                    <p className='leading-relaxed text-[0.9rem] text-justify'>{`Human Resource Potential Development Studies and Training" focuses on unlocking and enhancing the capabilities of individuals within an organization. This comprehensive program involves identifying strengths, addressing areas for growth, and providing tailored training to optimize employee skills, productivity, and overall contribution to the company's success.`}</p>
                </div>
                <div className='bg-white relative rounded-3xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 ease-in-out duration-300 px-10 py-16 mt-20'>
                    <div className='bg-[#1A5D1A] rounded-full text-5xl flex justify-center items-center h-20 w-20 text-white absolute -top-[10%]'><BsCalendar2DateFill /></div>
                    <h3 className='font-semibold text-2xl mb-7'>Human Resource Potential Development studies and Training</h3>
                    <p className='leading-relaxed text-[0.9rem] text-justify'>{`Human Resource Potential Development Studies and Training" focuses on unlocking and enhancing the capabilities of individuals within an organization. This comprehensive program involves identifying strengths, addressing areas for growth, and providing tailored training to optimize employee skills, productivity, and overall contribution to the company's success.`}</p>
                </div>
                <div className='bg-white relative rounded-3xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 ease-in-out duration-300 px-10 py-16 mt-20'>
                    <div className='bg-[#1A5D1A] rounded-full text-5xl flex justify-center items-center h-20 w-20 text-white absolute -top-[10%]'><GiWitchFlight /></div>
                    <h3 className='font-semibold text-2xl mb-7'>Human Resource Potential Development studies and Training</h3>
                    <p className='leading-relaxed text-[0.9rem] text-justify'>{`Human Resource Potential Development Studies and Training" focuses on unlocking and enhancing the capabilities of individuals within an organization. This comprehensive program involves identifying strengths, addressing areas for growth, and providing tailored training to optimize employee skills, productivity, and overall contribution to the company's success.`}</p>
                </div>
            </div>
        </div>
    )
}

export default TourismServices