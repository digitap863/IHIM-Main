import React, { useState } from "react";
import services2 from "../../assets/Images/Home/services2.png";
import services3 from "../../assets/Images/Home/services3.png";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import leaf from "../../assets/Images/Shared/leaf.png";
import leafM from "../../assets/Images/Shared/leafMirror.png";
  import bubble from "../../assets/Images/Shared/Ellipse1.png";
import sd1 from "../../assets/Images/Services/sd1.png";
import ihaLogo from "../../assets/Images/Home/ihalogo.jpeg";
import { MdChurch, MdHealthAndSafety, MdHotel, MdOutlineSelfImprovement, MdSchool } from "react-icons/md";
import { GiBrain, GiGraduateCap, GiMountainClimbing, GiPartyPopper } from "react-icons/gi";
import { BiSolidRightArrow } from "react-icons/bi";
import { TbBookFilled, TbSocial } from "react-icons/tb";
import { FaBook, FaPalette, FaRunning, FaTheaterMasks } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import sd2 from "../../assets/Images/Services/sd2.png";
import sd3 from "../../assets/Images/Services/sd3.png";


function OurServices() {
  const navigate = useNavigate();
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
        className="w-[25%] md:w-[16%] xl:w-[8%] mb-8   "
        alt=""
      />
      <h1 className="text-[#1A5D1A] font-lucida text-2xl md:text-4xl">IHA </h1>
      <h5 className="font-semibold my-1 font-lucida">
        (Innovative human resource applications)
      </h5>
      <p className="text-center text-tiny mb-5 md:text-base mt-2">
        The Multi Faceted Activity Hub. <br /> Iha karmena shri sambhavati.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-screen-2xl mx-auto">
                <div className="rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 pt-8 pb-20 flex flex-col items-center relative gap-5 bg-white border-t-4 border-t-[#1A5D1A]">
                    <img src={sd2} alt="Hospitality icon" className="w-[25%]" />
                    <h2 className="text-[#1A5D1A] font-bold text-2xl text-center font-stoke px-4">
                       I. IHA HOSPITALITY
                    </h2>
                    <div className="flex flex-col px-8 font-medium gap-4 items-start w-full">
                        <p className="flex items-start gap-3">
                            <span className="text-3xl text-[#1A5D1A] mt-1">
                                <MdHealthAndSafety />
                            </span>
                            <span>IHA Healthcare</span>
                        </p>
                        <ul className="ml-12 list-disc space-y-1">
                            <li>Screening Services</li>
                            <li>Referral Services</li>
                            <li>Research Initiatives</li>
                        </ul>
                        <p className="flex items-start gap-3">
                            <span className="text-3xl text-[#1A5D1A] mt-1">
                                <MdHotel />
                            </span>
                            <span>Hospitality and Allied Management Studies</span>
                        </p>
                        <p className="flex items-start gap-3">
                            <span className="text-3xl text-[#1A5D1A] mt-1">
                                <MdSchool />
                            </span>
                            <span>Training for Hostel, Hotel and Hospital Jobs</span>
                        </p>
                        <p className="flex items-start gap-3">
                            <span className="text-3xl text-[#1A5D1A] mt-1">
                                <GiBrain />
                            </span>
                            <span>Add-on Skill Development Studies and Practices</span>
                        </p>
                    </div>
                    <button
                        onClick={() => navigate("/all-services", { state: 300 })}
                        className="flex items-center gap-2 border-[#1A5D1A] border-2 rounded-lg px-6 py-2.5 text-[#1A5D1A] font-semibold absolute bottom-6 hover:bg-green-100 transition-colors"
                        aria-label="Learn more about Hospitality"
                    >
                        Learn More <BiSolidRightArrow />
                    </button>
                </div>

                <div className="rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 pt-8 pb-20 flex flex-col items-center relative gap-5 bg-white border-t-4 border-t-[#1A5D1A]">
                    <img src={sd3} alt="Tourism icon" className="w-[25%]" />
                    <h2 className="text-[#1A5D1A] font-bold text-2xl text-center font-stoke px-4">
                      II. IHA TOURISM
                    </h2>
                    <div className="flex flex-col px-8 font-medium items-start w-full gap-4">
                        <ul className="ml-12 space-y-2">
                            <li className="flex items-center gap-2">
                                <span className="text-2xl text-[#1A5D1A]">
                                    <GiBrain />
                                </span>
                                Eco Tourism
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-2xl text-[#1A5D1A]">
                                    <GiMountainClimbing />
                                </span>
                                Adventure Tourism
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-2xl text-[#1A5D1A]">
                                    <MdChurch />
                                </span>
                                Religious Tourism
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-2xl text-[#1A5D1A]">
                                    <GiPartyPopper />
                                </span>
                                Festival Tourism
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-2xl text-[#1A5D1A]">
                                    <GiGraduateCap />
                                </span>
                                Educational Tourism
                            </li>
                        </ul>
                    </div>
                    <button
                        onClick={() => navigate("/all-services", { state: 1000 })}
                        className="flex items-center gap-2 border-[#1A5D1A] border-2 rounded-lg px-6 py-2.5 text-[#1A5D1A] font-semibold absolute bottom-6 hover:bg-green-100 transition-colors"
                        aria-label="Learn more about Tourism"
                    >
                        Learn More <BiSolidRightArrow />
                    </button>
                </div>

                <div className="rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 pt-8 pb-20 flex flex-col items-center relative gap-5 bg-white border-t-4 border-t-[#1A5D1A]">
                    <img src={sd1} alt="Academia icon" className="w-[25%]" />
                    <h2 className="text-[#1A5D1A] font-bold text-2xl text-center font-stoke px-4">
                        III. IHA ACADEMIA
                    </h2>
                    <div className="flex flex-col px-8 font-medium items-start w-full gap-4">
                        <p className="flex items-start gap-3">
                            <span className="text-3xl text-[#1A5D1A] mt-1">
                                <TbBookFilled />
                            </span>
                            <span>Education and Training</span>
                        </p>
                        <ul className="ml-12 space-y-2">
                            <li className="flex items-center gap-2">
                                <span className="text-2xl text-[#1A5D1A]">
                                    <MdSchool />
                                </span>
                                Management Studies
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-2xl text-[#1A5D1A]">
                                    <GiBrain />
                                </span>
                                Skill Development
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-2xl text-[#1A5D1A]">
                                    <MdOutlineSelfImprovement />
                                </span>
                                Training for Advanced Applications
                            </li>
                        </ul>
                    </div>
                    <button
                        onClick={() => navigate("/all-services", { state: 1500 })}
                        className="flex items-center gap-2 border-[#1A5D1A] border-2 rounded-lg px-6 py-2.5 text-[#1A5D1A] font-semibold absolute bottom-6 hover:bg-green-100 transition-colors"
                        aria-label="Learn more about Academia"
                    >
                        Learn More <BiSolidRightArrow />
                    </button>
                </div>

                <div className="rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 pt-8 pb-20 flex flex-col items-center relative gap-5 bg-white border-t-4 border-t-[#1A5D1A]">
                    <img src={services3} alt="Events icon" className="w-[25%]" />
                    <h2 className="text-[#1A5D1A] font-bold text-2xl text-center font-stoke px-4">
                        IV. IHA EVENTS
                    </h2>
                    <div className="flex flex-col px-8 font-medium items-start w-full gap-4">
                        <ul className="ml-12 space-y-2">
                            <li className="flex items-center gap-2">
                                <span className="text-2xl text-[#1A5D1A]">
                                    <TbSocial />
                                </span>
                                Social Events
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-2xl text-[#1A5D1A]">
                                    <FaTheaterMasks />
                                </span>
                                Cultural Events
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-2xl text-[#1A5D1A]">
                                    <FaBook />
                                </span>
                                Literary Events
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-2xl text-[#1A5D1A]">
                                    <FaPalette />
                                </span>
                                Art and Stage Events
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-2xl text-[#1A5D1A]">
                                    <FaRunning />
                                </span>
                                Sports Events
                            </li>
                        </ul>
                    </div>
                    <button
                        onClick={() => navigate("/all-services")}
                        className="flex items-center gap-2 border-[#1A5D1A] border-2 rounded-lg px-6 py-2.5 text-[#1A5D1A] font-semibold absolute bottom-6 hover:bg-green-100 transition-colors"
                        aria-label="Learn more about Events"
                    >
                        Learn More <BiSolidRightArrow />
                    </button>
                </div>
            </div>
      {/* <button className="flex gap-2 items-center border-[3px] text-[#1A5D1A] py-1.5 px-2.5 font-semibold rounded-lg border-[#1A5D1A] hover:bg-green-100">
        Explore Now <ChevronDoubleRightIcon className="w-5" />
      </button> */}
    </div>
  );
}

export default OurServices;
