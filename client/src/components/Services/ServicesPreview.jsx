import React from "react";
import services2 from "../../assets/Images/Home/services2.png";
import services3 from "../../assets/Images/Home/services3.png";
import sd1 from "../../assets/Images/Services/sd1.png";
import sd2 from "../../assets/Images/Services/sd2.png";
import sd3 from "../../assets/Images/Services/sd3.png";

import { BiSolidRightArrow } from "react-icons/bi";
import { IoMan } from "react-icons/io5";
import { MdOutlineSelfImprovement } from "react-icons/md";
import { GiBrain } from "react-icons/gi";
import { TbBookFilled } from "react-icons/tb";
import { PiPlantFill } from "react-icons/pi";
import { BsCalendar2DateFill } from "react-icons/bs";
import { GiWitchFlight } from "react-icons/gi";
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
                IHA Karnakshethras are centers of excellence providing <strong>innovative human-centered solutions</strong> through the "ihavasa sutra" methodology, addressing all aspects of life, wellness, and personal development.
            </p>

            <img src={lOGO} className="w-[50%] md:w-[20%] xl:w-[20%] my-5" alt="IHA Logo" />

            <h2 className="text-[#1A5D1A] font-stoke text-2xl md:text-3xl">IHA</h2>
            <h3 className="font-semibold my-1 text-xl text-center">
                Innovative Human Resource Applications
            </h3>
            <p className="text-center text-lg mb-12 md:text-base mt-2">
                Professional facilitation hubs transforming lives through <br /> 
                personalized development programs and happiness-focused activities.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                <div className="rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 pt-8 pb-20 flex flex-col items-center relative gap-5 bg-white border-t-4 border-t-[#1A5D1A]">
                    <img src={sd1} alt="Education and Training icon" className="w-[25%]" />
                    <h2 className="text-[#1A5D1A] font-bold text-2xl text-center font-stoke px-4">
                        IHA EDUCATION AND TRAINING
                    </h2>
                    <div className="flex flex-col px-8 font-medium gap-4 items-start w-full">
                        <p className="flex items-start gap-3">
                            <span className="text-3xl text-[#1A5D1A] mt-1">
                                <IoMan />
                            </span>
                            <span>Human Resource Potential Development & Specialized Training Programs</span>
                        </p>
                        <p className="flex items-start gap-3">
                            <span className="text-3xl text-[#1A5D1A] mt-1">
                                <MdOutlineSelfImprovement />
                            </span>
                            <span>Transformative Self-improvement Techniques & Life Skills</span>
                        </p>
                        <p className="flex items-start gap-3">
                            <span className="text-3xl text-[#1A5D1A] mt-1">
                                <GiBrain />
                            </span>
                            <span>Evidence-based Solutions for Real-life Challenges</span>
                        </p>
                        <p className="flex items-start gap-3">
                            <span className="text-3xl text-[#1A5D1A] mt-1">
                                <TbBookFilled />
                            </span>
                            <span>Comprehensive Education Programs</span>
                        </p>
                        <ul className="ml-12 list-disc space-y-1">
                            <li>Management studies & Leadership Training</li>
                            <li>Advanced Skill Development</li>
                            <li>Community Awareness Programs</li>
                        </ul>
                    </div>
                    <button
                        onClick={() => navigate("/all-services", { state: 300 })}
                        className="flex items-center gap-2 border-[#1A5D1A] border-2 rounded-lg px-6 py-2.5 text-[#1A5D1A] font-semibold absolute bottom-6 hover:bg-green-100 transition-colors"
                        aria-label="Learn more about Education and Training"
                    >
                        Learn More <BiSolidRightArrow />
                    </button>
                </div>
                
                <div className="rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 pt-8 pb-20 flex flex-col items-center relative gap-5 bg-white border-t-4 border-t-[#1A5D1A]">
                    <img src={services2} alt="Hotels and Hostels icon" className="w-[25%]" />
                    <h2 className="text-[#1A5D1A] font-bold text-2xl uppercase text-center font-stoke px-4">
                        IHA HOTELS AND HOSTELS
                    </h2>
                    <div className="flex flex-col px-8 font-medium items-start w-full gap-4">
                        <p className="flex items-start gap-3">
                            <span className="text-3xl text-[#1A5D1A] mt-1">
                                <BsCalendar2DateFill />
                            </span>
                            <span>Immersive Experiential Stay Programs</span>
                        </p>
                        <ul className="ml-12 list-disc space-y-2">
                            <li>Authentic Cultural Immersion Experiences</li>
                            <li>Rejuvenating Nature Retreat Programs</li>
                            <li>Holistic Wellness & Renewal Packages</li>
                            <li>Traditional Kerala Hospitality Services</li>
                            <li>Curated Local Cultural Experiences</li>
                        </ul>
                    </div>
                    <button
                        onClick={() => navigate("/all-services")}
                        className="flex items-center gap-2 border-[#1A5D1A] border-2 rounded-lg px-6 py-2.5 text-[#1A5D1A] font-semibold absolute bottom-6 hover:bg-green-100 transition-colors"
                        aria-label="Learn more about Hotels and Hostels"
                    >
                        Learn More <BiSolidRightArrow />
                    </button>
                </div>
                
                <div className="rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 pt-8 pb-20 flex flex-col items-center relative gap-5 bg-white border-t-4 border-t-[#1A5D1A]">
                    <img src={services3} alt="Events icon" className="w-[25%]" />
                    <h2 className="text-[#1A5D1A] font-bold text-2xl text-center font-stoke px-4">
                        IHA EVENTS
                    </h2>
                    <div className="flex flex-col px-8 font-medium items-start w-full gap-4">
                        <p className="flex items-start gap-3">
                            <span className="text-3xl text-[#1A5D1A] mt-1">
                                <TbBookFilled />
                            </span>
                            <span>Professional Theatre & Event Management</span>
                        </p>
                        <ul className="ml-12 list-disc space-y-2">
                            <li>Cultural, Artistic & Literary Celebrations</li>
                            <li>Human Resource Development Conferences</li>
                            <li>Educational Forums & Interactive Workshops</li>
                            <li>Community Engagement Programs</li>
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
                
                <div className="rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 pt-8 pb-20 flex flex-col items-center relative gap-5 bg-white border-t-4 border-t-[#1A5D1A]">
                    <img src={sd2} alt="Healthcare icon" className="w-[25%]" />
                    <h2 className="text-[#1A5D1A] font-bold text-2xl text-center font-stoke px-4">
                        IHA HEALTHCARE
                    </h2>
                    <div className="flex flex-col px-8 font-medium items-start w-full gap-4">
                        <p className="flex items-start gap-3">
                            <span className="text-3xl text-[#1A5D1A] mt-1">
                                <IoMan />
                            </span>
                            <span>Comprehensive Health & Wellness Centers</span>
                        </p>
                        <p className="flex items-start gap-3">
                            <span className="text-3xl text-[#1A5D1A] mt-1">
                                <MdOutlineSelfImprovement />
                            </span>
                            <span>Sustainable Healthcare Infrastructure Development</span>
                        </p>
                        <p className="flex items-start gap-3">
                            <span className="text-3xl text-[#1A5D1A] mt-1">
                                <PiPlantFill />
                            </span>
                            <span>Integrated Healthcare Solutions</span>
                        </p>
                        <ul className="ml-12 list-disc space-y-1">
                            <li>Health Screening & Assessment Programs</li>
                            <li>Specialized Medical Referral Services</li>
                            <li>Innovative Healthcare Research Initiatives</li>
                        </ul>
                    </div>
                    <button
                        onClick={() => navigate("/all-services", { state: 1000 })}
                        className="flex items-center gap-2 border-[#1A5D1A] border-2 rounded-lg px-6 py-2.5 text-[#1A5D1A] font-semibold absolute bottom-6 hover:bg-green-100 transition-colors"
                        aria-label="Learn more about Healthcare"
                    >
                        Learn More <BiSolidRightArrow />
                    </button>
                </div>
                
                <div className="rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 pt-8 pb-20 flex flex-col items-center relative gap-5 bg-white border-t-4 border-t-[#1A5D1A]">
                    <img src={sd3} alt="Tourism icon" className="w-[25%]" />
                    <h2 className="text-[#1A5D1A] font-bold text-2xl text-center font-stoke px-4">
                        IHA TOURISM
                    </h2>
                    <div className="flex flex-col px-8 font-medium items-start w-full gap-4">
                        <p className="flex items-start gap-3">
                            <span className="text-3xl text-[#1A5D1A] mt-1">
                                <TbBookFilled />
                            </span>
                            <span className="font-semibold">Educational Tourism</span>
                        </p>
                        <p className="ml-10">
                            "Ente Keralam" - Journey through Kerala's rich history and cultural heritage
                        </p>
                        <p className="flex items-start gap-3">
                            <span className="text-3xl text-[#1A5D1A] mt-1">
                                <PiPlantFill />
                            </span>
                            <span className="font-semibold">Eco-Tourism Experiences</span>
                        </p>
                        <p className="ml-10">"Kalladikkodan Beauty" - Sustainable nature exploration</p>
                        <p className="flex items-start gap-3">
                            <span className="text-3xl text-[#1A5D1A] mt-1">
                                <BsCalendar2DateFill />
                            </span>
                            <span className="font-semibold">Festival Tourism</span>
                        </p>
                        <p className="ml-10">
                            "For thy Eyes & Minds" - Immersive festival experiences across Kerala
                        </p>
                        <p className="flex items-start gap-3">
                            <span className="text-3xl text-[#1A5D1A] mt-1">
                                <GiWitchFlight />
                            </span>
                            <span className="font-semibold">Adventure Tourism</span>
                        </p>
                        <p className="ml-10">"Hillocks & Brooks" - Thrilling outdoor adventures</p>
                    </div>
                    <button
                        onClick={() => navigate("/all-services", { state: 1500 })}
                        className="flex items-center gap-2 border-[#1A5D1A] border-2 rounded-lg px-6 py-2.5 text-[#1A5D1A] font-semibold absolute bottom-6 hover:bg-green-100 transition-colors"
                        aria-label="Learn more about Tourism"
                    >
                        Learn More <BiSolidRightArrow />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default ServicesPreview;
