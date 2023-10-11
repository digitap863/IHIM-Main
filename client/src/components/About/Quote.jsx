import React from 'react'
import yogaGirl from '../../assets/Images/About/yogaGirl.png'
import bubble from '../../assets/Images/Shared/Ellipse1.png'

function Quote() {
    return (
        <div className='flex my-20 items-center justify-center py-10 relative font-mont'>
            <img src={bubble} alt="" className='absolute w-[20%] lg:w-[12%] float opacity-20 bottom-[15%]  left-[25%]' />
            <img src={bubble} alt="" className='absolute w-[9%]  opacity-20 bottom-0 lg:-bottom-[30%] rotate-45 -left-[2%]' />
            <img src={bubble} alt="" className='absolute w-[10%]  opacity-10 bottom-[10%] -right-[2%]' />
            <div className='flex justify-center items-center gap-20 relative flex-col-reverse md:flex-row px-10'>
                <img src={bubble} alt="" className='absolute w-[70%] md:w-[50%] lg:w-[20%] opacity-30 top-0 right-[20%] md:right-[6%] lg:right-[20%]' />
                <p className='text-3xl lg:text-7xl absolute left-[5%] lg:left-[15%] top-[72%] md:top-[15%] lg:top-[15%] font-petrona'>{`"`}</p>
                <p className='text-3xl lg:text-7xl absolute right-[60%] md:right-[80%] lg:right-[40%] bottom-[1%] md:bottom-[20%] lg:bottom-[10%] rotate-180 font-petrona'>{`"`}</p>
                <p className='italic  lg:font-bold text-xl md:text-2xl lg:text-3xl font-petrona text-justify lg:w-[40%]'> Things do not grow better; they remain
                    as they are. It is we who grow better, By
                    the changes we make in ourselves.</p>
                <p className='absolute -bottom-[7%] lg:bottom-[10%] left-[45%] lg:left-[18%]'>-Swami  Vivekananda</p>
                <img src={yogaGirl} alt="" className='md:w-[40%] lg:w-[20%] relative z-10' />
            </div>
        </div>
    )
}

export default Quote