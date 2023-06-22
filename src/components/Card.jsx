import React from 'react'
import { quotes } from '../assets'
const FeedbackCard = ({image,comment,name}) => {
  return (
    <div className='h-[450px] flex justify-between flex-col rounded-[20px] max-w-[300px] '>
        <img src={quotes} alt="" className='w-[42px] h-[27px] object-contain' />
        <p className='font-poppins font-normal text=[20px] text-white my-10'>{comment}</p>
        <div className='flex flex-row'>
            <img src={image} alt="name" className='w-[48px] ' />
            <div className='flex justify-center flex-col ml-4'>
                <h4 className='font-poppins font-normal text=[20px] text-gradient text-white'>{name}</h4>
                {/* <p className='font-poppins fonr-normal text=[16px] leading-[24px] text-dimWhite'>{title}</p> */}
            </div>
        </div>
        
    </div>
  )
}

export default FeedbackCard