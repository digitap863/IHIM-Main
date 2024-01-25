import React, { useState } from 'react'
import services1 from '../../assets/Images/Home/services1.png'
import services2 from '../../assets/Images/Home/services2.png'
import services3 from '../../assets/Images/Home/services3.png'
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid'
import leaf from '../../assets/Images/Shared/leaf.png'
import leafM from '../../assets/Images/Shared/leafMirror.png'
import bubble from '../../assets/Images/Shared/Ellipse1.png'
import ks from '../../assets/Images/Services/karmakshetra.png'

function OurServices() {
  const [showMore, setShowMore] = useState('truncate');
  const toggleText = () => {
    if(showMore.length===0){
      setShowMore('truncate')
    }else{
      setShowMore('')
    }
  };
  return (
    <div className='flex justify-center flex-col font-mont items-center mb-20 relative'>
      <img src={leaf} alt="" className='absolute w-[10%] -left-[2%] -rotate-90 top-[50%]' />
      <img src={leafM} alt="" className='absolute w-[20%] lg:w-[10%] top-0 -right-[2%] rotate-90 lg:top-[20%]' />
      <img src={bubble} alt="" className='absolute w-[20%] opacity-5 bottom-[10%] -right-[10%] z-0' />
      <img src={bubble} alt="" className='absolute w-[10%] opacity-20 bottom-[10%] right-[2%] z-0' />
      <img src={bubble} alt="" className='absolute w-[10%] opacity-20 bottom-[2%] left-[4%] z-0' />
      <h1 className='text-[#1A5D1A] font-bold text-3xl md:text-5xl'>OUR HUBS DIVISIONS</h1>
        <p className='w-[80%] md:w-[50%] text-center hidden md:block my-4'>{`The multidisciplinary Hub where "IHA karmena shri sambhavathi '' reigns, meaning 'here SHRI is attained through engagement in activities,' with SHRI representing Development & Happiness. By Giving Three faces to the activity which happens under karmakshetra which is Little huts, satv akademia and swen heritage`}</p>
        <p
          className={`w-[80%] md:w-[50%] text-center md:hidden my-4 ${
            showMore
          }`}
        >
          {`The multidisciplinary Hub where "IHA karmena shri sambhavathi '' reigns, meaning 'here SHRI is attained through engagement in activities,' with SHRI representing Development & Happiness. By Giving Three faces to the activity which happens under karmakshetra which is Little huts, satv akademia and swen heritage`}
        </p>
        {!showMore.length==0 && (
          <button onClick={toggleText} className='md:hidden'>See More</button>
        )}
      <img src={ks} className='w-[25%] md:w-[20%] xl:w-[10%] mb-8   ' alt="" />
      <h1 className='text-[#1A5D1A] font-stoke text-2xl md:text-4xl'>KARMAKSHETRA</h1>
      <h5 className='font-semibold my-1'>(Innovative human resource applications)</h5>
      <p className='text-center text-tiny mb-5 md:text-base mt-2'>The Multi Faceted Activity Hub. <br />  Iha karmena shri sambhavati.</p>
      <div className='flex flex-col md:flex-row gap-8 justify-center mx-5 lg:mx-28 mb-10 relative z-10'>
        <div className='border rounded-2xl shadow-xl flex flex-col bg-white items-center p-5 lg:p-10 lg:w-[33%]'>
          <img src={services1} alt="" className='w-[24%]' />
          <h4 className='font-[500] text-2xl mt-4 text-[#1A5D1A] font-stoke'>SATV AKADEMIA</h4>
          <h5 className='font-semibold mb-1'>Education & Training</h5>
          <ul className='text-sm list-disc'>
            <li>Management & Training</li>
            <li>Skill development studies & Training</li>
            <li>Awareness Program</li>
          </ul>
        </div>
        <div className='border rounded-2xl shadow-xl flex flex-col bg-white items-center p-5 lg:p-10 lg:w-[33%]'>
          <img src={services2} alt="" className='w-[24%]' />
          <h4 className='font-[500] text-2xl lg:text-2xl mt-4 text-[#1A5D1A] font-stoke'>LITTLE HUTS</h4>
          <h5 className='font-semibold mb-1'>Innovative Tourism Service</h5>
          <ul className='text-sm list-disc w-[50%] text-left'>
            <li>Edu-Tourism</li>
            <li>Eco-Tourism</li>
            <li>Adventure Tourism</li>
            <li>Wellness Tourism</li>
          </ul>
        </div>
        <div className='border rounded-2xl shadow-xl flex flex-col bg-white items-center p-5 lg:p-10 lg:w-[33%]'>
          <img src={services3} alt="" className='w-[24%]' />
          <h4 className='font-[500] text-2xl lg:text-2xl mt-4 text-[#1A5D1A] font-stoke'>SWEN HERITAGE</h4>
          <h5 className='font-semibold mb-1 text-center'>Theatre for International social & Cultural Interaction</h5>
          <ul className='text-sm list-disc'>
            <li>Social, Cultural art, literary</li>
            <li>HRD & Educational Events</li>
          </ul>
        </div>
      </div>
      <button className='flex gap-2 items-center border-[3px] text-[#1A5D1A] py-1.5 px-2.5 font-semibold rounded-lg border-[#1A5D1A] hover:bg-green-100'>Explore Now <ChevronDoubleRightIcon className='w-5' /></button>
    </div>
  )
}

export default OurServices