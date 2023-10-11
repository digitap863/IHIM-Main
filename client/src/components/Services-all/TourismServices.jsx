import React from 'react'
import { BsCalendar2DateFill } from 'react-icons/bs'
import { PiPlantFill } from 'react-icons/pi'
import { TbBookFilled } from 'react-icons/tb'
import { GiWitchFlight } from "react-icons/gi"
import leaf from '../../assets/Images/Shared/leaf.png'
import leafM from '../../assets/Images/Shared/leafMirror.png'
import bubble from '../../assets/Images/Shared/Ellipse1.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'

function TourismServices() {
    return (
        <div className='mt-20 font-mont flex-col justify-center items-center flex relative mb-32 lg:mb-0'>
            <img src={leafM} alt="" className='absolute w-[10%] rotate-90 bottom-[30%] -right-[2%]' />
            <img src={bubble} alt="" className='absolute w-[15%] opacity-20 float rotate-90 bottom-[30%] right-[30%]' />
            <img src={bubble} alt="" className='absolute w-[15%] opacity-20 float2 rotate-90 top-[10%] left-[30%]' />
            <img src={bubble} alt="" className='absolute w-[9%] opacity-20 rotate-90 top-[40%] -left-[1%]' />
            <img src={leaf} alt="" className='absolute w-[10%] -rotate-90 top-[10%] -left-[2%]' />
            <h5 className='text-[#1A5D1A] text-center text-4xl font-bold'>Tourism And Services</h5>
            <div className='w-[80%] grid-cols-2 gap-10 mt-20 hidden lg:grid'>
                <div className='bg-white relative rounded-3xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 ease-in-out duration-300 px-10 py-16 '>
                    <div className='bg-[#1A5D1A] rounded-full text-5xl flex justify-center items-center h-20 w-20 text-white absolute -top-[10%]'><TbBookFilled /></div>
                    <h3 className='font-semibold text-2xl mb-7'>Edu - Tours</h3>
                    <p className='leading-relaxed text-[0.9rem] text-justify'>{`Ente Keralam, Embark on a Fascinating Journey: Exploring Kerala's History and Culture" offers a captivating expedition through the rich heritage and traditions of Kerala. This immersive experience delves into the region's past, showcasing its historical landmarks, artistic expressions, culinary delights, and local customs, providing a deeper understanding of Kerala's vibrant tapestry of history and culture."`}</p>
                </div>
                <div className='bg-white relative rounded-3xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 ease-in-out duration-300 px-10 py-16 '>
                    <div className='bg-[#1A5D1A] rounded-full text-5xl flex justify-center items-center h-20 w-20 text-white absolute -top-[10%]'><PiPlantFill /></div>
                    <h3 className='font-semibold text-2xl mb-7'>Eco - Tours</h3>
                    <p className='leading-relaxed text-[0.9rem] text-justify'>{`Eco-Tours: Embrace Nature's Beauty Responsibly. Immerse yourself in sustainable adventures that showcase breathtaking landscapes, diverse ecosystems, and local cultures. Our eco-tours prioritize environmental conservation and offer enriching experiences that educate and inspire while leaving a minimal ecological footprint.`}</p>
                </div>
                <div className='bg-white relative rounded-3xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 ease-in-out duration-300 px-10 py-16 mt-20'>
                    <div className='bg-[#1A5D1A] rounded-full text-5xl flex justify-center items-center h-20 w-20 text-white absolute -top-[10%]'><BsCalendar2DateFill /></div>
                    <h3 className='font-semibold text-2xl mb-7'>Festival Tours</h3>
                    <p className='leading-relaxed text-[0.9rem] text-justify'>{`"For Thy Eyes & Minds: Unveiling Kerala's Festivals" is an immersive journey that transports you to the heart of Kerala's vibrant cultural tapestry. Delve into a kaleidoscope of festivities that celebrate traditions, artistry, and spirituality. Witness captivating rituals, colorful processions, and age-old customs that ignite your senses and broaden your horizons, offering a deeper connection to the soul of Kerala's heritage.`}</p>
                </div>
                <div className='bg-white relative rounded-3xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 ease-in-out duration-300 px-10 py-16 mt-20'>
                    <div className='bg-[#1A5D1A] rounded-full text-5xl flex justify-center items-center h-20 w-20 text-white absolute -top-[10%]'><GiWitchFlight /></div>
                    <h3 className='font-semibold text-2xl mb-7'>Adventure Tours</h3>
                    <p className='leading-relaxed text-[0.9rem] text-justify'>{`“Hillocks & Brooks”, Adventure Awaits: Embark on Thrilling Expeditions. Our adventure tours are tailored for the daring and curious souls seeking adrenaline-pumping experiences. Traverse breathtaking landscapes, conquer challenging terrains, and immerse yourself in exhilarating activities while forging unforgettable memories. Discover new horizons and push your limits with our expertly guided adventure tours.`}</p>
                </div>
            </div>
            <div className='lg:hidden w-full relative z-10'>
                <Swiper
                    modules={[Autoplay, Scrollbar, Navigation]}
                    scrollbar={{
                        hide: false,
                    }}
                    className='flex'
                    spaceBetween={45}
                    autoplay={{ delay: 1500 }}
                    loop={true}
                    navigation={{
                        nextEl: ".next-button2",
                        prevEl: ".prev-button2",
                        clickable: true,
                    }}
                    breakpoints={{
                        // when window width is less than 640px (mobile)
                        640: {
                            slidesPerView: 1,
                        },
                        // when window width is between 640px and 1024px (tablet)
                        1024: {
                            slidesPerView: 2,
                        },
                        // when window width is greater than 1024px (laptop)
                        1025: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    <SwiperSlide className='w-full relative'>
                        <div className='pt-20 pb-4 px-5'>
                            <div className='bg-white py-5  relative rounded-3x shadow-xl lg:shadow-lg hover:shadow-xl transform hover:-translate-y-1 ease-in-out duration-300 px-5 lg:py-16 '>
                                <div className='bg-[#1A5D1A] rounded-full text-4xl lg:text-5xl flex justify-center items-center h-16 w-16 lg:h-20 lg:w-20 text-white absolute -top-[22%] lg:-top-[10%]'><TbBookFilled /></div>
                                <h3 className='font-semibold text-xl lg:text-2xl mb-7'>Edu - Tours</h3>
                                <p className='leading-relaxed text-[0.8rem] lg:text-[0.9rem] text-justify'>{`Ente Keralam, Embark on a Fascinating Journey: Exploring Kerala's History and Culture" offers a captivating expedition through the rich heritage and traditions of Kerala. This immersive experience delves into the region's past, showcasing its historical landmarks, artistic expressions, culinary delights, and local customs, providing a deeper understanding of Kerala's vibrant tapestry of history and culture."`}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='w-full relative'>
                        <div className='pt-20 pb-4 px-5'>
                            <div className='bg-white py-5  relative rounded-3x shadow-xl lg:shadow-lg hover:shadow-xl transform hover:-translate-y-1 ease-in-out duration-300 px-5 lg:py-16 '>
                                <div className='bg-[#1A5D1A] rounded-full text-4xl lg:text-5xl flex justify-center items-center h-16 w-16 lg:h-20 lg:w-20 text-white absolute -top-[22%] lg:-top-[10%]'><PiPlantFill /></div>
                                <h3 className='font-semibold text-xl lg:text-2xl mb-7'>Eco - Tours</h3>
                                <p className='leading-relaxed text-[0.8rem] lg:text-[0.9rem] text-justify'>{`Eco-Tours: Embrace Nature's Beauty Responsibly. Immerse yourself in sustainable adventures that showcase breathtaking landscapes, diverse ecosystems, and local cultures. Our eco-tours prioritize environmental conservation and offer enriching experiences that educate and inspire while leaving a minimal ecological footprint.`}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='w-full relative'>
                        <div className='pt-20 pb-4 px-5'>
                            <div className='bg-white py-5  relative rounded-3x shadow-xl lg:shadow-lg hover:shadow-xl transform hover:-translate-y-1 ease-in-out duration-300 px-5 lg:py-16 '>
                                <div className='bg-[#1A5D1A] rounded-full text-4xl lg:text-5xl flex justify-center items-center h-16 w-16 lg:h-20 lg:w-20 text-white absolute -top-[22%] lg:-top-[10%]'><BsCalendar2DateFill /></div>
                                <h3 className='font-semibold text-xl lg:text-2xl mb-7'>Festival - Tours</h3>
                                <p className='leading-relaxed text-[0.8rem] lg:text-[0.9rem] text-justify'>{`"For Thy Eyes & Minds: Unveiling Kerala's Festivals" is an immersive journey that transports you to the heart of Kerala's vibrant cultural tapestry. Delve into a kaleidoscope of festivities that celebrate traditions, artistry, and spirituality. Witness captivating rituals, colorful processions, and age-old customs that ignite your senses and broaden your horizons, offering a deeper connection to the soul of Kerala's heritage.`}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='w-full relative'>
                        <div className='pt-20 pb-4 px-5'>
                            <div className='bg-white py-5  relative rounded-3x shadow-xl lg:shadow-lg hover:shadow-xl transform hover:-translate-y-1 ease-in-out duration-300 px-5 lg:py-16 '>
                                <div className='bg-[#1A5D1A] rounded-full text-4xl lg:text-5xl flex justify-center items-center h-16 w-16 lg:h-20 lg:w-20 text-white absolute -top-[22%] lg:-top-[10%]'><BsCalendar2DateFill /></div>
                                <h3 className='font-semibold text-xl lg:text-2xl mb-7'>Adventure - Tours</h3>
                                <p className='leading-relaxed text-[0.8rem] lg:text-[0.9rem] text-justify'>{`“Hillocks & Brooks”, Adventure Awaits: Embark on Thrilling Expeditions. Our adventure tours are tailored for the daring and curious souls seeking adrenaline-pumping experiences. Traverse breathtaking landscapes, conquer challenging terrains, and immerse yourself in exhilarating activities while forging unforgettable memories. Discover new horizons and push your limits with our expertly guided adventure tours.`}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className='flex justify-between px-5 text-2xl text-white absolute w-full -bottom-[10%] z-10'>
                    <div className='rounded-full bg-[#1A5D1A] w-16 h-16 flex items-center next-button2 justify-center'>
                        <AiOutlineArrowLeft />
                    </div>
                    <div className='rounded-full bg-[#1A5D1A] w-16 h-16 flex items-center prev-button2 justify-center'>
                        <AiOutlineArrowRight />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TourismServices