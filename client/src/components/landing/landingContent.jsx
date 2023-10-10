import React from 'react'
import { BiSolidRightArrow } from 'react-icons/bi'
import img1 from '../../assets/Images/Services/services1.png'
import img2 from '../../assets/Images/Services/services2.png'

function LandingContent() {
    return (
        <div className='my-10 flex flex-col items-center font-mont'>
            <div className='flex gap-10 w-[80% justify-center]'>
                <div className='flex flex-col gap-5'>
                    <h1 className='text-[#1A5D1A] mb-3 font-bold text-4xl -ml-5' >Education and Training</h1>
                    <p className='flex items-center gap-3 font-[400]'><span><BiSolidRightArrow /></span> Human Resource Potential Development studies and Training</p>
                    <p className='flex items-center gap-3 font-[400]'><span><BiSolidRightArrow /></span>Self-improvement Techniques and Skills</p>
                    <p className='flex items-center gap-3 font-[400]'><span><BiSolidRightArrow /></span>Solution finding for Real –life situations</p>
                </div>
                <img src={img1} alt="" className='object-contain w-[50%]'/>
            </div>
            <div className='w-[80%] my-12 border-gray-300 border-0 border-b-[2px] h-1'></div>
            <div className='flex gap-10 w-[80%] justify-center'>
                <img src={img2} alt="" className='w-[40%] object-contain' />
                <div className='flex flex-col gap-3'>
                    <h1 className='text-[#1A5D1A]  font-bold text-4xl -ml-5' >Tourism and Service</h1>
                    <p className='flex items-center mt-3 gap-3 italic font-semibold'><span><BiSolidRightArrow /></span> Edu-tours</p>
                    <p>“Ente Keralam”- A travel through the history and culture of Kerala</p>
                    <p className='flex items-center mt-3 gap-3 italic font-semibold'><span><BiSolidRightArrow /></span> Eco-tours</p>
                    <p>“Kalladikkodan Beauty”</p>
                    <p className='flex items-center mt-3 gap-3 italic font-semibold'><span><BiSolidRightArrow /></span> Festival-tours</p>
                    <p>“For thy Eyes & Minds” <br /> Through the festivals of Kerala</p>
                    <p className='flex items-center mt-3 gap-3 italic font-semibold'><span><BiSolidRightArrow /></span> Adventure-tours</p>
                    <p>“Hillocks & Brooks”</p>
                    
                </div>
            </div>
        </div>
    )
}

export default LandingContent