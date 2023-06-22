import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useAutoAnimate } from '@formkit/auto-animate/react'
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { SliderProducts } from '../constants'
export default function App() {
  const [parent]=useAutoAnimate();
  return (
    <div className="text-white relative md:mt-10  md:mb-16 mb-36 mb flex ss:justify-center ss:item-centre md:pl-36 ">
      <div className="absolute z-[0] w-[20%] h-[25%] top-0 pink__gradient" />
    <div className="absolute z-[1] w-[40%] h-[40%] rounded-full white__gradient bottom-40" />
    
      <Swiper
        slidesPerView={2}
        spaceBetween={0}
        slidesPerGroup={1}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper xl:w-[900px] lg:w-[900px] md:w-[750px] ss:w-[650px] xs:w-[550px] w-[95%]"
        ref={parent}
      >
        {SliderProducts.map((products, index) => (
          <SwiperSlide >
            <div className=' flex shadow-sm shadow-blue-950 overflow-hidden rounded-xl flex-col ss:max-w-[300px] xs:max-w-[260px] relative ss:items-center lg:max-w-[390px] md:max-w-[320px] max-w-[160px] h-[200px] xs:h-[300px] ss:my-3 bg-black-gradient-2'>
              <div className='flex flex-col justify-center items-center p-3'>
                <h2 className='font-poppins text-gradient font-semibold text-[25px] xs:text-[22px] m-2'>
                  {products.name}
                </h2>
                <p className='font-poppins font-normal text-dimWhite text-[15px] xs:text-[15px]'>
                  {products.detail}
                </p>
              </div>
              <div className='absolute text-gradient font-poppins font-bold text-[30px] xs:text-[25px] left-[20%] top-1/2 '>
                {products.price} $
              </div>
              <div className="absolute bottom-4 left-4">
                <button className="bg-blue-gradient h-[35px] min-w-[80px] rounded-3xl text-black font-poppins text-[13px] shadow-xl shadow-black">Shop Now</button>
              </div>
              <img src={products.img} className='absolute max-w-[50px] xs:max-w-[50px] xs:h-[200px] h-[100px] -rotate-12 bottom-0 xs:right-3 right-0' alt="" />
            </div>


          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
