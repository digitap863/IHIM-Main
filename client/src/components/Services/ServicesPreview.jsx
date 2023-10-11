import React from 'react'
import services1 from '../../assets/Images/Services/services1.png'
import services2 from '../../assets/Images/Services/services2.png'
import { BiSolidRightArrow } from 'react-icons/bi';
import { IoMan } from 'react-icons/io5';
import { MdOutlineSelfImprovement } from 'react-icons/md';
import { GiBrain } from 'react-icons/gi';
import { TbBookFilled } from 'react-icons/tb';
import { PiPlantFill } from "react-icons/pi";
import { BsCalendar2DateFill } from "react-icons/bs"
import { GiWitchFlight } from "react-icons/gi"
import leaf from '../../assets/Images/Shared/leaf.png'
import leafM from '../../assets/Images/Shared/leafMirror.png'
import bubble from '../../assets/Images/Shared/Ellipse1.png'
import '../CustomCss/Animation.css'
import { useNavigate } from 'react-router-dom';

function ServicesPreview() {
    const navigate = useNavigate()
    return (
        <div className='mx-5 lg:mx-40 flex flex-col lg:flex-row justify-center gap-10 py-20 font-mont relative'>
            <img src={bubble} alt="" className='absolute w-[15%] opacity-20 -bottom-[10%] -rotate-90 right-[8%] float2' />
            <img src={bubble} alt="" className='absolute w-[15%] opacity-20 top-[10%] -rotate-90 left-0 float' />
            <img src={leaf} alt="" className='absolute w-[30%] lg:w-[15%] bottom-0 lg:-bottom-[10%] -rotate-90 -left-[10%] lg:-left-[15%]' />
            <img src={leaf} alt="" className='absolute w-[30%] lg:w-[15%]  top-0 -left-[8%] lg:-left-[15%]' />
            <img src={leafM} alt="" className='absolute w-[25%] lg:w-[12%] top-[40%] rotate-90 -right-[10%] lg:-right-[16%]' />
            <div className='border rounded-2xl shadow-lg pt-10 pb-24 flex flex-col items-center relative gap-7 lg:w-[40%] bg-white'>
                <img src={services1} alt="" className='w-[70%]' />
                <h1 className='text-[#1A5D1A] font-[600] text-2xl lg:text-3xl'>Education and Training</h1>
                <div className='flex flex-col px-10 font-medium gap-6 items-start w-full'>
                    <p className='flex items-center gap-2'><span className='text-4xl text-[#1A5D1A]'><IoMan /></span>Human Resource Potential Development studies and Training</p>
                    <p className='flex items-center gap-2'><span className='text-4xl text-[#1A5D1A]'><MdOutlineSelfImprovement /></span>Self-improvement Techniques and Skills</p>
                    <p className='flex items-center gap-3'><span className='text-3xl text-[#1A5D1A]'><GiBrain /></span>Solution finding for Real –life situations</p>
                </div>
                <button onClick={()=>navigate('/all-services')} className='flex items-center gap-2 border-[#1A5D1A] border-[2px] rounded-lg px-6 py-2 text-[#1A5D1A] font-semibold absolute bottom-5 hover:bg-green-100'>Learn More <BiSolidRightArrow /></button>
            </div>
            <div className='border rounded-2xl shadow-lg pt-10 pb-24 flex flex-col items-center relative gap-7 lg:w-[40%] bg-white'>
                <img src={services2} alt="" className='w-[70%]' />
                <h1 className='text-[#1A5D1A] font-[600] text-2xl lg:text-3xl'>Tourism and Services</h1>
                <div className='flex flex-col px-10 font-medium items-start w-full gap-3'>
                    <p className='flex items-center gap-3 italic font-semibold'><span className='text-3xl text-[#1A5D1A]'><TbBookFilled /></span>Edu-tours</p>
                    <p className='ml-10'>“Ente Keralam”- A travel through the history and culture of Kerala</p>
                    <p className='flex items-center gap-3 italic font-semibold'><span className='text-3xl text-[#1A5D1A]'><PiPlantFill /></span>Eco-tours</p>
                    <p className='ml-10'>“Kalladikkodan Beauty”</p>
                    <p className='flex items-center gap-3 italic font-semibold'><span className='text-3xl text-[#1A5D1A]'><BsCalendar2DateFill /></span>Festival-tours</p>
                    <p className='ml-10'>“For thy Eyes & Minds” <br />
                        Through the festivals of Kerala
                    </p>
                    <p className='flex items-center gap-3 italic font-semibold'><span className='text-3xl text-[#1A5D1A]'><GiWitchFlight /></span>Adventure-tours</p>
                    <p className='ml-10'>“Hillocks & Brooks”</p>
                </div>
                <button onClick={()=>navigate('/all-services')} className='flex items-center gap-2 border-[#1A5D1A] border-[2px] rounded-lg px-6 py-2 text-[#1A5D1A] font-semibold absolute bottom-5 hover:bg-green-100'>Learn More <BiSolidRightArrow /></button>
            </div>
        </div>
    )
}

export default ServicesPreview