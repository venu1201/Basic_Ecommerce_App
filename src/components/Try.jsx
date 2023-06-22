import React from 'react'
import ReactCompareImage from 'react-compare-image';
import { shade, before, after } from '../assets'
const Try = () => {
    return (
        <section className='flex  sm:flex-row flex-col md:mt-0 mt-10 md:gap-[200px] h-[480px] justify-center items-center'>
            <div className='text-white flex font-poppins h-full w-full items-center justify-center'>
                <div className='flex flex-col items-center'>
                    <h2 className='font-semibold uppercase text-[30px] text-gradient m-3 mt-7'>
                        Virtual try-on
                    </h2>
                    <p className='mt-0 text-[18px] text-dimWhite  '>
                        never buy the wrong shade again!
                    </p>
                    <div className='flex flex-col h-full w-full justify-center items-center sm:mt-20 mt-10'>
                        <h2 className='text-gradient font-bold text-[35px] uppercase'>
                            try now !
                        </h2>
                        <img src={shade} className='w-2/3 object-contain ' alt="" />
                    </div>
                </div>
            </div>

            <div className='h-full w-full flex justify-center items-center'>
                <div className='w-[480px] h-[450px] flex justify-center md:items-center'>
                    <ReactCompareImage leftImage={before} rightImage={after} />
                </div>

            </div>


        </section>
    )
}

export default Try