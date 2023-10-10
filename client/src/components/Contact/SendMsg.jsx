import { Button, Input, Textarea } from '@nextui-org/react'
import React from 'react'
import leaf from '../../assets/Images/Shared/leaf.png'
import bubble from '../../assets/Images/Shared/Ellipse1.png'

function SendMsg() {
    return (
        <div className='w-full flex justify-center font-mont relative overflow-hidden'>
            <img src={leaf} alt="" className='absolute w-[10%] top-0 left-0' />
            <img src={bubble} alt="" className='absolute w-[10%] top-[40%] opacity-30 float -left-[5%]' />
            <img src={bubble} alt="" className='absolute w-[10%] -top-[2%] opacity-30 -right-[2%]' />
            <div className='flex flex-col-reverse lg:flex-row border-[1px] border-gray-300 rounded-3xl shadow-lg items-center mt-16 gap-10 lg:gap-40 w-[90%] lg:w-[80%]'>
                <div className='lg:w-[30%]'>
                    <iframe className='w-full flex justify-center lg:w-[120%] h-[40rem] lg:rounded-l-3xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251482.7184990422!2d76.13612104751219!3d9.98233153162407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6bf%3A0xbd582caa5844192!2sKochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1696659433524!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className='w-[85%] lg:w-[50%] flex flex-wrap justify-center lg:justify-start gap-7'>
                    <h1 className='text-2xl  mt-5 lg:mt-0 lg:text-5xl font-bold text-[#1A5D1A] lg:w-[50%]'>Send Us a Message</h1>
                    <Input type="name" variant={"underlined"} label="Your Name" />
                    <Input type="email" variant={"underlined"} label="Your Email" />
                    <Textarea type="message" variant={"underlined"} label="Your Message" />
                    <Button variant="bordered" size='lg' className='mt-20 text-[#1A5D1A] w-[80%] border-[2px] border-[#1A5D1A]'>
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default SendMsg