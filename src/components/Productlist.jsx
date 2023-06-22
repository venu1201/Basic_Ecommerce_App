import React, { useRef, useState } from 'react'
import { ProductsData } from '../constants'
import { useAutoAnimate } from '@formkit/auto-animate/react'
const Productlist = () => {
    const [parent] = useAutoAnimate();
    const [active, setActive] = useState(1);
    const [Menuproducts, setMenuproducts] = useState(ProductsData)
    const filter = (type) => {
        //console.log(product.type);
        if (type === ProductsData[0].type)
            console.log("hello");
        let obj = [];
        for (let i = 0; i < ProductsData.length; i++) {
            if (ProductsData[i].type === type) {
                obj.push(ProductsData[i]);
            }
        }
        console.log(obj)
        setMenuproducts(obj);
    }
    const func = ({ num, type }) => {
        setActive(num);
        console.log(type)
        if (type === "All") {
            setMenuproducts(ProductsData);
        }
        else {
            filter(type);
        }
    }
    return (

        <div className='flex flex-col gap-10 justify-center items-center'>
            <div className='flex justify-center items-center'>
                <h2 className='font-poppins font-bold md:text-[30px] text-[20px] uppercase text-gradient flex justify-center items-center'>
                    our feature products
                </h2>
            </div>
            <div className=' flex flex-col justify-center items-center'>
                <ul className='list-none text-white font-poppins flex flex-row justify-between md:gap-20 items-center flex-wrap'>
                    <li className={`${active === 1 ? "bg-blue-gradient" : "bg-black-gradient"} m-1 hover:scale-110 cursor-pointer min-w-[120px] flex justify-center items-center rounded-2xl h-[40px]`} onClick={() => func({ num: 1, type: "All" })}  >All</li>
                    <li className={`${active === 2 ? "bg-blue-gradient" : "bg-black-gradient"} m-1 hover:scale-110 cursor-pointer min-w-[120px] flex justify-center items-center rounded-2xl h-[40px]`} onClick={() => func({ num: 2, type: "skin care" })}>SKin Care</li>
                    <li className={`${active === 3 ? "bg-blue-gradient" : "bg-black-gradient"} m-1 hover:scale-110 cursor-pointer min-w-[120px] flex justify-center items-center rounded-2xl h-[40px]`} onClick={() => func({ num: 3, type: "conditioner" })}>Conditioner</li>
                    <li className={`${active === 4 ? "bg-blue-gradient" : "bg-black-gradient"} m-1 hover:scale-110 cursor-pointer min-w-[120px] flex justify-center items-center rounded-2xl h-[40px]`} onClick={() => func({ num: 4, type: "foundation" })}>Foundation</li>
                </ul>
                <div className='flex flex-1 justify-center items-center mt-10 w-full h-full'>
                    <div ref={parent} className='grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-col-1 gap-4 justify-between bg-discount-gradient no-scrollbar rounded-3xl md:h-[600px] xs:h-[520px]  h-[480px] overflow-x-hidden p-10 overflow-y-scroll'>
                        {Menuproducts.map((products, index) => (
                            <div key={index} className='text-white rounded-2xl shadow-xl xs:flex-none flex-col bg-black-gradient relative sm:min-w-[200px] ss:min-w-[190px] ss:h-[200px] xs:min-w-[140px] xs:h-[200px] min-w-[210px] h-[210px] sm:h-[200px]'>
                                <div className='flex flex-col justify-center items-center p-3'>
                                    <h2 className='font-poppins text-gradient font-semibold text-[25px] xs:text-[22px] m-2'>
                                        {products.name}
                                    </h2>
                                    <p className='font-poppins font-normal text-dimWhite text-[15px] xs:text-[15px]'>
                                        {products.details}
                                    </p>
                                </div>
                                <div className='absolute text-gradient font-poppins font-bold text-[30px] xs:text-[25px] xs:left-[20%] xs:top-1/2 top-1/2 left-[20%] '>
                                    {products.price} $
                                </div>
                                <div className="absolute bottom-2 left-2">
                                    <button className="bg-blue-gradient h-[40px] w-[90px] rounded-3xl text-black font-poppins text-[13px] shadow-xl shadow-black">Shop Now</button>
                                </div>
                                <img src={products.img} className='absolute m-auto sm:max-w-[50px] xs:max-w-[50px] xs:h-[90px] sm:h-[110px] h-[90px] -rotate-1 xs:bottom-0 xs:right-1 right-2 bottom-0' alt="" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Productlist