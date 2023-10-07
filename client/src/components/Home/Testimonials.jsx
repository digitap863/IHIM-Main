import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import stars from '../../assets/Images/Home/stars.png'
import testi1 from '../../assets/Images/Home/testi1.png'
import testi2 from '../../assets/Images/Home/testi2.png'
import testi3 from '../../assets/Images/Home/testi3.png'
import quotes from '../../assets/Images/Home/quotesicon.png'

function Testimonials() {
    const users = [
        {
            name: "Williama, UAE",
            img: testi1
        },
        {
            name: "Natasha, Canada",
            img: testi2
        },
        {
            name: "Harikumar, Kochi",
            img: testi3
        },
        {
            name: "James, USA",
            img: testi1
        },
        {
            name: "James, USA",
            img: testi1
        },
         {
            name: "James, USA",
            img: testi1
        },
        {
            name: "James, USA",
            img: testi1
        },

    ]
    return (
        <div className='flex flex-col items-center font-mont mx-20'>
            <h1 className='text-[#1A5D1A] font-bold text-5xl'>OUR CUSTOMER EXPERIENCES</h1>
            <div className='flex w-[90%] mt-16'>
                <Swiper
                    modules={[Autoplay]}
                    className='flex'
                    spaceBetween={45}
                    slidesPerView={3}
                    autoplay
                    loop={true}
                >
                    {users.map((elem) => (
                        <SwiperSlide className='w-full' key={elem.name}>
                            <div className='h-[26rem] shadow-2xl flex flex-col justify-between items-center rounded-[3rem] relative'>
                                <h2 className='text-xl mt-7 font-semibold'>{elem.name}</h2>
                                <img src={stars} alt="stars" className='-mt-10 w-[35%]' />
                                <img src={elem.img} alt="user" className='w-[25%] absolute top-[28%] z-10' />
                                <div className='bg-[#1A5D1A] h-64 rounded-b-[3rem] rounded-t-[2rem] flex items-center p-10 w-full relative'>
                                    <img src={quotes} alt="" className='-top-2 left-0 w-[40%] absolute' />
                                    <p className='z-10 mt-12 text-white'>Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt
                                        ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Testimonials