import React from 'react';
import { BiHomeAlt, BiUser } from "react-icons/bi"
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs"
import { Link } from 'react-scroll';
const Nav = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50' >
      <div className=" max-auto w-full">
        <div className='w-full bg-black/20  h-[70px] backdrop-blur-2xl rounded-full 
      max-w-[460px] mx-auto px-5 text-white/50 flex items-center justify-between text-2xl'>
          <Link
            activeClass='active'
            smooth={true}
            spy={true}
            to='home' 
            offset={-200}
            className='cursor-pointer flex items-center justify-center w-[50px] h-[50px]  '>
            <BiHomeAlt />
          </Link >

          <Link
          activeClass='active'
          smooth={true}
          spy={true}
           to='about'
            className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center '>
            <BiUser />
          </Link>

          <Link 
          activeClass='active'
          smooth={true}
          spy={true}
          to='services'
           className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center '>
            <BsClipboardData />
          </Link>

          <Link
          activeClass='active'
          smooth={true}
          spy={true}
           to='work'
            className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center '>
            <BsBriefcase />
          </Link>

          <Link
          activeClass='active'
          smooth={true}
          spy={true}
           to='contact' 
           className='cursor-pointer w-[50px] h-[50px]  flex items-center justify-center '>
            <BsChatSquare />
          </Link>
        </div>
      </div>
    </nav>
  )


};

export default Nav;
