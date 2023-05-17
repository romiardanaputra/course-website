import './App.css'
import React from 'react'
import 'react-multi-carousel/lib/styles.css'
import AboutComponent from './components/AboutComponent'
import WhyUsComponent from './components/WhyUsComponent'
import CourseLandingComponents from './components/CourseLandingComponents'
import HeroBannerComponent from './components/HeroBannerComponent'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <div className='font-lato'>
      <Navbar />
      {/* hero banner start */}
      <section className='hero-banner'>
        <HeroBannerComponent />
      </section>
      {/* hero banner end */}

      {/* about us section start  */}
      <section>
        <div className='my-[25px] md:py-[50px] container mx-auto'>
          <p className='text-[33.18px] pb-5 text-center text-[#746D69] xl:text-[3.583rem] xl:pb-20'>About Us</p>
          <AboutComponent />
        </div>
      </section>
      {/* about us section end  */}

      {/* section list course */}
      <section className="bg-[#E8E9EB] py-10 lg:py-20">
        <div className='my-[25px] md:py-[50px] container mx-auto'>
          <p className='text-[33.18px] pb-5 text-center text-[#746D69] xl:text-[3.583rem] xl:pb-20'>Courses Available</p>
          <CourseLandingComponents />
        </div>
      </section>
      {/* section list course end  */}

      {/* why us section start */}
      <section className='my-[25px] md:py-[50px] container mx-auto'>
        <p className='text-[33.18px] py-5 text-center text-[#746D69] xl:text-[3.583rem] xl:pb-20 '>Why Choose Us ?</p>
        <WhyUsComponent />
      </section>
      {/* why us section wnd  */}

      <Footer />
    </div>
  );
}


export default App;
