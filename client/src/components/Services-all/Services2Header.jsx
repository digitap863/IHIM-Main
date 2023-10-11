import React from 'react'
import Navbar from '../Navbar'
import ellipse1 from '../../assets/Images/Shared/Ellipse1.png'
import '../CustomCss/Animation.css'
import leaf from '../../assets/Images/Shared/leafMirror.png'

function Services2Header() {
    return (
        <div className='h-[100vh] relative overflow-hidden font-mont flex pt-20 lg:pt-0 items-center flex-col gap-10 -mb-[125%] lg:-mb-[20%] bg-[#fffffb]'>
            <Navbar />
            <img src={ellipse1} alt="ellipse1" className='absolute -left-[20%] -top-[60%] z-0 opacity-40 w-[40%]' />
            <img src={leaf} alt="ellipse1" className='absolute -left-[5%] top-[10%] -rotate-90 w-[20%] lg:hidden' />
            <img src={ellipse1} alt="ellipse1" className='absolute -right-[21%] bottom-[9%] opacity-40 w-[37.5%] z-10' />
            <img src={ellipse1} alt="ellipse1" className='absolute  z-0 opacity-[40%] w-[10%] bubble1' />
            <img src={ellipse1} alt="ellipse1" className='absolute -left-[5%] bottom-[10%] opacity-50 z-0  w-[18%]' />
            {/* <img src={ellipse1} alt="ellipse1" className='absolute opacity-30 z-0 w-[25%] bubble3' /> */}
            <img src={ellipse1} alt="ellipse1" className='absolute  opacity-40 z-0 w-[10%] bubble2' />
            <h1 className='text-[#1A5D1A] relative text-4xl lg:text-7xl font-extrabold mt-[10%]'>Services We Do</h1>
            <p className='text-green-900 font-semibold text-lg lg:text-xl lg:w-[35%] text-center'>Building the right attitude to personal growth
                that leads to career growth.</p>
        </div>
    )
}

export default Services2Header