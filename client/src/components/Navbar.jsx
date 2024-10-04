/* eslint-disable no-constant-condition */
import React, { useEffect, useState } from 'react'
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { useLocation, useNavigate } from 'react-router-dom';
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa';
import { BiLogoInstagramAlt } from 'react-icons/bi';

function Navbar() {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT US", link: "/about" },
    { name: "GALLERY", link: "/gallery" },
    { name: "SERVICES", link: "/services" },
    { name: "CONTACT", link: "/contact" },
  ];
  let [open, setOpen] = useState(false);
  const location = useLocation()
  const path = location.pathname
  const navigate = useNavigate()
  const [scrolling, setScrolling] = useState('text-white');
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  useEffect(() => {
    if (open) {
      // Disable scrolling
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      // Enable scrolling
      document.documentElement.style.overflow = 'auto';
      document.body.style.overflow = 'auto';
    }

    // Cleanup effect
    return () => {
      document.documentElement.style.overflow = 'auto';
      document.body.style.overflow = 'auto';
    };
  }, [open]);
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
    <div className='w-full fixed top-0 left-0 z-30'>
      <div className={`${scrolling == 'text-[#1A5D1A]' ? 'bg-[#f5f5f5]' : ''} px-10`}>

        <div className={`lg:flex  items-center justify-between py-4 md:px-10 px-7 lg:px-0 max-w-screen-2xl mx-auto`}>

          {/* logo section */}
          <div className='font-bold text-2xl flex items-center gap-1 '>
            {/* <BookOpenIcon className='w-7 h-7 text-blue-600'/> */}
            <h5 onClick={() => {
              navigate('/')

            }} className={` ${path === '/gallery' || path === '/all-services' || open ? 'text-[#1A5D1A]' : scrolling} relative cursor-pointer z-0 font-mont `} >IHIM</h5>
          </div>
          {/* Menu icon */}
          <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer lg:hidden w-7 h-7'>
            {
              open ? <XMarkIcon /> : <Bars3BottomRightIcon />
            }
          </div>
          {/* linke items */}
          <ul className={`flex flex-col lg:flex-row items-center justify-center lg:justify-start lg:pb-0 pb-12 absolute lg:static lg:z-auto left-0 w-full lg:w-auto  transition-all duration-500 z-[-1] ease-in  ${open ? ' top-0 gap-10 text-2xl md:text-4xl bg-[#E0F0D5] h-screen' : 'top-[-490px]'}`}>
            {
              Links.map((link) => (
                <li className='md:ml-8 md:my-0' key={link.name}>
                  <a href={link.link} className={`hover:text-[#EAB600]  ${path === '/gallery' || path === '/all-services' ? 'text-[#1A5D1A]' : scrolling} ${open ? '!text-[#1A5D1A] font-bold' : 'font-semibold'} duration-500`}>{link.name}</a>
                </li>))
            }
            <div className='flex gap-5 mt-10 text-4xl text-[#1A5D1A] lg:hidden'>
              <span className='rounded-full flex items-center justify-center p-1 h-[4rem] w-[4rem] border-[3px] hover:text-orange-700 hover:bg-white border-gray-300 transition ease-in-out duration-300'>
                <FaFacebook />
              </span>
              <span className='rounded-full flex items-center justify-center p-1 h-[4rem] w-[4rem] border-[3px] hover:text-orange-700 hover:bg-white border-gray-300  transition ease-in-out duration-300'>
                <BiLogoInstagramAlt />
              </span>
              <span className='rounded-full flex items-center justify-center p-1 h-[4rem] w-[4rem] border-[3px] hover:text-orange-700 hover:bg-white border-gray-300 transition ease-in-out duration-300'>
                <FaLinkedinIn />
              </span></div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar