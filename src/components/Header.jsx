import React from 'react';
import Logo from '../assets/logo.svg'
const Header = () => {
  return (
    <header className=' py-8'>
      <div className="container mx-auto">
        <div className='flex justify-between items-center'>
          {/* logo */}
          <a href="/"> 
            <h2 className='h2 text-gradient'> CARULLAH <br /> TURSUN </h2>
          </a>
          {/* button */}
          <button className='btn btn-sm'>Work whth Me</button>
        </div>

      </div>
    </header>
  )
};

export default Header;
