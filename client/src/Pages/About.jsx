import React from "react";
import Header from "../components/Shared/Header";
import girlLearning from "../assets/Images/About/girlLearning.png";
import Layout from "../components/Shared/Layout";
import AboutUs from "../components/Home/AboutUs";
import ManBehind from "../components/About/ManBehind";
import Quote from "../components/About/Quote";
import VisionMission from "../components/Home/VisionMission";
import ContactUs from "../components/Shared/ContactUs";
// import Testimonials from '../components/Home/Testimonials'
import FounderMessage from "../components/About/FounderMessage";

function About() {
  return (
    <div>
      <Layout
        header={
          <Header
            title={"What is IHA ?"}
            pageTitle={"ABOUT US"}
            subtitle={"Innovative Human Resource Application"}
            img={girlLearning}
          />
        }
      >
        <AboutUs
          title={"IHA IS A CONCEPT"}
          content={`IHA, the  movement is devised and designed to facilitate activities to develop the physical and psychological powers that determine the Nature, Aspirations, Capacities (talents & skills) and Values of the participating persons. <br /> <br /> We believe that every individual can convert his human resource potential into human resource capital by cognitive, affective and conative faculties. <br /> <br />
This wealth thus gained can be utilized to serve yourself, your organization and your society better. <br /> <br />
IHA realises the strength and richness of our great culture and draws inspiration from it to design an appropriate scientific approach process for equipping you to find your own solutions for your real life situations, which forms the base on how our programs are designed `}
        />
        <ManBehind />
        <Quote />
        <VisionMission />
        <FounderMessage />
        {/* <Testimonials/> */}
        <ContactUs />
      </Layout>
    </div>
  );
}

export default About;
