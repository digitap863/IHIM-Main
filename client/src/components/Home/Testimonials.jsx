import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import "swiper/css/autoplay";
import stars from '../../assets/Images/Home/stars.png'
import testi1 from '../../assets/Images/Home/testi1.png'
import testi2 from '../../assets/Images/Home/testi2.png'
import testi3 from '../../assets/Images/Home/testi3.png'
import quotes from '../../assets/Images/Home/quotesicon.png'
import leaf from '../../assets/Images/Shared/leaf.png'
import leafM from '../../assets/Images/Shared/leafMirror.png'
import bubble from '../../assets/Images/Shared/Ellipse1.png'

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
        <div className='flex flex-col items-center font-mont px-5 lg:px-20 relative overflow'>
            <img src={bubble} alt="" className='absolute w-[20%] opacity-10 -bottom-[10%] -right-[10%] float' />
            <img src={bubble} alt="" className='absolute w-[40%] lg:w-[10%] opacity-30 top-[10%] right-[2%]' />
            <img src={leaf} alt="" className='absolute w-[20%] lg:w-[10%]  top-[10%] -right-[2%] rotate-90' />
            <img src={leafM} alt="" className='absolute w-[20%] lg:w-[11%]  bottom-[5%] -left-[2%] -rotate-90' />
            <h1 className='text-[#1A5D1A] font-bold text-center lg:text-left text-[2.4rem] lg:text-5xl'>OUR CUSTOMER EXPERIENCES</h1>
            <div className='flex w-full mt-16 relative max-w-screen-xl'>

                    <Swiper
                        modules={[Autoplay]}
                        className='flex w-full p-10'
                        spaceBetween={45}
                        autoplay={true}
                        loop={true}
                        breakpoints={{
                            // when window width is less than 640px (mobile)
                            640: {
                                slidesPerView: 1,
                            },
                            // when window width is between 640px and 1024px (tablet)
                            768: {
                                slidesPerView: 2,
                            },
                            // when window width is greater than 1024px (laptop)
                            1025: {
                                slidesPerView: 3,
                            },
                        }}
   
                    >
                        {users.map((elem,i) => (
                            <SwiperSlide className='w-full' key={i}>
                                <div className='h-[26rem] shadow-inner flex flex-col justify-between items-center rounded-2xl lg:rounded-[3rem] relative bg-[#f5f5f5]'>
                                    <h2 className='text-xl mt-7 font-semibold'>{elem.name}</h2>
                                    <img src={stars} alt="stars" className='-mt-10 w-[35%]' />
                                    <img src={elem.img} alt="user" className='w-[25%] absolute top-[28%] z-10' />
                                    <div className='bg-[#1A5D1A] h-64 rounded-b-2xl lg:rounded-b-[3rem] rounded-t-[2rem] flex items-center p-10 w-full relative'>
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