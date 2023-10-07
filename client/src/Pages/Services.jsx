import React from 'react'
import Layout from '../components/Shared/Layout'
import Header from '../components/Shared/Header'
import headerImage from '../assets/Images/Services/headerImage.png'
import ContactUs from '../components/Shared/ContactUs'
import ServicesPreview from '../components/Services/ServicesPreview'

function Services() {
  return (
    <div>
        <Layout header={ <Header title={"Our services differ from others"} pageTitle={'SERVICES'} subtitle={"Building the right attitude to personal growth that leads to career growth."} img={headerImage}/>}>
            <ServicesPreview/>
        <ContactUs/>
        </Layout>
    </div>
  )
}

export default Services