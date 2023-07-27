import React from 'react';
//icon
import {BsArrowUpRight} from 'react-icons/bs';
//motion
import {motion} from 'framer-motion';
//Variants
import {fadeIn} from '../variants';
import {Link} from 'react-scroll'
//Services data
const services = [
  {name : 'Analise e Desenvolvimento de Sistemas.',
   description: 'Instituição: Descomplica, Inicio: Agosto/2k23 Previsão de término: 2k25.'},
  {name : 'Curso JavaScript Completo',
   description: 'Instituição: Danki Code, Carga Horária: 14 horas.'},
   {name : 'Curso FrontEnd Completo',
   description: 'Instituição: Danki Code, Carga Horária: 81 horas.'},
   {name : 'Curso FontEnd Completo 2.0',
   description: 'Instituição: Danki Code, Carga Horária: 10 horas.'},
   {name : 'Curso JavaScript Curso Em Video',
   description: 'Instituição: Curso Em Video, Carga Horária: 40 horas.'},
   
]

const Services = () => {
  return <section id='services' className='section'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/* text */}
        <motion.div 
        variants={fadeIn('up', 0.3)} 
        initial="hidden" 
        whileInView={'show'}
         viewport={{once: false, amount: 0.7}} className='flex-1 lg:bg-about bg-contain lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'> 
          <h2 className='h2 text-accent mb-6'>Meus cursos!</h2>
          <h3 className='h3 max-w-[455px] mb-16'>aqui deixarei listado os principais:</h3>
          <Link to='work'
      activeClass='active'
      smooth={true}
      spy={true}
      offset={-200}>
        <button className='btn btn-sm'>Veja meus trabalhos.</button>
      </Link>
        </motion.div>
        {/* cursos */}
        <div className='flex-1'>
          {/* cursos lista */}
          <div>
            {services.map((services, index)=>{
              const{name, description} = services;
              return (
                <motion.div
                variants={fadeIn('right', 0.3)} 
          initial="hidden" 
          whileInView={'show'}
           viewport={{once: false, amount: 0.7}} className='border-b border-white/20  mb-[38px] flex' key={index}>
                  <div className='max-w-[476px]'>
                    <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                    <p className='font-secondary leading-tight'>{description}</p>
                  </div>
                  <div className='flex flex-col flex-1 items-end'>
                    <a href='#' className='btn  w-9 h-9 mb-[42px] flex justify-center items-center'><BsArrowUpRight />
                    </a>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  </section>;
};

export default Services;
