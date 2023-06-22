import React from 'react'
import { hero } from '../assets'
const Hero = () => {
    return (
        <section className=' flex p-9 md:flex-row md:gap-0 ss:gap-4 gap-7 flex-col justify-evenly'>
            <div className=' flex flex-col justify-center items-center'>
                <div className='flex flex-col relative '>
                    <h5 className='text-gradient md:mb-[270px] mb-[40px] font-poppins font-semibold uppercase text-[30px] '>
                        Skin protection cream
                    </h5>
                    <div className=''>
                        <h2 className='text-white text-[23px] uppercase font-poppins font-semibold '>
                            Trendy Collection
                        </h2>
                        <p className='text-dimWhite max-w-[280px] mt-3'>
                            Seedily say has suitable disposal and boy.Exercise joy man children rejoiced.
                        </p>
                    </div>
                    <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                    <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
                    <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
                </div>
            </div>
            <div className=' flex justify-center items-center'>
                <div className='w-full h-full flex justify-center items-center ml-3 z-10 relative'>
                    <img src={hero} className=' bg-yellow-200 rounded-[200px] object-contain ss:h-[550px] ss:w-[600px] z-5 ' alt="hero" />
                    <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                    <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
                    <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
                </div>

            </div>
            <div className='flex justify-center items-center'>
                <div className='flex flex-1 md:flex-col flex-row justify-center items-center md:gap-20 '>
                    <div className=' ss:m-4 ss:mx-4 mx-4  flex flex-col justify-center items-center'>
                        <h2 className='font-poppins font-semibold text-white ss:text-[30px] text-[20px] '>
                            1.5 m
                        </h2>
                        <p className='text-dimWhite mt-1 ml-2 xs:text-[20px] text-[12px] '>
                            Monthly Traffic
                        </p>
                    </div>
                    <div className=' ss:m-4 ss:mx-4 mx-4 flex flex-col justify-center items-center'>
                        <h2 className='text-white font-poppins ss:text-[30px] text-[20px] md:mt-[100px] font-semibold '>
                            100K
                        </h2>
                        <p className='text-dimWhite md:mt-1 md:ml-3 ml-6 md:min-w-[150px] xs:min-w-[10px] xs:text-[20px] text-[12px]'>
                            Happy Customers
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero