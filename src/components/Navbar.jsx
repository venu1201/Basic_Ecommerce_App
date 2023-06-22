import React, { useState } from 'react'
import { logo, menu } from '../assets'
import { navLinks } from '../constants'
import { CgShoppingBag } from 'react-icons/cg'
const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <div className='flex md:m-5 sm:my-5 xs:mx-1 my-5 mx-0 flex-1 justify-between items-center '>
            <div className='flex flex-1 items-center md:px-7 px-0 mx-0'>
                <img src={logo} className='md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px] w-[33px] h-[33px] object-contain' alt="logo" />
                <h4 className='font-poppins font-semibold text-white md:text-[27px] xs:text-[20px] text-[16px] xs:ml-5 ml-2'>
                    Amazzz
                </h4>
            </div>
            <div className='md:flex hidden justify-center items-center'>
                <ul className='flex flex-1 justify-start items-center'>
                    {navLinks.map((nav, index) => (
                        <li key={nav.id} className={`mx-6 font-poppins hover:text-secondary cursor-pointer text-white  `}>
                            {nav.title}
                        </li>
                    ))}
                </ul>
                <input type="text" placeholder='Search...' className='rounded-md w-44 mx-4 text-center' />
                <CgShoppingBag className=' text-white w-5 h-8 cursor-pointer' />
            </div>

            <div className='md:hidden flex justify-center items-center'>
                <img src={menu} alt="menu"
                    className='object-contain xs:h-5 xs:w-10 h-5 w-7 '
                    onClick={() => setToggle(!toggle)} />
                <CgShoppingBag className='text-white xs:h-8 xs:w-12 xs:ml-3 ml-2 w-6 h-6'/>
                <div
                    className={`${!toggle ? "hidden" : "flex"
                        } p-6 bg-black-gradient z-10 absolute top-[75px] right-4 mx-4 my-2 min-w-[px] rounded-xl sidebar`}
                >
                    <ul className='list-none cursor-pointer justify-end item-start flex-col '>
                        {navLinks.map((nav, index) => (
                            <li key={nav.id}
                                className='mr-10 mt-3 font-poppins font-normal text-white cursor-pointer'
                            >
                             
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Navbar