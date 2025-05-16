import React from "react";
import services3 from "../../assets/Images/Home/services3.png";
import sd1 from "../../assets/Images/Services/sd1.png";
import sd2 from "../../assets/Images/Services/sd2.png";
import sd3 from "../../assets/Images/Services/sd3.png";

import { BiSolidRightArrow } from "react-icons/bi";
import { MdOutlineSelfImprovement, MdHealthAndSafety, MdHotel, MdSchool, MdChurch } from "react-icons/md";
import { GiBrain, GiMountainClimbing, GiPartyPopper, GiGraduateCap } from "react-icons/gi";
import { TbBookFilled, TbSocial } from "react-icons/tb";
import { FaTheaterMasks, FaBook, FaPalette, FaRunning } from "react-icons/fa";
import leaf from "../../assets/Images/Shared/leaf.png";
import leafM from "../../assets/Images/Shared/leafMirror.png";
import bubble from "../../assets/Images/Shared/Ellipse1.png";
import "../CustomCss/Animation.css";
import lOGO from "../../assets/Images/Home/ihalogo.jpeg";

import { useNavigate } from "react-router-dom";

function ServicesPreview() {
    const navigate = useNavigate();
    
    return (
        <section className="mx-5 xl:mx-40 flex flex-col items-center py-20 font-mont relative">
            <img
                src={bubble}
                alt="Decorative bubble"
                className="absolute w-[15%] opacity-20 -bottom-[10%] -rotate-90 right-[8%] float2"
            />
            <img
                src={bubble}
                alt="Decorative bubble"
                className="absolute w-[15%] opacity-20 top-[10%] -rotate-90 left-0 float"
            />
            <img
                src={leaf}
                alt="Decorative leaf"
                className="absolute w-[30%] lg:w-[15%] bottom-0 lg:-bottom-[10%] -rotate-90 -left-[10%] lg:-left-[15%]"
            />
            <img
                src={leaf}
                alt="Decorative leaf"
                className="absolute w-[30%] lg:w-[15%] top-0 -left-[8%] lg:-left-[15%]"
            />
            <img
                src={leafM}
                alt="Decorative mirrored leaf"
                className="absolute w-[25%] lg:w-[12%] top-[40%] rotate-90 -right-[10%] lg:-right-[16%]"
            />
            
            <h1 className="text-[#1A5D1A] font-bold text-3xl md:text-5xl">
                Our Comprehensive Services
            </h1>
            
            <p className="w-[90%] md:w-[70%] lg:w-[60%] text-center my-6 text-lg">
                IHA Karnakshethras are centers of excellence providing <strong>innovative human-centered solutions</strong> through the &quot;ihavasa sutra&quot; methodology, addressing all aspects of life, wellness, and personal development.
            </p>

            <img src={lOGO} className="w-[50%] md:w-[20%] xl:w-[8%] my-5" alt="IHA Logo" />

            <h2 className="text-[#1A5D1A]  text-2xl md:text-3xl font-lucida">IHA</h2>
            <h3 className="font-semibold my-1 text-xl text-center font-lucida">
                Innovative Human Resource Applications
            </h3>
            <p className="text-center text-lg mb-12 md:text-base mt-2">
                Professional facilitation hubs transforming lives through <br /> 
                personalized development programs and happiness-focused activities.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
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
        </section>
    );
}

export default ServicesPreview;
