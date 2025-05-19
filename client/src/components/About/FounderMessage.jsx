import React from 'react'
import quotes from '../../assets/Images/About/quotes.png'
import leafM from '../../assets/Images/Shared/leafMirror.png'
import bubble from '../../assets/Images/Shared/Ellipse1.png'

function FounderMessage() {
    return (
        <div className='mx-4 lg:mx-20 font-mont my-20 flex flex-col items-center gap-10 relative'>
            <img src={leafM} alt="" className='absolute w-[20%] lg:w-[11%] -top-[5%] lg:-top-[10%] -rotate-90 -left-[8%]' />
            <img src={bubble} alt="" className='absolute w-[15%] opacity-20 bottom-[3%] lg:-bottom-[10%] -rotate-90 right-[8%]' />
            <img src={bubble} alt="" className='absolute w-[60%] lg:w-[10%] opacity-20 bottom-[40%] lg:-bottom-[10%] -rotate-90 left-[8%]' />
            <h1 className=' mb-5 font-bold text-3xl lg:text-5xl text-[#1A5D1A] text-center'>{`FOUNDER'S MESSAGE`}</h1>
            <img src={quotes} alt="" className='absolute w-[8%] lg:w-auto -left-[2%] lg:left-[7%] top-[7%] lg:top-[10%]' />
            <img src={quotes} alt="" className='absolute w-[8%] lg:w-auto right-[2%] lg:right-[7%] -bottom-[3%] lg:-bottom-[6%] rotate-180' />
            <p className='leading-loose text-center lg:w-[80%] lg:text-[1.1rem] relative'>Development and Happiness are the most important achievements of an individual. All are constantly searching for this in our life. There is a yearning to feed our intellectual, emotional and moral hunger. Feeding this intellectual, emotional and moral hunger of the millions, in an appropriate and scientific way is the need of the hour service that is being demanded by our country today. <br /> <br />
                Our country is rich with more than 140 Crore people to its human resource credit. Due to various reasons, we lack the required facilities to improve the quality and quantity of the rich human resource potentials within our country. These lacunae observed in this most priority segment of Human Resource Development, is one of the reasons for the outcome of the retarded effectiveness in the individual performances. This is being reflected in our overall performance index too.
                To improve the high amount of potential loss of the HR Capital that what is happening in our country now, the time has arrived to gear up the Human resource
            </p>
            <p className='font-bold text-xl text-gray-500'>- Santhosh Kumar. A</p>
        </div>
    )
}

export default FounderMessage