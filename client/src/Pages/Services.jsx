import React from 'react'
import Layout from '../components/Shared/Layout'
import Header from '../components/Shared/Header'
import headerImage from '../assets/Images/Services/headerImage.png'
import ContactUs from '../components/Shared/ContactUs'
import ServicesPreview from '../components/Services/ServicesPreview'

function Services() {
  return (
    <div>
      <Layout header={<Header title={"What we offer"} pageTitle={'SERVICES'} subtitle={"We develop Human Resources from potential to growth through scientific methods"} img={headerImage} />}>
        <ServicesPreview />
        <ContactUs />
      </Layout>
    </div>
  )
}

export default Services