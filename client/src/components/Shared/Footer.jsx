import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
    return (
        <div className='bg-[#1A5D1A] grid grid-cols-2 gap-y-10 gap-x-10  lg:gap-x-0 lg:gap-y-0 lg:grid-cols-4 justify-items-center py-16 px-7 lg:px-24 font-mont text-white font-semibold'>
            <div className='flex flex-col gap-1 lg:gap-4 '>
                <h2 className='text-xl lg:text-3xl font-bold mb-4'>Quick Links</h2>
                <a href="/" className='hover:text-orange-400 transition ease-in-out duration-300 text-sm xl:text-base'>Home</a>
                <a href="/about" className='hover:text-orange-400 transition ease-in-out duration-300 text-sm xl:text-base'>About Us</a>
                <a href="/services" className='hover:text-orange-400 transition ease-in-out duration-300 text-sm xl:text-base'>Services</a>
                <a href="/contact" className='hover:text-orange-400 transition ease-in-out duration-300 text-sm xl:text-base'>Contact</a>
            </div>
            <div className='font-normal flex flex-col gap-1 lg:gap-4'>
                <h2 className='text-xl lg:text-3xl font-bold mb-4'>Contact Us</h2>
                <a className='text-sm xl:text-base' href="mailto:ask4iha@gmail.com">ask4iha@gmail.com</a>
                <a className='text-sm xl:text-base' href="tel:+919567851158">+919567851158</a>
                <a className='text-sm xl:text-base' href="tel:+919495089436">+919495089436</a>
            </div>
            <div>
                <h2 className='text-xl lg:text-3xl font-bold mb-3 lg:mb-9'>Address</h2>
                <p className='font-normal text-sm lg:text-base'>193 A, PARC, <br />
                    Kalavath Road, <br /> Near BSNL,<br /> Palarvattom PO, <br /> Kochi-682025.</p>
            </div>

            <div className='flex text-xl lg:text-2xl gap-3 lg:gap-4'>
                <span className='rounded-full flex items-center justify-center p-1 h-[2.5rem] w-[2.5rem] lg:h-[3rem] lg:w-[3rem] border-[1px] lg:border-[3px] hover:text-orange-700 hover:bg-white transition ease-in-out duration-300'>
                    <FaFacebook />
                </span>
                <span className='rounded-full flex items-center justify-center p-1 h-[2.5rem] w-[2.5rem] lg:h-[3rem] lg:w-[3rem] border-[1px] lg:border-[3px] hover:text-orange-700 hover:bg-white transition ease-in-out duration-300'>
                    <FaInstagram className='rounded-full' />
                </span>
                <span className='rounded-full flex items-center justify-center p-1 h-[2.5rem] w-[2.5rem] lg:h-[3rem] lg:w-[3rem] border-[1px] lg:border-[3px] hover:text-orange-700 hover:bg-white transition ease-in-out duration-300'>
                    <FaLinkedinIn />
                </span>
            </div>
        </div>
    )
}

export default Footer