import React from 'react'
import Services2Header from '../components/Services-all/Services2Header'
import EducationTraining from '../components/Services-all/EducationTraining'
import Layout from '../components/Shared/Layout'
import ContactUs from '../components/Shared/ContactUs'
import TourismServices from '../components/Services-all/TourismServices'
import Hospitality from '../components/Services-all/Hospitality'

function AllServices() {
  return (
    <div>
        <Layout header={<Services2Header/>}>
        <EducationTraining/>
        <Hospitality/>
        <TourismServices/>
        <ContactUs/>
        </Layout>
    </div>
  )
}

export default AllServices