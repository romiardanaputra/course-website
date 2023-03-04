import React from 'react'
import { Link } from 'react-router-dom'

function ButtonAnimated(props) {
  return (
    <div>
      <Link to={`${props.link}`} className={`w-full text-center ${props.hide} px-5 ${props.paddingTop} py-3 relative rounded group overflow-hidden font-medium border border-${props.borderColor} text-${props.textColor} inline-block sm:block sm:py-4 md:py-4 lg:py-4`}>
        <span className={`absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-300 ease-in-out transform translate-y-0 bg-${props.bg} group-hover:h-full hover:bg-${props.bg}`}></span>
        <span className={`relative group-hover:text-[${props.color}]`}> {props.btnTextStartLearning} {props.btnTextLogin} {props.btnTextRegister} {props.btnTextGetStarted} {props.submitBtn}</span>
      </Link>
    </div>
  )
}

export default ButtonAnimated