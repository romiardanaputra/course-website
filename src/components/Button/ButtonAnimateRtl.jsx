import React from 'react'
import { Link } from 'react-router-dom'

function ButtonAnimateRtl(props) {
    return (
        <div>
            <Link to="#_" class="relative inline-flex items-center justify-center p-4 px-5 py-2.5 overflow-hidden font-normal text-sm text-[#C58940] transition duration-300 ease-out border-2 border-[#C58940] shadow-md group">
                <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#C58940] group-hover:translate-x-0 ease">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span class="absolute flex items-center justify-center w-full h-full text-[#C58940] transition-all duration-300 transform group-hover:translate-x-full ease">{props.btnTextCourse}</span>
                <span class="relative invisible">{props.btnTextCourse}</span>
            </Link>
        </div>
    )
}

export default ButtonAnimateRtl