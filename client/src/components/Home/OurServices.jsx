import React from 'react'
import services1 from '../../assets/Images/Home/services1.png'
import services2 from '../../assets/Images/Home/services2.png'
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid'
import leaf from '../../assets/Images/Shared/leaf.png'
import leafM from '../../assets/Images/Shared/leafMirror.png'
import bubble from '../../assets/Images/Shared/Ellipse1.png'

function OurServices() {
  return (
    <div className='flex justify-center flex-col font-mont items-center gap-y-8 mb-20 relative'>
      <img src={leaf} alt="" className='absolute w-[10%] -left-[2%] -rotate-90 top-[50%]' />
      <img src={leafM} alt="" className='absolute w-[20%] lg:w-[10%] top-0 -right-[2%] rotate-90 lg:top-[20%]' />
      <img src={bubble} alt="" className='absolute w-[20%] opacity-5 bottom-[10%] -right-[10%] z-0' />
      {/* <img src={bubble} alt="" className='absolute w-[20%] opacity-10 -top-[20%] right-[10%] z-0' /> */}
      <img src={bubble} alt="" className='absolute w-[10%] opacity-20 bottom-[10%] right-[2%] z-0' />
      <img src={bubble} alt="" className='absolute w-[10%] opacity-20 bottom-[2%] left-[4%] z-0' />
      <h1 className='text-[#1A5D1A] font-bold text-3xl md:text-5xl'>OUR SERVICES</h1>
      <p className=' w-[90%] md:w-[85%] lg:w-[52%] text-center'>{`Welcome to our captivating activities that promise excitement and enrichment. Dive into thrilling
adventures, connect with local cultures, and explore nature's wonders. From adrenaline-pumping
escapades to serene escapes, our activities cater to all interests`}.</p>
      <div className='flex flex-col md:flex-row gap-8 justify-center mx-5 lg:mx-40 relative z-10'>
        <div className='border rounded-2xl shadow-xl flex flex-col bg-white items-center p-5 lg:p-10 lg:w-[50%] bg-whit '>
          <img src={services1} alt="" />
          <h4 className='font-semibold text-2xl lg:text-xl my-5'>Education and Training</h4>
          <p className='text-center md:text-sm lg:text-base lg:w-[90%]'>Education & Training offers you Human Resource Potential
            Development studies and Training, Self-improvement
            Techniques and Skills, Solution finding for
            Real –life situations.</p>
        </div>
        <div className='border rounded-2xl shadow-xl flex flex-col items-center p-5 lg:p-10 lg:w-[50%] bg-white'>
          <img src={services2} alt="" />
          <h4 className='font-semibold text-2xl lg:text-xl my-5'>Education and Training</h4>
          <p className='text-center lg:w-[90%]'>Discover the world with our tailored tourism service. Unforgettable destinations, expert guides, and seamless logistics ensure an immersive and hassle-free adventure.</p>
        </div>
      </div>
      <button className='flex gap-2 items-center border-[3px] text-[#1A5D1A] py-1.5 px-2.5 font-semibold rounded-lg border-[#1A5D1A] hover:bg-green-100'>Explore Now <ChevronDoubleRightIcon className='w-5' /></button>
    </div>
  )
}

export default OurServices