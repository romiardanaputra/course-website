import React from 'react';
import { Link } from 'react-router-dom';
import ButtonAnimated from './Button/ButtonAnimated';

function Navbar() {
    const btnTextGetStarted = "Get Started"
    const color = '#C58940'
    const bg = 'white'
    return (
        <div>
            <nav className="bg-[#746D69] px-3 sm:px-4 py-5 dark:bg-gray-900 fixed  w-full z-[100000000] top-0 left-0 dark:border-gray-600">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <Link to='/' className="flex items-center" >
                        <span className="self-center text-slate-100 text-xl font-semibold whitespace-nowrap dark:text-white">Code Furious</span>
                    </Link>

                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 mt-4 border border-gray-100 md:bg-[#746D69] rounded-lg bg-gray-50 md:text-white md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link to='/' className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:hover:text-slate-300 md:p-0 dark:text-white">Home
                                </Link>
                            </li>
                            <li>
                                <Link to='/About' className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-slate-300 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About
                                </Link>
                            </li>
                            <li>
                                <Link to='/Contact' className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-slate-300 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="flex md:order-2 gap-x-5 items-center">
                        <ButtonAnimated btnTextGetStarted={btnTextGetStarted} paddingTop={"py-2"} hide={"hidden"} color={color} bg={bg} borderColor={'white'} textColor={'white'} />
                        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex py-3 px-2 items-center text-sm text-slate-100 rounded md:hidden hover:bg-gray-100 hover:text-[#C58940] focus:outline-none transition duration-300 focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 h-full" aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar;
