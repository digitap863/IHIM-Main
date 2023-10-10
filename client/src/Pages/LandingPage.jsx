import React from 'react'
import Layout from '../components/Shared/Layout'
import ContactHeader from '../components/Contact/ContactHeader'
import LandingContent from '../components/landing/landingContent'
import ContactUs from '../components/Shared/ContactUs'

function LandingPage() {
  return (
    <div>
        <Layout header={<ContactHeader title={'Connect With US'}/>}>
        <LandingContent/>
        <ContactUs/>
        </Layout>
    </div>
  )
}

export default LandingPage