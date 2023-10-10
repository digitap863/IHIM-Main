import React from 'react'
import { GiBrain } from 'react-icons/gi'
import { IoMan } from 'react-icons/io5'
import { MdOutlineSelfImprovement } from 'react-icons/md'
import leafM from '../../assets/Images/Shared/leafMirror.png'
import bubble from '../../assets/Images/Shared/Ellipse1.png'

function EducationTraining() {
    return (
        <div className='font-mont flex items-center justify-center flex-col relative gap-28'>
            <img src={leafM} alt="" className='absolute w-[10%] rotate-90 top-[30%] -right-[2%]' />
            <img src={bubble} alt="" className='absolute w-[10%] rotate-90 top-[60%] -left-[5%] opacity-30 float' />

            <h5 className='text-[#1A5D1A] text-center text-4xl font-bold'>Education and Training</h5>
            <div className='flex gap-10 w-[75%]'>
                <div className='bg-white relative rounded-3xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 ease-in-out duration-300 px-5 py-16 '>
                    <div className='bg-[#1A5D1A] rounded-full text-5xl flex justify-center items-center h-20 w-20 text-white absolute -top-[10%]'><IoMan /></div>
                    <h3 className='font-semibold text-2xl mb-7'>Human Resource Potential Development studies and Training</h3>
                    <p className='leading-relaxed text-[0.9rem] text-justify'>{`Human Resource Potential Development Studies and Training" focuses on unlocking and enhancing the capabilities of individuals within an organization. This comprehensive program involves identifying strengths, addressing areas for growth, and providing tailored training to optimize employee skills, productivity, and overall contribution to the company's success.`}</p>
                </div>
                <div className='bg-white relative rounded-3xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 ease-in-out duration-300 px-5 py-16 '>
                    <div className='bg-[#1A5D1A] rounded-full text-5xl flex justify-center items-center h-20 w-20 text-white absolute -top-[10%]'><MdOutlineSelfImprovement /></div>
                    <h3 className='font-semibold text-2xl mb-7'>Self-improvement Techniques and Skills</h3>
                    <p className='leading-relaxed text-[0.9rem] text-justify'>{`Self-Improvement Techniques and Skills" encompasses a variety of strategies and abilities aimed at enhancing personal growth and development. This multifaceted approach involves learning, practicing, and implementing methods to refine one's mindset, habits, communication, and overall well-being, leading to increased self-awareness, confidence, and a more fulfilling life journey."`}</p>
                </div>
                <div className='bg-white relative rounded-3xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 ease-in-out duration-300 px-5 py-16 '>
                    <div className='bg-[#1A5D1A] rounded-full text-5xl flex justify-center items-center h-20 w-20 text-white absolute -top-[10%]'><GiBrain /></div>
                    <h3 className='font-semibold text-2xl mb-7'>Solution finding for Real- life situations</h3>
                    <p className='leading-relaxed text-[0.9rem] text-justify'>{`"Solution Discovery for Real-Life Challenges" involves a practical and strategic process of identifying effective resolutions to everyday problems. Through critical analysis, creative thinking, and strategic planning, this approach empowers individuals to navigate and overcome real-world obstacles, resulting in tangible and positive outcomes."   `}</p>
                </div>
            </div>
        </div>
    )
}

export default EducationTraining