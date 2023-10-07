import React from 'react'
import Header from '../components/Shared/Header'
import girlLearning from '../assets/Images/About/girlLearning.png'
import Layout from '../components/Shared/Layout'
import AboutUs from '../components/Home/AboutUs'
import ManBehind from '../components/About/ManBehind'
import Quote from '../components/About/Quote'
import VisionMission from '../components/Home/VisionMission'
import ContactUs from '../components/Shared/ContactUs'
import Testimonials from '../components/Home/Testimonials'
import FounderMessage from '../components/About/FounderMessage'

function About() {
  return (
    <div>
       <Layout header={ <Header title={"Knowing us is important"} pageTitle={'ABOUT US'} subtitle={"Building the right attitude to personal growth that leads to career growth."} img={girlLearning}/>}>
        <AboutUs title={"IHIM IS A CONCEPT"} content={'IHIM, the  movement is devised and designed to facilitate activities to develop the physical and psychological powers that determine the Nature, Aspirations, Capacities (talents & skills) and Values of the participating persons'}/>
        <ManBehind/>
        <Quote/>
        <VisionMission/>
        <FounderMessage/>
        <Testimonials/>
        <ContactUs/>
       </Layout>
    </div>
  )
}

export default About