import React from 'react'
import yogaGirl from '../../assets/Images/About/yogaGirl.png'
import bubble from '../../assets/Images/Shared/Ellipse1.png'

function Quote() {
    return (
        <div className='flex my-20 items-center justify-center py-10'>
            <div className='W-[60%] flex justify-center items-center gap-20 relative'>
                <img src={bubble} alt="" className='absolute w-[20%] opacity-40  right-[20%]' />
                <p className='text-7xl absolute left-56 top-12 font-petrona'>{`"`}</p>
                <p className='text-7xl absolute right-[40%] bottom-16 rotate-180 font-petrona'>{`"`}</p>
                <p className='italic font-bold text-3xl font-petrona text-justify w-[40%]'> Things do not grow better; they remain
                    as they are. It is we who grow better, By
                    the changes we make in ourselves.   </p>
            <img src={yogaGirl} alt="" className='w-[20%] relative z-10' />
            </div>
        </div>
    )
}

export default Quote