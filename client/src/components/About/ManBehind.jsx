import React from 'react'
import holder from '../../assets/Images/About/ceoimageholder.png'
import leaf from '../../assets/Images/Shared/leaf.png'
import bubble from '../../assets/Images/Shared/Ellipse1.png'

function ManBehind() {
  return (
    <div className=' font-mont relative bg-slate-100 py-10 lg:py-24 overflow-hidden'>
        <img src={leaf} alt="" className='absolute w-[20%] lg:w-[10%] -left-[3%] lg:-left-6 bottom-10 -rotate-90'/>
        <img src={leaf} alt="" className='absolute w-[20%] lg:w-[10%] -right-[3%] lg:-right-7 top-9 rotate-90'/>
        <img src={bubble} alt="" className='absolute w-[20%] -right-40 z-20 opacity-20 bottom-32'/>
        <img src={bubble} alt="" className='absolute w-[10%] right-10 z-10 opacity-30 bottom-32 bubble3'/>
        <img src={bubble} alt="" className='absolute w-[10%] left-10 z-10 opacity-20 bottom-32 bubble2'/>
        <img src={bubble} alt="" className='absolute w-[20%] left-10 z-10 opacity-20 -top-20'/>

       <h1 className=' mb-5 font-bold text-4xl lg:text-5xl text-[#1A5D1A] text-center'>MEET THE MAN BEHIND IHIM</h1> 
        <div className='flex mx-5 lg:mx-40 items-center flex-col-reverse lg:flex-row gap-28 mt-16  justify-center'>
            <div className='lg:w-[60%]'>
                <h3 className='text-2xl font-bold text-center lg:text-left mb-5'>SANTHOSH KUMAR.A</h3>
                <p className='leading-loose font-[400] text-center lg:text-left'>Santhosh Kumar. A, is the visionary behind the International Human resource improvement Movement. He is the third generation descendant of Kairali Vidheyan Shri Rama Varma Appan Thampuran. The architect of the Cultural Capital of Kerala, Shri. Thampuran has trained and guided many to reach the peaks of recognitions. The career and other history of Santhosh clearly show that he is continuing the still prevailing visions & missions of Shri. Appan Thampuran. Santhosh has transformed many from all walks of life to reach greater heights of success and recognitions through his unique HR potential development process. He is the visionary behind conceiving, researching, developing, designing and managing the International Human resource improvement Movement (IHIM).</p>
            </div>
            <div className='lg:w-[25%] flex justify-center'>
                <img src={holder} alt="" className='w-[90%] relative z-10'/>
            </div>
        </div>
    </div>
  )
}

export default ManBehind