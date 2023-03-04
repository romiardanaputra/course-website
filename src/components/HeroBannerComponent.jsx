import React from 'react'
import ButtonAnimated from './Button/ButtonAnimated'

function HeroBannerComponent() {
    const btnTextStartLearning = "Start Learning Now"
    const btnTextRegister = "Sign Up"
    const btnTextLogin = "Sign In"
    const color = '#C58940'
    const bg = 'white'
    const colorWhite = 'white'
    return (
        <div className=" w-full mt-10 h-screen hero-banner flex justify-center text-slate-200 p-[2rem] leading-tight text-center gap-y-2 md:h-[80vh] md:items-center lg:h-screen lg:items-center ">
            <div className='md:w-[80%] lg:w-[40%]'>
                <p className="text-[33.18px] md:text-[57.33px] lg:text-[5.16rem] font-black capitalize py-10">the best way to learn code</p>
                <p className='text-sm capitalize leading-relaxed pb-3 md:text-[16px] lg:text-[18px]'>Code served and designed with real expertise material. Join our social sites to get more further information</p>
                <div className='py-4'>
                    <ButtonAnimated btnTextStartLearning={btnTextStartLearning} color={color} bg={bg} borderColor={colorWhite} textColor={colorWhite} />
                </div>
                <hr className='my-4' />
                <p className='py-2'>Join With Us</p>
                <div className="lg:flex lg:flex-row lg:w-full lg:gap-x-5">
                    <div className='py-3 w-full'>
                        <ButtonAnimated link={"/Register"} btnTextRegister={btnTextRegister} color={color} bg={bg} borderColor={colorWhite} textColor={colorWhite} />
                    </div>
                    <div className='py-3 w-full'>
                        <ButtonAnimated link={"/Login"} btnTextLogin={btnTextLogin} color={color} bg={bg} borderColor={colorWhite} textColor={colorWhite} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBannerComponent