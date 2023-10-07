import React from 'react'
import Navbar from '../Navbar'
import ellipse1 from '../../assets/Images/Shared/Ellipse1.png'
import leaf from '../../assets/Images/Shared/leafMirror.png'

// eslint-disable-next-line react/prop-types
function GalleryHeader() {
    return (
        <div className='h-screen relative overflow-hidden font-mont flex items-start px-20'>
            <Navbar />
            <img src={leaf} alt="" className='w-28 absolute -left-7 top-20 -rotate-90'/>
            <img src={ellipse1} alt="ellipse1" className='absolute -left-[20%] -top-[60%] z-0 opacity-90 w-[40%]' />
            <img src={ellipse1} alt="ellipse1" className='absolute -right-[21%] bottom-[9%] opacity-40 w-[37.5%] z-10' />
            {/* <img src={ellipse1} alt="ellipse1" className='absolute  z-0 opacity-[40%] w-[10%] bubble1' /> */}
            <img src={ellipse1} alt="ellipse1" className='absolute -left-[5%] bottom-[10%] opacity-50 z-0  w-[18%]' />
            <img src={ellipse1} alt="ellipse1" className='absolute opacity-30 z-0 w-[25%] bubble3' />
            {/* <img src={ellipse1} alt="ellipse1" className='absolute  opacity-40 z-0 w-[10%] bubble2' /> */}
            <div className='ml-20 z-10 relative flex flex-col justify-center gap-5 items-center h-[70%] w-full'>
                <h1 className='text-[#1A5D1A]  text-7xl font-extrabold mt-3'>Gallery</h1>
                <p className='text-green-900 font-semibold text-xl w-[35%] text-center'>Building the right attitude to personal growth
                    that leads to career growth.</p>

            </div>
        </div>
    )
}

export default GalleryHeader