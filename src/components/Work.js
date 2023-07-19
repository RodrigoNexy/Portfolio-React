import React from 'react';
// motion
import {motion} from 'framer-motion';
// variaveis
import {fadeIn} from '../variants';
//img
import img1 from '../assets/portfolio-img1.png';
import img2 from '../assets/portfolio-img2.png';
import img3 from '../assets/portfolio-img3.png';
const Work = () => {
  return <section id='work' className='section'>
    <div className='container mx-auto '>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <motion.div variants={fadeIn('right', 0.3)} 
        initial="hidden" 
        whileInView={'show'}
         viewport={{once: false, amount: 0.7}} className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          {/* text */}
          <div className='flex-1 flex flex-col gap-y-10'>
            <h2 className='h2 leading-tight text-accent'>Meus Últimos <br />Trabalhos.</h2>
            <a href='https://github.com/RodrigoNexy' target="_blank"><button className='btn btn-sm'>Veja todos projetos no GitHub.</button></a>
          </div >
          {/* image */}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={img2}></img>
            <div className='absolute -bottom-full left-3 group-hover:bottom-32 transition-all duration-500 z-50'><span className='text-gradient'>Feito com Html, Css, JavaScript, VanillaTiltJs</span></div>
            <div className='absolute -bottom-full left-3 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3x1 text-white'>Projeto Para Barbearia.</span>
              <a target="_blank" href='https://barbearia-theta-rust.vercel.app'><button className='btn btn-sm absolute -bottom-full left-44 group-hover:bottom-0  transition-all duration-700 z-50'>Veja o Projeto.</button></a>
              <a target="_blank" href='https://github.com/RodrigoNexy/ProjetoBarbearia'><button className='btn btn-sm absolute -bottom-full left-80 group-hover:bottom-0  transition-all duration-700 z-50'>Repositório.</button></a>
            </div >
          </div>
        </motion.div>
        <div className='flex-1 flex flex-col gap-y-10'>
          {/* img */}
          <motion.div variants={fadeIn('left', 0.3)} 
        initial="hidden" 
        whileInView={'show'}
         viewport={{once: false, amount: 0.7}} className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={img1}></img>
            <div className='absolute -bottom-full left-3 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>Feito com Html, Css, JavaScript, e estou criando um intranet para membros, com php e MySql, para os membros ter acesso a todos documentos do clube.</span></div>
            <div className='absolute -bottom-full left-3 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3x1 text-white'>Projeto Território Missionário.</span>
              <a target="_blank" href='https://territorio-missionario.vercel.app'><button className='btn btn-sm absolute -bottom-full left-62 group-hover:bottom-0 transition-all duration-700 z-50'>Veja o Projeto.</button></a>
              <a target="_blank" href='https://github.com/RodrigoNexy/territorio-missionario'><button className='btn btn-sm absolute -bottom-full left-96 group-hover:bottom-0  transition-all duration-700 z-50'>Repositório.</button></a>
            </div>
          </motion.div>
          <motion.div variants={fadeIn('left', 0.3)} 
        initial="hidden" 
        whileInView={'show'}
         viewport={{once: false, amount: 0.7}} className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={img3}></img>
            <div className='absolute -bottom-full left-3 group-hover:bottom-32 transition-all duration-500 z-50'><span className='text-gradient'>Feito com Html, Css, JavaScript.</span></div>
            <div className='absolute -bottom-full left-3 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3x1 text-white'>Meu Primeiro Portfólio.</span>
              <a target="_blank" href='https://portifolio-taupe-omega.vercel.app'><button className='btn btn-sm absolute -bottom-full left-44 group-hover:bottom-0  transition-all duration-700 z-50'>Veja o Projeto.</button></a>
              <a target="_blank" href='https://github.com/RodrigoNexy/Portifolio'><button className='btn btn-sm absolute -bottom-full left-80 group-hover:bottom-0  transition-all duration-700 z-50'>Repositório.</button></a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>;
};

export default Work;
