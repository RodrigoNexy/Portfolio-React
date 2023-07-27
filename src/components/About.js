import React from 'react';
//countup
import CountUp from 'react-countup';
// Interseção
import {useInView} from 'react-intersection-observer'
//motion
import {motion} from 'framer-motion'
// variaveis
import {fadeIn} from '../variants'
import {Link} from 'react-scroll'

const About = () => {
  const[ref, inView] =  useInView({
    threshold: 0.5, 
  });
  return <section id='about' className='section' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        {/* IMG */}
        <motion.div 
        variants={fadeIn('right', 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.3}}
        className='flex-1 bg-about bg-contain bg-no-repeat  h-[700px] mix-blend-lighten bg-top'></motion.div>
        {/* Text */}
        <motion.div
        variants={fadeIn('left', 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.3}} className='flex-1'>
          <h2 className='h2 text-accent'>Sobre Mim.</h2>
          <h3 className='h3 mb-4'>Eu sou um Desenvolvedor FullStack.</h3>
          <p className='mb-6'>Me chamo Rodrigo Carvalho, estudante de programação, cursando <strong>Analise e Desenvolvimento de Sistemas</strong> (Faculdade Descomplica),
            já atuei em áreas como Designer Gráfico, Editor de Video e Filmmaking, porém me encontrei na programação.
          </p>
          <p className='mb-6'>Como FullStack meu ponto mais forte é o FrontEnd (Html, Css, JavaScript, React).</p>
          <p className='mb-6'>No BackEnd sei lidar com (MySql, PHP).</p>
          {/* Status */}
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ?
                  <CountUp start={0} end={12} duration={5} /> : null }
              </div>
              <div className='font-primary text-sm tracking-[2px]'>Meses de <br />Estudos</div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ?
                  <CountUp start={0} end={5} duration={5} /> : null }
              </div>
              <div className='font-primary text-sm tracking-[2px]'>Projetos pessoais <br />Concluidos</div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ?
                  <CountUp start={0} end={7} duration={5} /> : null }
              </div>
              <div className='font-primary text-sm tracking-[2px]'>Cursos <br />Concluidos</div>
            </div>
          </div>
          <div className='flex gap-x-8 items-center'>
          <Link to='contact'
      activeClass='active'
      smooth={true}
      spy={true}
      offset={-200}>
        <button className='btn btn-lg'>Entre em Contato</button>
      </Link>
            <Link to='work'
      activeClass='active'
      smooth={true}
      spy={true}
      offset={-200}>
        <button className='text-gradient btn-link'>Meu Portfólio</button>
      </Link>
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default About;
