/* eslint-disable no-constant-condition */
import React, { useEffect, useState } from 'react'
import {  Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
    let Links =[
        {name:"HOME",link:"/"},
        {name:"ABOUT US",link:"/about"},
        {name:"GALLERY",link:"/gallery"},
        {name:"SERVICES",link:"/services"},
        {name:"CONTACT",link:"/contact"},
      ];
      let [open, setOpen] =useState(false);
      const location = useLocation()
      const path = location.pathname
      const navigate = useNavigate()
      const [scrolling, setScrolling] = useState('text-white');
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > 670) {
        // Set the scrolling state to true after scrolling 100vh
        setScrolling('text-[#1A5D1A]');
      } else {
        // Reset the scrolling state if scrolling back up
        setScrolling('text-white');
      }

      // Update the previous scroll position
      setPrevScrollPos(currentScrollPos);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);
    return (
        <div className='w-full fixed top-0 left-0 z-20'>
           <div className='md:flex items-center justify-between py-4 md:px-10 px-7'>
            {/* logo section */}
            <div className='font-bold text-2xl cursor-pointer flex items-center gap-1 ' onClick={()=>navigate('/')}>
                {/* <BookOpenIcon className='w-7 h-7 text-blue-600'/> */}
                <h5 className={` ${path==='/gallery'||path==='/all-services'?'text-[#1A5D1A]':scrolling} font-mont `} >IHIM</h5>
            </div>
            {/* Menu icon */}
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                {
                    open ? <XMarkIcon/> : <Bars3BottomRightIcon />
                }
            </div>
            {/* linke items */}
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                {
                    Links.map((link) => (
                    <li className='md:ml-8 md:my-0 my-7 font-semibold' key={link.name}>
                        <a href={link.link} className={`hover:text-[#EAB600]  ${path==='/gallery'||path==='/all-services'?'text-[#1A5D1A]':scrolling} duration-500`}>{link.name}</a>
                    </li>))
                }
            </ul>
           </div>
        </div>
    );
}

export default Navbar