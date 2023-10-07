import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
    return (
        <div className='bg-[#1A5D1A] flex justify-end py-16 px-24 gap-24 font-mont text-white font-semibold'>
            <div className='flex flex-col gap-4 '>
                <h2 className='text-3xl font-bold mb-4'>Quick Links</h2>
                <a href="/" className='hover:text-orange-400 transition ease-in-out duration-300'>Home</a>
                <a href="/about" className='hover:text-orange-400 transition ease-in-out duration-300'>About Us</a>
                <a href="/services" className='hover:text-orange-400 transition ease-in-out duration-300'>Services</a>
                <a href="/contact" className='hover:text-orange-400 transition ease-in-out duration-300'>Contact</a>
            </div>
            <div>
                <h2 className='text-3xl font-bold mb-9'>Address</h2>
                <p className='font-normal'>737 Powlowski Light, Vytila <br />
                    Kochi, Kerala, India <br />
                    680022</p>
            </div>
            <div className='font-normal flex flex-col gap-4'>
                <h2 className='text-3xl font-bold mb-4'>Contact Us</h2>
                <a href="mailto:ihim@kochi.in">ihim@kochi.in</a>
                <a href="tel:+919543754642">+91 9543754642</a>
            </div>
            <div className='flex text-2xl gap-4'>
                <span className='rounded-full flex items-center justify-center p-1 h-[3rem] w-[3rem] border-[3px] hover:text-orange-700 hover:bg-white transition ease-in-out duration-300'>
                    <FaFacebook />
                </span>
                <span className='rounded-full flex items-center justify-center p-1 h-[3rem] w-[3rem] border-[3px] hover:text-orange-700 hover:bg-white transition ease-in-out duration-300'>
                    <FaInstagram className='rounded-full' />
                </span>
                <span className='rounded-full flex items-center justify-center p-1 h-[3rem] w-[3rem] border-[3px] hover:text-orange-700 hover:bg-white transition ease-in-out duration-300'>
                    <FaLinkedinIn />
                </span>
            </div>
        </div>
    )
}

export default Footer