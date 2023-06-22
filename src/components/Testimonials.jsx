import React, { useRef, useState, useEffect } from 'react';
import { testimonialHero } from '../assets'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper";
import { EffectCoverflow, Pagination } from "swiper";
import { TestimonialsData } from '../constants';
import Card from '../components/Card'
const Testimonials = () => {
    const [slidesPerView, setSlidesPerView] = useState(3);

  const handleResize = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 750) {
      setSlidesPerView(1);
    } else if (windowWidth <= 1200) {
      setSlidesPerView(2);
    } else {
      setSlidesPerView(3);
    }
  };
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    return (
        <section className='mt-7 p-10 flex flex-col'>
            <div className='flex px-3 ss:justify-around ss:gap-6 items-center md:flex-row flex-col font-poppins'>
                <div className='flex flex-col  ss:gap-8'>
                    <h2 className=' flex xs:justify-normal justify-center uppercase text-gradient ss:text-[50px] text-[40px] font-semibold min-w-[280px] '>
                        Top rated
                    </h2>
                    <p className='text-dimWhite mx-auto mt-2 max-w-[230px] ss:text-[18px] text-[16px]'>
                        Seedily say has suitable disposal and boy. exercise joy man children rejoiced.
                    </p>
                </div>

                <img className=' h-[300px] object-contain min-w-[280px]' src={testimonialHero} alt="" />

                <div className='flex flex-col gap-4 '>
                    <h2 className='flex justify-center text-gradient font-bold ss:text-[40px] text-[34px]'>
                        100K
                    </h2>
                    <p className='text-dimWhite max-w-[210px] min-w-[210px]'>
                        Happy customers with us
                    </p>
                </div>
            </div>
            <div className='mt-10 w-full p-10'>

                <Swiper
                    effect={"coverflow"}
                    centeredSlides={true}
                    slidesPerView={slidesPerView}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                  
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}

                    
                    modules={[Autoplay,Navigation,EffectCoverflow, Pagination]}
                    className="mySwiper  h-[450px] xs:w-[90%] w-[200px] "
                >
                   {TestimonialsData.map((data,index)=>(
                        <SwiperSlide>
                          <Card key={index} {...data}/>
                        </SwiperSlide>

                   ))}
                </Swiper>


            </div>


        </section>
    )
}

export default Testimonials