import React from 'react'
import { FaReact } from 'react-icons/fa'

function BadgeComponent() {
    return (
        <div>
            <section className=' my-[100px] container mx-auto px-5'>
                <h2 className='text-[33.18px] pb-5 text-center text-[#C58940] capitalize'>achievement earned</h2>
                <div className="flex flex-wrap justify-center w-full gap-4">
                    {Array(8).fill().map((_, index) => (
                        <div key={index} className=" bg-[#E5BA73] rounded ">
                            <FaReact className='text-[70px] p-3 text-slate-100'></FaReact>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default BadgeComponent