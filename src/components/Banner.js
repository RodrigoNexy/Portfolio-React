import React from 'react';

import Image from '../assets/avatar.png';
import {FaGithub, FaLinkedinIn, FaInstagram, FaMailBulk} from 'react-icons/fa';
// type  animation
import {TypeAnimation} from 'react-type-animation'
//motion
import {motion} from 'framer-motion'
// variaveis
import {fadeIn} from '../variants'
const Banner = () => {
  return <section id='home' className='min-h-[85vh] lg:min-h-[78vh] flex items-center'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center'> 
        {/*TEXT */}
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h1 
          variants={fadeIn('up', 0.3)} 
          initial="hidden" 
          whileInView={'show'}
           viewport={{once: false, amount: 0.7}} className='mb-2 text-[50px]  leading-[1] lg:text-[50px]'>Rodrigo <span>Carvalho</span></motion.h1>
          <motion.div
          variants={fadeIn('up', 0.4)} 
          initial="hidden" 
          whileInView={'show'}
           viewport={{once: false, amount: 0.7}}
            className='mb-6 text-[36px] lg:text-[50px] font-secondary font-semibold uppercase leading[1]'>
            <span className='text-white mr-4'>Eu sou</span>
            <TypeAnimation sequence={[
              'FrontEnd Developer',
              2000,
              'BackEnd Developer',
              2000,
            ]}
            speed={50}
            className="text-accent"
            wrapper='span'
            repeat={Infinity}
             />
          </motion.div>
          <motion.p
          variants={fadeIn('up', 0.5)} 
          initial="hidden" 
          whileInView={'show'}
           viewport={{once: false, amount: 0.7}} className='mb-8 max-w-lg mx-auto lg:mx-0'>Rodrigo, 18 anos, Florianópolis-SC</motion.p>
          <motion.div
          variants={fadeIn('up', 0.6)} 
          initial="hidden" 
          whileInView={'show'}
           viewport={{once: false, amount: 0.7}} className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
            <button className='btn btn-lg'>Entre em Contato</button>
            <a href='#' className='text-gradient btn-link'>Meu Portfólio</a>
          </motion.div>
          {/* Redes sociais */}
          <motion.div
          variants={fadeIn('up', 0.7)} 
          initial="hidden" 
          whileInView={'show'}
           viewport={{once: false, amount: 0.7}} className='flex text-[20px] gap-x-6 max-w-max mx-auto
          lg:mx-0'>
            <a href='#'>
              <FaGithub />
            </a>
            <a href='#'>
              <FaLinkedinIn />
            </a>
            <a href='#'>
              <FaInstagram />
            </a>
            <a href='#'>
              <FaMailBulk />
            </a>
          </motion.div>
        </div>
        {/* IMG */}
        <motion.div 
        variants={fadeIn('down', 0.3)} 
        initial="hidden" 
        whileInView={'show'}
         className='w-[400px] hidden lg:flex flex-1 max-w-[320px] lg:max-w-[430px]'>
          <img src={Image}/>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Banner;
