import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'react-multi-carousel'
import { FaReact } from 'react-icons/fa'
import ButtonAnimateRtl from './Button/ButtonAnimateRtl'
import StarIcon from './StarIcon/StarIcon' 

function CourseLandingComponents() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 3000, min: 1500 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 1500, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }

    const btnTextCourse = "Start Course"
    const starAmountIcon = 5;

    return (
        <div className="container mx-auto px-5">
            <Carousel responsive={responsive}>
                {Array(5).fill().map((_, index) => (
                    <div key={index}>
                        <div className="pl-8 py-8 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex justify-center items-center gap-5 md:mx-2">
                            <div className='py-[2.5rem] px-[.5rem]'>
                                <Link to="#">
                                    <FaReact className='text-[50px] text-[#746D69]' />
                                </Link>
                            </div>
                            <div>
                                <Link to="#">
                                    <h5 className="mb-2 text-2xl dark:text-white">React Js</h5>
                                </Link>
                                <p className="mb-3 dark:text-gray-400">Basic react foundation include react hook and others</p>
                                <StarIcon starAmountIcon={starAmountIcon} />
                                <ButtonAnimateRtl btnTextCourse={btnTextCourse} />
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default CourseLandingComponents