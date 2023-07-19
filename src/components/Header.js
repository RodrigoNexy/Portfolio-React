import React from 'react';
//IMAGES
   import Logo from '../assets/logo.png'
   import {Link} from 'react-scroll'
const Header = () => {
  return <div className=' py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/* logo */}
        <a href='#'>
          <img className='w-[150px]' src={Logo} />
        </a>
        {/* Buttom */}
        
        <Link to='contact'
      activeClass='active'
      smooth={true}
      spy={true}
      offset={-200}>
        <button className='btn btn-sm'>Trabalhe Comigo</button>
      </Link>
      </div>
    </div>
  </div>;
};

export default Header;
