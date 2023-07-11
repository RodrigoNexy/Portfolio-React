import React from 'react';
//IMAGES
   import Logo from '../assets/logo.png'
const Header = () => {
  return <div className=' py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/* logo */}
        <a href='#'>
          <img className='w-[150px]' src={Logo} />
        </a>
        {/* Buttom */}
        <button className='btn btn-sm'>Trabalhe Comigo</button>
      </div>
    </div>
  </div>;
};

export default Header;
