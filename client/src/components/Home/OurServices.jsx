import React from 'react'
import services1 from '../../assets/Images/Home/services1.png'
import services2 from '../../assets/Images/Home/services2.png'
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid'

function OurServices() {
  return (
    <div className='flex justify-center flex-col font-mont items-center gap-y-8 mb-20'>
      <h1 className='text-[#1A5D1A] font-bold text-5xl'>OUR SERVICES</h1>
      <p className='w-[52%] text-center'>{`Welcome to our captivating activities that promise excitement and enrichment. Dive into thrilling
adventures, connect with local cultures, and explore nature's wonders. From adrenaline-pumping
escapades to serene escapes, our activities cater to all interests`}.</p>
      <div className='flex gap-8 justify-center mx-40 '>
        <div className='border rounded-2xl shadow-xl flex flex-col items-center p-10 w-[50%]'>
          <img src={services1} alt="" />
          <h4 className='font-semibold text-xl my-5'>Education and Training</h4>
          <p className='text-center w-[90%]'>Education & Training offers you Human Resource Potential
            Development studies and Training, Self-improvement
            Techniques and Skills, Solution finding for
            Real –life situations.</p>
        </div>
        <div className='border rounded-2xl shadow-xl flex flex-col items-center p-10 w-[50%]'>
          <img src={services2} alt="" />
          <h4 className='font-semibold text-xl my-5'>Education and Training</h4>
          <p className='text-center w-[90%]'>Discover the world with our tailored tourism service. Unforgettable destinations, expert guides, and seamless logistics ensure an immersive and hassle-free adventure.</p>
        </div>
      </div>
      <button className='flex gap-2 items-center border-[3px] text-[#1A5D1A] py-1.5 px-2.5 font-semibold rounded-lg border-[#1A5D1A]'>Explore Now <ChevronDoubleRightIcon className='w-5' /></button>
    </div>
  )
}

export default OurServices