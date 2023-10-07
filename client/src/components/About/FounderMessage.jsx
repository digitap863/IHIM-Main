import React from 'react'
import quotes from '../../assets/Images/About/quotes.png'

function FounderMessage() {
    return (
        <div className='mx-20 font-mont my-20 flex flex-col items-center gap-10 relative'>
            <h1 className=' mb-5 font-bold text-5xl text-[#1A5D1A] text-center'>{`FOUNDER'S MESSAGE`}</h1>
            <img src={quotes} alt=""  className='absolute left-[7%] top-[10%]'/>
            <img src={quotes} alt=""  className='absolute right-[7%] -bottom-[6%] rotate-180'/>
            <p className='leading-loose text-center w-[80%] text-[1.1rem]'>Development and Happiness are the most important achievements of an individual. All are constantly searching for this in our life. There is a yearning to feed our intellectual, emotional and moral hunger. Feeding this intellectual, emotional and moral hunger of the millions, in an appropriate and scientific way is the need of the hour service that is being demanded by our country today. <br /> <br />
                Our country is rich with more than 130 Crore people to its human resource credit. Due to various reasons, we lack the required facilities to improve the quality and quantity of the rich human resource potentials within our country. These lacunae observed in this most priority segment of Human Resource Development, is one of the reasons for the outcome of the retarded effectiveness in the individual performances. This is being reflected in our overall performance index too.
                To improve the high amount of potential loss of the HR Capital that what is happening in our country now, the time has arrived to gear up the Human resource
            </p>
        </div>
    )
}

export default FounderMessage