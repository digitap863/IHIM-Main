import React from "react";
import yogaGirl from "../../assets/Images/About/yogaGirl.png";
import bubble from "../../assets/Images/Shared/Ellipse1.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Quotes = [
    {
        quote: `Human Resources are like natural resources, They are ofter buried deep. You have to go looking for them, they are not just lying around where they show themselves`,
        author: `- Ken Robins`,
    },
    {
        quote: `For each and every real life situation there are human resources based solutions.`,
        author: `- Santhosh Kumar. A`,
    },
    {
        quote: `For Handling different situations, one has to identify the nature of the potentials required, develop them and practice utilizing them effectively to allow the final destination of success`,
        author: `- Balagopal KV`,
    },
    {
        quote: `During protein synthesis essential amino-acids demonstrate rate limiting activities. Simialray human resources of non-optimal potential factors limit the performance rate of the other human resource potentials in the form of blockages.`,
        author: `- Santhos Kuman A`,
    },
];

function Quote() {
    return (
        <div className="flex my-20 items-center justify-center py-10 relative font-mont">
            <img
                src={bubble}
                alt=""
                className="absolute w-[20%] lg:w-[12%] float opacity-20 bottom-[15%]  left-[25%]"
            />
            <img
                src={bubble}
                alt=""
                className="absolute w-[9%]  opacity-20 bottom-0 lg:-bottom-[30%] rotate-45 -left-[2%]"
            />
            <img
                src={bubble}
                alt=""
                className="absolute w-[10%]  opacity-10 bottom-[10%] -right-[2%]"
            />
            <div className="relative w-full max-w-6xl">
                <div className="flex justify-center items-center gap-20 relative flex-col-reverse md:flex-row px-10">
                    <div className="relative  overflow-hidden">
                        <Swiper
                            modules={[Autoplay, Pagination]}
                            spaceBetween={0}
                            slidesPerView={1}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            className="w-full"
                        >
                            {Quotes.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="relative">
                                        <img
                                            src={bubble}
                                            alt=""
                                            className="absolute w-[70%] md:w-[50%] lg:w-[20%] opacity-30 top-0 right-[20%] md:right-[6%] lg:right-[20%]"
                                        />

                                        <p className="italic lg:font-bold text-xl md:text-2xl lg:text-3xl font-petrona text-justify p-5">
                                            &quot; {item.quote} &quot;
                                        </p>
                                        <p className="mt-2 ml-5">
                                            {item.author}
                                        </p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <img
                        src={yogaGirl}
                        alt=""
                        className="md:w-[40%] lg:w-[20%] relative z-10"
                    />
                </div>
            </div>
        </div>
    );
}

export default Quote;
