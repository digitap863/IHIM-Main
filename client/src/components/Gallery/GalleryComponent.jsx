import React from 'react'
import image1 from '../../assets/Images/Galllery/1.jpg'
import image2 from '../../assets/Images/Galllery/2.jpg'
import image3 from '../../assets/Images/Galllery/3.jpg'
import image4 from '../../assets/Images/Galllery/4.jpg'
import image5 from '../../assets/Images/Galllery/5.jpg'
import image6 from '../../assets/Images/Galllery/6.jpg'
import image7 from '../../assets/Images/Galllery/7.jpg'
import image8 from '../../assets/Images/Galllery/8.jpg'
import image9 from '../../assets/Images/Galllery/9.jpg'
import image10 from '../../assets/Images/Galllery/10.jpg'
import image11 from '../../assets/Images/Galllery/11.jpg'
import { Tab, Tabs } from '@nextui-org/react'
import leaf from '../../assets/Images/Shared/leaf.png'

function GalleryComponent() {
    const images = [
        {
            image: image1
        },
        {
            image: image2
        },
        {
            image: image3
        },
        {
            image: image4
        },
        {
            image: image5
        },
        {
            image: image6
        },
        {
            image: image7
        },
        {
            image: image8
        },
        {
            image: image9
        },
        {
            image: image10
        },
        {
            image: image11
        },
    ]

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array; // Return the shuffled array
    }
    return (
        <div className='-mt-[90%] mt lg:-mt-[20%] z-10 relative py-5 px-1 lg:px-8'>
            <img src={leaf} alt="" className='absolute w-[5%] top-[4%]  rotate-90 -right-[1%]' />
            <Tabs variant='underlined' className='w-full' fullWidth>
                <Tab key="workspace" title="Workspace"> 
                    <div className='columns-2 sm:columns-2 lg:columns-2 place-items-start gap-1 lg:gap-3 [&>img:not(:first-child)]:mt-1 lg:[&>img:not(:first-child)]:mt-3'>
                        {
                            shuffleArray(images).map((elem, index) => (
                                <img src={elem.image} alt="" className='w' key={index} />
                            ))
                        }
                    </div>
                </Tab>
                <Tab key="Programs" title="Programs">
                    <div className='columns-2 sm:columns-2 lg:columns-2 place-items-start gap-1 lg:gap-3 [&>img:not(:first-child)]:mt-1 lg:[&>img:not(:first-child)]:mt-3'>
                        {
                            shuffleArray(images).map((elem, index) => (
                                <img src={elem.image} alt="" className='w' key={index} />
                            ))
                        }
                    </div>
                </Tab>
                <Tab key="workspace1" title="Workspace1">
                    <div className='columns-2 sm:columns-2 lg:columns-2 place-items-start gap-1 lg:gap-3 [&>img:not(:first-child)]:mt-1 lg:[&>img:not(:first-child)]:mt-3'>
                        {
                            shuffleArray(images).map((elem, index) => (
                                <img src={elem.image} alt="" className='w' key={index} />
                            ))
                        }
                    </div>
                </Tab>
                <Tab key="Programs1" title="Programs1">
                    <div className='columns-2 sm:columns-2 lg:columns-2 place-items-start gap-1 lg:gap-3 [&>img:not(:first-child)]:mt-1 lg:[&>img:not(:first-child)]:mt-3'>
                        {
                            shuffleArray(images).map((elem, index) => (
                                <img src={elem.image} alt="" className='w' key={index} />
                            ))
                        }
                    </div>
                </Tab>

            </Tabs>
        </div>
    )
}

export default GalleryComponent