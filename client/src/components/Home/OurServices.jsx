import React, { useState } from "react";
import services2 from "../../assets/Images/Home/services2.png";
import services3 from "../../assets/Images/Home/services3.png";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import leaf from "../../assets/Images/Shared/leaf.png";
import leafM from "../../assets/Images/Shared/leafMirror.png";
import bubble from "../../assets/Images/Shared/Ellipse1.png";
import lOGO from "../../assets/Images/Home/lOGO.png";
import sd1 from "../../assets/Images/Services/sd1.png";
import ihaLogo from "../../assets/Images/Home/ihalogo.jpeg";


function OurServices() {
  const [showMore, setShowMore] = useState("truncate");
  const toggleText = () => {
    if (showMore.length === 0) {
      setShowMore("truncate");
    } else {
      setShowMore("");
    }
  };
  return (
    <div className="flex justify-center flex-col font-mont items-center mb-20 relative">
      <img
        src={leaf}
        alt=""
        className="absolute w-[10%] -left-[2%] -rotate-90 top-[50%]"
      />
      <img
        src={leafM}
        alt=""
        className="absolute w-[20%] lg:w-[10%] top-0 -right-[2%] rotate-90 lg:top-[20%]"
      />
      <img
        src={bubble}
        alt=""
        className="absolute w-[20%] opacity-5 bottom-[10%] -right-[10%] z-0"
      />
      <img
        src={bubble}
        alt=""
        className="absolute w-[10%] opacity-20 bottom-[10%] right-[2%] z-0"
      />
      <img
        src={bubble}
        alt=""
        className="absolute w-[10%] opacity-20 bottom-[2%] left-[4%] z-0"
      />
      <h1 className="text-[#1A5D1A] font-bold text-3xl md:text-5xl">
        OUR SERVICES
      </h1>
      <p className="w-[80%] md:w-[50%] text-center hidden md:block my-4">{`IHA Karnakshethras are the centers of  "ihavasa sutra" the solution  provider sutra for all Real Life Situations. `}</p>

      <p
        className={`w-[80%] md:w-[50%] text-center md:hidden my-4 ${showMore}`}
      >
        {`IHA Karnakshethras are the centers of  "ihavasa sutra" the solution  provider sutra for all Real Life Situations.`}
      </p>

      {!showMore.length == 0 && (
        <button onClick={toggleText} className="md:hidden">
          See More
        </button>
      )}
      <img
        src={ihaLogo}
        className="w-[25%] md:w-[20%] xl:w-[20%] mb-8   "
        alt=""
      />
      <h1 className="text-[#1A5D1A] font-stoke text-2xl md:text-4xl">IHA </h1>
      <h5 className="font-semibold my-1">
        (Innovative human resource applications)
      </h5>
      <p className="text-center text-tiny mb-5 md:text-base mt-2">
        The Multi Faceted Activity Hub. <br /> Iha karmena shri sambhavati.
      </p>
      <div className="flex flex-col md:flex-row gap-5 justify-center mx-5 lg:mx-28 mb-10 relative z-10">
        <div className="border rounded-2xl shadow-xl flex flex-col bg-white items-center p-5 lg:p-10 lg:w-[33%]">
          <img src={sd1} alt="" className="w-[24%] object-contain" />
          <h4 className="font-[500] text-2xl mt-4 text-[#1A5D1A] font-stoke text-center uppercase">
            IHA Education and Training
          </h4>

          <div className="flex flex-col px-8 font-medium gap-4 items-start w-full mt-5">
            <ul className="list-disc space-y-2">
              <li>Human Resource Potential Development & Specialized Training Programs</li>
              <li>Transformative Self-improvement Techniques & Life Skills</li>
              <li>Evidence-based Solutions for Real-life Challenges</li>
              <li>Comprehensive Education Programs</li>
              <li>Management studies & Leadership Training</li>
              <li>Advanced Skill Development</li>
              <li>Community Awareness Programs</li>
            </ul>
          </div>
        </div>
        <div className="border rounded-2xl shadow-xl flex flex-col bg-white items-center p-5 lg:p-10 lg:w-[33%]">
          <img src={services2} alt="" className="w-[24%] object-contain" />
          <h4 className="font-[500] text-2xl lg:text-2xl mt-4 text-[#1A5D1A] font-stoke text-center">
            IHA HOTELS & <br /> HOSTELS
          </h4>

          <div className="flex flex-col px-8  font-medium items-start w-full gap-4 mt-5">
            <ul className=" list-disc space-y-2">
              <li>Immersive Experiential Stay Programs</li>
              <li>Authentic Cultural Immersion Experiences</li>
              <li>Rejuvenating Nature Retreat Programs</li>
              <li>Holistic Wellness & Renewal Packages</li>
              <li>Traditional Kerala Hospitality Services</li>
              <li>Curated Local Cultural Experiences</li>
            </ul>
          </div>
        </div>
        <div className="border rounded-2xl shadow-xl flex flex-col bg-white items-center p-5 lg:p-10 lg:w-[33%]">
          <img src={services3} alt="" className="w-[24%] object-contain" />
          <h4 className="font-[500] text-2xl lg:text-2xl mt-4 text-[#1A5D1A] font-stoke text-center">
            IHA EVENTS
          </h4>

          <div className="flex flex-col px-8 font-medium items-start w-full gap-4 mt-5">
            <ul className=" list-disc space-y-2">
              <li>Cultural, Artistic & Literary Celebrations</li>
              <li>Human Resource Development Conferences</li>
              <li>Educational Forums & Interactive Workshops</li>
              <li>Community Engagement Programs</li>
            </ul>
          </div>
        </div>
      </div>
      <button className="flex gap-2 items-center border-[3px] text-[#1A5D1A] py-1.5 px-2.5 font-semibold rounded-lg border-[#1A5D1A] hover:bg-green-100">
        Explore Now <ChevronDoubleRightIcon className="w-5" />
      </button>
    </div>
  );
}

export default OurServices;
