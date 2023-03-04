import React from 'react'
import { Link } from 'react-router-dom'
import image1 from '../images/digital-library.svg'
import image2 from '../images/distance-learning.svg'

function WhyUsComponent() {
    return (
        <div className='container mx-auto px-5 md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-3 xl:grid-cols-4'>
            <div class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5 h-full md:w-full">
                <img class="rounded-t-lg w-10/12 mx-auto" src={image1} alt="digital-library-illustration" />
                <div class="p-5">
                    <Link to="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    </Link>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-relaxed">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
            </div>

            <div class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5 h-full md:w-full">
                <img class="rounded-t-lg w-10/12 mx-auto" src={image2} alt="online-course-illustration" />
                <div class="p-5">
                    <Link to="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    </Link>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-relaxed">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
            </div>
            <div class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5 h-full md:w-full">
                <img class="rounded-t-lg w-10/12 mx-auto" src={image2} alt="online-course-illustration" />
                <div class="p-5">
                    <Link to="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    </Link>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-relaxed">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
            </div>
            <div class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5 h-full md:w-full">
                <img class="rounded-t-lg w-10/12 mx-auto" src={image2} alt="online-course-illustration" />
                <div class="p-5">
                    <Link to="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    </Link>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-relaxed">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
            </div>
        </div>
    )
}

export default WhyUsComponent