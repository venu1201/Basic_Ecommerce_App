import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Slider from './components/Slider'
import Try from './components/Try'
import Productlist from './components/Productlist'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
const App = () => {
  return (
    <div  className='bg-primary h-full w-full overflow-hidden'>
        <div className='sm:px-16 px-6 flex justify-center items-center'>
            <div className='xl:max-w-[1280px] w-full'>
               <Navbar/>
            </div>        
        </div>
        <div className='bg-primary flex justify-center items-center'>
            <div className='xl:max-w-[1280px] w-full'>
                <Hero/>
            </div>
            
        </div>
        <div className='bg-primary flex justify-center items-center'>
          <div className='xl:max-w-[1280] w-full'>
                <Slider/>
          </div>
        </div>
        <div className='bg-primary flex justify-center items-center'>
            <div className='xl:max-w-[1280] w-full'>
                <Try/>
                <Productlist/>
                <Testimonials/> 
                 <Footer/>
            </div>
        </div>
    </div>
  )
}

export default App