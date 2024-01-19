import React from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import leafM from '../../assets/Images/Shared/leafMirror.png'
import bubble from '../../assets/Images/Shared/Ellipse1.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Scrollbar } from 'swiper/modules';
import { IoMan } from 'react-icons/io5';
import { MdOutlineSelfImprovement } from 'react-icons/md';
import { GiBrain } from 'react-icons/gi';

function Hospitality() {
  return (
    <div className='font-mont mt-20 flex items-center justify-center flex-col relative gap-5 lg:gap-28'>
    <img src={leafM} alt="" className='absolute w-[10%] rotate-90 top-[30%] -right-[2%]' />
    <img src={bubble} alt="" className='absolute w-[10%] rotate-90 top-[60%] -left-[5%] opacity-30 float' />

    <h5 className='text-[#1A5D1A] text-center text-4xl font-bold'>Hospitality</h5>
    <div className='gap-10 w-[75%] hidden lg:flex'>
        <div className='bg-white relative rounded-3xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 ease-in-out duration-300 px-5 py-16 '>
            <div className='bg-[#1A5D1A] rounded-full text-5xl flex justify-center items-center h-20 w-20 text-white absolute -top-[10%]'><IoMan /></div>
            <h3 className='font-semibold text-2xl mb-7'>Health Care Centre</h3>
            <p className='leading-relaxed text-[0.9rem] text-justify'><strong>Ente Keralam,</strong> {`Embark on a Fascinating Journey: Exploring Kerala's History and Culture" offers a captivating expedition through the rich heritage and traditions of Kerala. This immersive experience delves into the region's past, showcasing its historical landmarks, artistic expressions, culinary delights, and local customs, providing a deeper understanding of Kerala's vibrant tapestry of history and culture."`}</p>
        </div>
        <div className='bg-white relative rounded-3xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 ease-in-out duration-300 px-5 py-16 '>
            <div className='bg-[#1A5D1A] rounded-full text-5xl flex justify-center items-center h-20 w-20 text-white absolute -top-[10%]'><MdOutlineSelfImprovement /></div>
            <h3 className='font-semibold text-2xl mb-7'>Infrastructure Development</h3>
            <p className='leading-relaxed text-[0.9rem] text-justify'> <strong>Eco-Tours:</strong>{` Embrace Nature's Beauty Responsibly. Immerse yourself in sustainable adventures that showcase breathtaking landscapes, diverse ecosystems, and local cultures. Our eco-tours prioritize environmental conservation and offer enriching experiences that educate and inspire while leaving a minimal ecological footprint."`}</p>
        </div>
      
    </div>
    <div className='lg:hidden w-full relative z-10'>
        <Swiper
            modules={[Autoplay, Scrollbar,Navigation]}
            scrollbar={{
                hide: false,
            }}
            className='flex'
            spaceBetween={45}
            autoplay={{ delay: 1500 }}
            loop={true}
            navigation={{
                nextEl: ".next-button4",
                prevEl: ".prev-button4",
                clickable: true,
              }}
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
            <SwiperSlide className='w-full relative'>
                <div className='pt-20 pb-4 px-5'>
                    <div className='bg-white py-5  relative rounded-3x shadow-xl lg:shadow-lg hover:shadow-xl transform hover:-translate-y-1 ease-in-out duration-300 px-5 lg:py-16 '>
                        <div className='bg-[#1A5D1A] rounded-full text-4xl lg:text-5xl flex justify-center items-center h-16 w-16 lg:h-20 lg:w-20 text-white absolute -top-[22%] lg:-top-[10%]'><IoMan /></div>
                        <h3 className='font-semibold text-xl lg:text-2xl mb-7'>Human Resource Potential Development studies and Training</h3>
                        <p className='leading-relaxed text-[0.8rem] lg:text-[0.9rem] text-justify'><strong>Ente Keralam,</strong> {`Embark on a Fascinating Journey: Exploring Kerala's History and Culture" offers a captivating expedition through the rich heritage and traditions of Kerala. This immersive experience delves into the region's past, showcasing its historical landmarks, artistic expressions, culinary delights, and local customs, providing a deeper understanding of Kerala's vibrant tapestry of history and culture."`}</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='pt-20 pb-4 px-5'>
                    <div className='bg-white py-5 relative rounded-3xl shadow-xl lg:shadow-lg hover:shadow-xl transform hover:-translate-y-1 ease-in-out duration-300 px-5  lg:y-16 '>
                        <div className='bg-[#1A5D1A] rounded-full text-4xl lg:text-5xl flex justify-center items-center h-16 w-16 lg:h-20 lg:w-20 text-white absolute -top-[22%] lg:-top-[10%]'><MdOutlineSelfImprovement /></div>
                        <h3 className='font-semibold text-xl lg:text-2xl mb-7'>Self-improvement Techniques and Skills</h3>
                        <p className='leading-relaxed text-[0.8rem] lg:text-[0.9rem] text-justify'><strong>Eco-Tours:</strong>{` Embrace Nature's Beauty Responsibly. Immerse yourself in sustainable adventures that showcase breathtaking landscapes, diverse ecosystems, and local cultures. Our eco-tours prioritize environmental conservation and offer enriching experiences that educate and inspire while leaving a minimal ecological footprint."`}</p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
        <div className='flex justify-between px-5 text-2xl text-white absolute w-full -bottom-[10%] z-10'>
            <div className='rounded-full bg-[#1A5D1A] w-16 h-16 flex items-center next-button4 justify-center'>
                <AiOutlineArrowLeft />
            </div>
            <div className='rounded-full bg-[#1A5D1A] w-16 h-16 flex items-center prev-button4 justify-center'>
                <AiOutlineArrowRight />
            </div>
        </div>
    </div>
</div>
  )
}

export default Hospitality