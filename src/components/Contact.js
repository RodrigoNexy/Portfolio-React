import React from 'react';
// icons
import {FaGithub, FaLinkedinIn, FaInstagram, FaMailBulk} from 'react-icons/fa';
// motion
import {motion} from 'framer-motion';
// variaveis
import {fadeIn} from '../variants'


const Contact = () => {
  return <section id='contact' className='py-16 lg:section'>
    <div className='container mx-auto'>
      <div className='flex flex-col  items-center lg:flex-row'>
        {/* text */}
        <div className='flex-1 '>
          <motion.div 
          variants={fadeIn('right', 0.3)} 
          initial="hidden" 
          whileInView={'show'}
           viewport={{once: false, amount: 0.7}}>
            <h4 className='text-x1 uppercase text-accent font-medium mb-2 tracking-wide'>Minhas Redes Sociais!</h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Entre em <br />Contato.</h2>
          </motion.div>
        </div>
        {/* icons */}
        <motion.div 
        variants={fadeIn('left', 0.3)} 
        initial="hidden" 
        whileInView={'show'}
         viewport={{once: false, amount: 0.7}} className='flex-1 flex justify-center text-[90px]  '>
        <div >
        <a href='https://github.com/RodrigoNexy' target="_blank" className=''>
              <FaGithub />
            </a>
            <a href='https://github.com/RodrigoNexy' target="_blank" className=''><h1 className='text-[40px] mb-10 btn  text-center'>Meu Github.</h1></a>
            
            <a href='https://www.linkedin.com/in/rodrigo-carvalho-a30b14209/' target="_blank" >
              <FaLinkedinIn />
            </a>
            <a href='https://www.linkedin.com/in/rodrigo-carvalho-a30b14209/' target="_blank" ><h1 className='text-[40px] mb-10 btn  text-center'>Meu LinkedIN.</h1></a>

            <a href='https://www.instagram.com/rodrigo.gmk4/' target="_blank">
              <FaInstagram />
            </a>
            <a href='https://www.instagram.com/rodrigo.gmk4/' target="_blank"><h1 className='text-[40px] mb-10  btn text-center'>Meu Instagram.</h1></a>

        </div>
            
        </motion.div>
      </div>
    </div>
  </section>;
};


export default Contact;
