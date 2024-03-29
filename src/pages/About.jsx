import React from 'react'
import AboutComponent from '../components/AboutComponent'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function about() {
  return (
    <div>
      {/* about us section start  */}
      <Navbar />
      <section>
        <div className='my-[25px] md:py-[100px] container mx-auto'>
          <p className='text-[33.18px] pb-5 text-center text-[#746D69] xl:text-[3.583rem] xl:pb-20'>About Us</p>
          <AboutComponent />
        </div>
      </section>
      {/* about us section end  */}
      <Footer />
    </div>
  )
}

export default about