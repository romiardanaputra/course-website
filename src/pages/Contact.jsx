import React from 'react'
import { Link } from 'react-router-dom'
import ButtonAnimated from '../components/Button/ButtonAnimated'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Contact() {
  const color = '#fff'
  const bg = '[#C58940]'
  return (
    <div>
      <Navbar />
      <div className='bg-[#E8E9EB] h-[40vh] flex justify-center items-center'>
        <p className='text-[33.18px] mt-20 text-center text-[#746D69] xl:text-[3.583rem]'>Contact Us</p>
      </div>
      <div className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe width="100%" height="100%" className="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.213360247994!2d115.17298290000001!3d-8.671249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd247f0fd99a39b%3A0x9a24bac3e3a676e5!2sYayasan%20Suara%20Komunitas%20Satwa!5e0!3m2!1sid!2sid!4v1662702135553!5m2!1sid!2sid"></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                <p className="mt-1">Photo booth tattooed prism, portland taiyuan hoodie neutral typewriter</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                <Link to='#' className="text-indigo-500 leading-relaxed">example@email.com</Link>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                <p className="leading-relaxed">123-456-7890</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Let's Keep In touch</h2>
            <p className="leading-relaxed mb-5 text-gray-600">If you have any question please do not hesitate to contact us</p>
            <div className="relative mb-4">
              <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
              <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
              <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <ButtonAnimated submitBtn={'submit'} color={color} bg={bg} borderColor={'[#C58940]'} textColor={'[#C58940]'} />
            <p className="text-xs text-gray-500 mt-3">Please fill the form base on requirement needed</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact