import React from 'react';
import { motion } from 'framer-motion'

import { fadeIn } from '../variants'

import { BsArrowUpRight } from 'react-icons/bs'

const services = [
  {
    name: 'UI/UX Design',
    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, nostrum dolores illum corrupti quia saepe! ',
    link: 'lorem more'
  },
  {
    name: 'UI/UX Design',
    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, nostrum dolores illum corrupti quia saepe! ',
    link: 'lorem more'
  },
  {
    name: 'UI/UX Design',
    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, nostrum dolores illum corrupti quia saepe! ',
    link: 'lorem more'
  },
  {
    name: 'UI/UX Design',
    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, nostrum dolores illum corrupti quia saepe! ',
    link: 'lorem more'
  },
]

const Services = () => {
  return (
    <section className='section ' id='services'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          {/* text & image */}
          <motion.div
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>

            <h2 className='h2 text-accent mb-6'>What I Do.</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              I'm a Freelance Front-end Devoloper wi.th over 2 years of experience.
            </h3>
            <button className='btn btn-sm'> See my work</button>
          </motion.div>

          {/* services */}

          < motion.div
          variants={fadeIn('left', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className='flex-1'>
            {/* services itam */}
            <div>
              {services.map((service, index) => {
                return (
                  <div className='border-b border-white/20 h-[146px] mb-[38px] flex ' key={index}>
                    <div className='max-w-[476px]'>

                      <h4 className='text-[20px ] tracking-wider font-primary
                    font-semibold mb-6'
                      >{service.name}
                      </h4>

                      <p className='font-secondary leading-tight'> {service.description}</p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'  >

                      <a href="/" className='btn h-9 w-9 mb-[42px] flex justify-center items-center'>
                        <BsArrowUpRight />
                      </a>
                      <a className='text-gradient text-sm' href="/">{service.link}</a>

                    </div>

                  </div>
                )
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
};

export default Services;
