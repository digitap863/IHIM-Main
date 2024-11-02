import React, { useState } from 'react'
import services1 from '../../assets/Images/Home/services1.png'
import services2 from '../../assets/Images/Home/services2.png'
import services3 from '../../assets/Images/Home/services3.png'
import sd1 from '../../assets/Images/Services/sd1.png'
import sd2 from '../../assets/Images/Services/sd2.png'
import sd3 from '../../assets/Images/Services/sd3.png'

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
// import ks from '../../assets/Images/Services/karmakshetra.png'
import lOGO from '../../assets/Images/Home/lOGO.png'

import { useNavigate } from 'react-router-dom';

function ServicesPreview() {
    const navigate = useNavigate()
    const [showMore, setShowMore] = useState('truncate');
    const toggleText = () => {
        if (showMore.length === 0) {
            setShowMore('truncate')
        } else {
            setShowMore('')
        }
    };
    return (
        <div className='mx-5 xl:mx-40 flex flex-col items-center py-20 font-mont relative'>
            <img src={bubble} alt="" className='absolute w-[15%] opacity-20 -bottom-[10%] -rotate-90 right-[8%] float2' />
            <img src={bubble} alt="" className='absolute w-[15%] opacity-20 top-[10%] -rotate-90 left-0 float' />
            <img src={leaf} alt="" className='absolute w-[30%] lg:w-[15%] bottom-0 lg:-bottom-[10%] -rotate-90 -left-[10%] lg:-left-[15%]' />
            <img src={leaf} alt="" className='absolute w-[30%] lg:w-[15%]  top-0 -left-[8%] lg:-left-[15%]' />
            <img src={leafM} alt="" className='absolute w-[25%] lg:w-[12%] top-[40%] rotate-90 -right-[10%] lg:-right-[16%]' />
            <h1 className='text-[#1A5D1A] font-bold text-3xl md:text-4xl'>OUR HUBS DIVISIONS</h1>
            <p className='w-[80%] md:w-[50%]  text-center hidden md:block my-4'>{`IHA Karnakshethras are the centers of  "ihavasa sutra" the solution  provider sutra for all Real Life Situations. Other three faces of services which happen under IHIM are LITTLEHUTS, SATV AKADEMIA and SWEN HERITAGE.`}</p>
            {/* <p className='w-[80%] md:w-[50%] text-center hidden md:block my-4'>{`The multidisciplinary Hub where "IHA karmena shri sambhavathi '' reigns, meaning 'here SHRI is attained through engagement in activities,' with SHRI representing Development & Happiness. By Giving Three faces to the activity which happens under karmakshetra which is Little huts, satv akademia and swen heritage`}</p> */}
            <p
                className={`w-[80%] md:w-[50%] text-center md:hidden my-4 ${showMore
                    }`}
            >
                {`IHA Karnakshethras are the centers of  "ihavasa sutra" the solution  provider sutra for all Real Life Situations. Other three faces of services which happen under IHIM are LITTLEHUTS, SATV AKADEMIA and SWEN HERITAGE.`}
            </p>
            {/* <p
          className={`w-[80%] md:w-[50%] text-center md:hidden my-4 ${
            showMore
          }`}
        >
          {`The multidisciplinary Hub where "IHA karmena shri sambhavathi '' reigns, meaning 'here SHRI is attained through engagement in activities,' with SHRI representing Development & Happiness. By Giving Three faces to the activity which happens under karmakshetra which is Little huts, satv akademia and swen heritage`}
        </p> */}
            {!showMore.length == 0 && (
                <button onClick={toggleText} className='md:hidden'>See More</button>
            )}
            {/* <img src={ks} className='w-[25%] md:w-[20%] xl:w-[10%] my-5' alt="" /> */}
            <img src={lOGO} className='w-[25%] md:w-[20%] xl:w-[10%] my-5' alt="" />

            <h1 className='text-[#1A5D1A] font-stoke text-2xl md:text-3xl'>IHIM KARMAKSHETRA</h1>
            <h5 className='font-semibold my-1'>Innovative human resource applications</h5>
            <p className='text-center text-tiny mb-5 md:text-sm mt-2'>Professional Facilitation hubs. <br />  Development and Happiness through activities.</p>
            <div className='flex flex-col lg:flex-row justify-center  gap-10 '>
                <div className='border rounded-2xl shadow-lg pt-10 pb-24 flex flex-col items-center relative gap-7 lg:w-[33%] bg-white'>
                    <img src={services1} alt="" className='w-[30%]' />
                    <h1 className='text-[#1A5D1A] font-[500] font-stoke text-2xl lg:text-2xl px-1 text-center'>IHIM SATV AKADEMIA</h1>
                    <div className='flex flex-col px-10 font-medium gap-2 items-start w-full'>
                        <p className='flex items-center gap-2'><span className='text-4xl text-[#1A5D1A]'><IoMan /></span>Education and Training</p>
                        <ul className='ml-10 list-disc'>
                            <li>Management studies & Training</li>
                            <li>Skill development studies & Training</li>
                            <li>Awareness Program</li>
                        </ul>
                        {/* <p className='flex items-center gap-2'><span className='text-4xl text-[#1A5D1A]'><MdOutlineSelfImprovement /></span>Development and Happiness through Knowledge</p>
                        <p className='flex items-center gap-3'><span className='text-3xl text-[#1A5D1A]'><GiBrain /></span>Solution finding for Real –life situations</p> */}
                    </div>
                    <button onClick={() => navigate('/all-services')} className='flex items-center gap-2 border-[#1A5D1A] border-[2px] rounded-lg px-6 py-2 text-[#1A5D1A] font-semibold absolute bottom-5 hover:bg-green-100'>Learn More <BiSolidRightArrow /></button>
                </div>
                <div className='border rounded-2xl shadow-lg pt-10 pb-24 flex flex-col items-center relative gap-7 lg:w-[33%] bg-white'>
                    <img src={services2} alt="" className='w-[30%]' />
                    <h1 className='text-[#1A5D1A] font-[500] font-stoke text-2xl lg:text-2xl'>IHIM LITTLE HUTS</h1>
                    <div className='flex flex-col px-10 font-medium items-start w-full gap-2'>
                        <p className='flex items-center gap-3'><span className='text-3xl text-[#1A5D1A]'><TbBookFilled /></span>Hospitality & Tourism</p>
                        <p className='flex items-center gap-2'><span className='text-3xl text-[#1A5D1A]'><BsCalendar2DateFill /></span>Innovative Tourism Services</p>
                        <ul className='ml-10 list-disc'>
                            <li>Edu-Tourism</li>
                            <li>Eco-Tourism</li>
                            <li>Adventure Tourism</li>
                            <li>Wellness Tourism</li>
                            <li>Festival Tourism</li>
                        </ul>
                        <p className='flex items-center gap-3'><span className='text-3xl text-[#1A5D1A]'><PiPlantFill /></span>Healthcare Center</p>
                        <p className='ml-10'>Screening / Referral / Research</p>
                        {/* <p className='flex items-center gap-3'><span className='text-3xl text-[#1A5D1A]'><GiWitchFlight /></span>Development and Happiness through Care</p> */}
                    </div>
                    <button onClick={() => navigate('/all-services')} className='flex items-center gap-2 border-[#1A5D1A] border-[2px] rounded-lg px-6 py-2 text-[#1A5D1A] font-semibold absolute bottom-5 hover:bg-green-100'>Learn More <BiSolidRightArrow /></button>
                </div>
                <div className='border rounded-2xl shadow-lg pt-10 pb-24 flex flex-col items-center relative gap-7 lg:w-[33%] bg-white'>
                    <img src={services3} alt="" className='w-[30%]' />
                    <h1 className='text-[#1A5D1A] font-[500] font-stoke text-2xl lg:text-2xl px-1 text-center'>IHIM SWEN HERITAGE</h1>
                    <div className='flex flex-col px-10 font-medium items-start w-full gap-2'>
                        <p className='flex items-center gap-3'><span className='text-3xl text-[#1A5D1A]'><TbBookFilled /></span>Theatre for Events  </p>
                        <ul className='ml-10 list-disc'>

                            <li>Social, Cultural art, literary</li>
                            <li>HRD & Educational Events</li>
                        </ul>
                        {/* <p className='flex items-center gap-3'><span className='text-3xl text-[#1A5D1A]'><PiPlantFill /></span>Healthcare Center</p>
                        <p className='flex items-center gap-3'><span className='text-3xl text-[#1A5D1A]'><BsCalendar2DateFill /></span>Innovative Tourism Services</p>
                        <p className='flex items-center gap-3'><span className='text-3xl text-[#1A5D1A]'><GiWitchFlight /></span>Development and Happiness through Care</p> */}
                    </div>
                    <button onClick={() => navigate('/all-services')} className='flex items-center gap-3 border-[#1A5D1A] border-[2px] rounded-lg px-6 py-2 text-[#1A5D1A] font-semibold absolute bottom-5 hover:bg-green-100'>Learn More <BiSolidRightArrow /></button>
                </div>
            </div>
            <h1 className='text-[#1A5D1A] font-bold text-3xl mt-10 md:text-4xl'>SERVICE DIVISIONS</h1>
            <p className='w-[80%] md:w-[50%] text-center hidden md:block my-4'>{`In IHIM, we recognize three main learner types: auditory, visual, and kinesthetic, or a combination of these. Our knowledge transfer is rooted in the principles of experimental and experiential learning, ensuring a tailored approach to cater to diverse learning preferences`}</p>
            <p
                className={`w-[80%] md:w-[50%] text-center md:hidden my-4 ${showMore
                    }`}
            >
                {`In IHIM, we recognize three main learner types: auditory, visual, and kinesthetic, or a combination of these. Our knowledge transfer is rooted in the principles of experimental and experiential learning, ensuring a tailored approach to cater to diverse learning preferences`}
            </p>
            {!showMore.length == 0 && (
                <button onClick={toggleText} className='md:hidden'>See More</button>
            )}
            <div className='flex flex-col lg:flex-row justify-center gap-10 max-w-screen-2xl   '>
                <div className='border rounded-2xl shadow-lg pt-10 pb-24 flex flex-col items-center relative gap-7 lg:w-[33%] max-w-md mx-auto bg-white'>
                    <img src={sd1} alt="" className='w-[30%]' />
                    <h1 className='text-[#1A5D1A] font-[5    00] text-2xl lg:text-2xl text-center font-stoke'>EDUCATION AND TRAINING</h1>
                    <div className='flex flex-col px-10 font-medium gap-6 items-start w-full'>
                        <p className='flex items-center gap-2'><span className='text-4xl text-[#1A5D1A]'><IoMan /></span>Human Resource Potential Development studies and Training</p>
                        <p className='flex items-center gap-2'><span className='text-4xl text-[#1A5D1A]'><MdOutlineSelfImprovement /></span>Self-improvement Techniques and Skills</p>
                        <p className='flex items-center gap-3'><span className='text-3xl text-[#1A5D1A]'><GiBrain /></span>Solution finding for Real –life situations</p>
                    </div>
                    <button onClick={() => navigate('/all-services', { state: 300 })} className='flex items-center gap-2 border-[#1A5D1A] border-[2px] rounded-lg px-6 py-2 text-[#1A5D1A] font-semibold absolute bottom-5 hover:bg-green-100'>Learn More <BiSolidRightArrow /></button>
                </div>
                <div className='border rounded-2xl shadow-lg pt-10 pb-24 flex flex-col items-center relative gap-7 lg:w-[33%] min-w-full lg:min-w-0 max-w-md mx-auto bg-white'>
                    <img src={sd2} alt="" className='w-[30%]' />
                    <h1 className='text-[#1A5D1A] font-[5    00] text-2xl lg:text-2xl text-center font-stoke'>HOSPITALITY</h1>
                    <div className='flex flex-col px-10 font-medium items-start w-full gap-3'>
                        <p className='flex items-center gap-2'><span className='text-4xl text-[#1A5D1A]'><IoMan /></span>Health Care Centre</p>
                        <p className='flex items-center gap-2'><span className='text-4xl text-[#1A5D1A]'><MdOutlineSelfImprovement /></span>Infrastructure Development</p>
                    </div>
                    <button onClick={() => navigate('/all-services', { state: 1000 })} className='flex items-center gap-2 border-[#1A5D1A] border-[2px] rounded-lg px-6 py-2 text-[#1A5D1A] font-semibold absolute bottom-5 hover:bg-green-100'>Learn More <BiSolidRightArrow /></button>
                </div>
                <div className='border rounded-2xl shadow-lg pt-10 pb-24 flex flex-col items-center relative gap-7 lg:w-[33%] max-w-md mx-auto bg-white'>
                    <img src={sd3} alt="" className='w-[30%]' />
                    <h1 className='text-[#1A5D1A] font-[5    00]  text-2xl lg:text-2xl  text-center font-stoke'>TOURISM AND SERVICES</h1>
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
                    <button onClick={() => navigate('/all-services', { state: 1500 })} className='flex items-center gap-2 border-[#1A5D1A] border-[2px] rounded-lg px-6 py-2 text-[#1A5D1A] font-semibold absolute bottom-5 hover:bg-green-100'>Learn More <BiSolidRightArrow /></button>
                </div>
            </div>

        </div>
    )
}

export default ServicesPreview







