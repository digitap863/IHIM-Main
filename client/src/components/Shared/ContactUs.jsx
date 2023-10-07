import React from 'react'
import img from '../../assets/Images/Home/contactus.png'
import { Input,Button } from "@nextui-org/react";
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid';

function ContactUs() {
    return (
        <div className='bg-[#E0F0D5] my-16 rounded-[3rem] shadow-lg py-16 px-20 flex items-center justify-center mx-20 gap-24 font-mont'>
            <div className='w-[55%] flex flex-col gap-y-10'>
                <h1 className='text-5xl font-bold text-[#1A5D1A]'>Having a happier life is not complicated anymore</h1>
                <p className='font-[500]'>Contact us today to know more about IHIM</p>
                <Input type="email" label="Email"  size='lg'/>
                <Button className='bg-[#EAB600] text-white font-bold ' size='lg'>
                    Enquire Now  <ChevronDoubleRightIcon className='w-5' />
                </Button>
            </div>
            <img src={img} alt="" className='w-[35%]' />
        </div>
    )
}

export default ContactUs