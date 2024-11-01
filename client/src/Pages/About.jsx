import React from 'react'
import Header from '../components/Shared/Header'
import girlLearning from '../assets/Images/About/girlLearning.png'
import Layout from '../components/Shared/Layout'
import AboutUs from '../components/Home/AboutUs'
import ManBehind from '../components/About/ManBehind'
import Quote from '../components/About/Quote'
import VisionMission from '../components/Home/VisionMission'
import ContactUs from '../components/Shared/ContactUs'
// import Testimonials from '../components/Home/Testimonials'
import FounderMessage from '../components/About/FounderMessage'

function About() {
  return (
    <div>
       <Layout header={ <Header title={"Knowing us is important"} pageTitle={'ABOUT US'} subtitle={"Building the right attitude to personal growth that leads to career growth."} img={girlLearning}/>}>
        <AboutUs title={"IHIM IS A CONCEPT"} content={'IHIM, the  movement is devised and designed to facilitate activities to develop the physical and psychological powers that determine the Nature, Aspirations, Capacities (talents & skills) and Values of the participating persons <br/> We believe that every individual can convert his human resource potential into human resource capital by cognitive, affective and Conative faculties. This wealth thus gained can be utilized to serve yourself, your organization and your society better. <br/> IHIM realises the strength and richness of our great culture and draws inspiration from it to design an appropriate scientific approach process for equipping you to find your own solutions for your real life situations. And thats how we designed our Programmes for you'}/>
        <ManBehind/>
        <Quote/>
        <VisionMission/>
        <FounderMessage/>
        {/* <Testimonials/> */}
        <ContactUs/>
       </Layout>
    </div>
  )
}

export default About