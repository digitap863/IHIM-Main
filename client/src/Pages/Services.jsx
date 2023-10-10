import React from 'react'
import Layout from '../components/Shared/Layout'
import Header from '../components/Shared/Header'
import headerImage from '../assets/Images/Services/headerImage.png'
import ContactUs from '../components/Shared/ContactUs'
import ServicesPreview from '../components/Services/ServicesPreview'
import { BiSolidRightArrow } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

function Services() {
  const navigate = useNavigate()
  return (
    <div>
      <Layout header={<Header title={"Our services differ from others"} pageTitle={'SERVICES'} subtitle={"Building the right attitude to personal growth that leads to career growth."} img={headerImage} />}>
        <ServicesPreview />
        <div className='w-full flex justify-center'>
          <button className='flex items-center gap-2 border-[#1A5D1A] border-[2px] rounded-lg px-6 py-2 text-[#1A5D1A] font-semibold  hover:bg-green-100' onClick={()=>navigate('/all-services')}>View All<BiSolidRightArrow /></button>
        </div>
        <ContactUs />
      </Layout>
    </div>
  )
}

export default Services