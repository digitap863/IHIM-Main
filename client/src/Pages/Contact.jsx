import React from 'react'
import Layout from '../components/Shared/Layout'
import ContactHeader from '../components/Contact/ContactHeader'
import ContactUs from '../components/Shared/ContactUs'
import SendMsg from '../components/Contact/SendMsg'

function Contact() {
  return (
    <div>
      <Layout header={<ContactHeader pageTitle={"CONTACT"} title={"Get in Touch"} />}>
      <SendMsg />
      <ContactUs />
    </Layout>
    </div>
  )
}

export default Contact