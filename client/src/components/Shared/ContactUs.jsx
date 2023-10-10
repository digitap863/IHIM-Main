import React from 'react'
import img from '../../assets/Images/Home/contactus.png'
import { Input, Button } from "@nextui-org/react";
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid';
import bubble from '../../assets/Images/Shared/Ellipse1.png'
import leafM from '../../assets/Images/Shared/leafMirror.png'

function ContactUs() {
    return (
        <div className='relative'>
            <img src={leafM} alt="" className='absolute w-[20%] lg:w-[10%] -bottom-[8%] lg:bottom-0 rotate-90 -right-[1%]' />
            <div className='bg-[#E0F0D5] my-16 rounded-2xl lg:rounded-[3rem] shadow-lg py-5 lg:py-16 lg:px-20 flex flex-col-reverse lg:flex-row items-center justify-center mx-4 lg:mx-20 gap-24 font-mont relative'>
                <img src={bubble} alt="" className='absolute w-[10%] opacity-30 top-[10%] right-[15%] z-0' />
                <img src={bubble} alt="" className='absolute w-[10%] opacity-20 float2 top-[10%] right-[50%] z-0' />
                <img src={bubble} alt="" className='absolute w-[17%] opacity-20 -rotate-45 bottom-[2%] left-[5%] z-0' />
                <div className=' w-[90%] lg:w-[55%] flex flex-col gap-y-5 lg:gap-y-10'>
                    <h1 className='text-2xl lg:text-5xl font-bold text-[#1A5D1A]'>Having a happier life is not complicated anymore</h1>
                    <p className='font-[500]'>Contact us today to know more about IHIM</p>
                    <Input type="email" label="Email" size='lg' />
                    <Button className='bg-[#EAB600] text-white font-bold my-5 lg:my-0' size='lg'>
                        Enquire Now  <ChevronDoubleRightIcon className='w-5' />
                    </Button>
                </div>
                <img src={img} alt="" className='w-[80%] lg:w-[35%]' />
            </div>
        </div>
    )
}

export default ContactUs