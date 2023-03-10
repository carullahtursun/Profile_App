import React from 'react';

import Image1 from '../assets/c5.png'


import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

import { TypeAnimation } from 'react-type-animation'

import { motion } from 'framer-motion'

import { fadeIn } from '../variants'

const Banner = () => {
  return (

    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-6 lg:flex-row  lg:items-center lg:gap-x-12'>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}

              className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
              CARU<span className=''>ALLA</span>
            </motion.h1>

            <motion.div
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='mr-4 text-white'>I am a </span>
              <TypeAnimation
                sequence={[
                  "Developer",
                  2000,
                  "Web Designiner",
                  2000,
                  "Youtuber",
                  2000,
                ]}
                speed={50}

                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
            variants={fadeIn('up', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='mb-8 max-w-lg  mx-auto lg:mx-0'>
              Hello, my name is Carullah Tursun, a 4th-year computer engineering student. I have experience in designing user-friendly interfaces and developing applications using HTML, CSS, JS, ReactJS, Node.js, and MongoDB. Thank you for look my portfolio and CV.
            </motion.p>


            <motion.div
            variants={fadeIn('up', 0.6)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex items-center mb-12 gap-x-6 max-w-max mx-auto
              lg:mx-0'>
              <button className='btn btn-lg'>Contact Me</button>
              <a href="/" className='text-gradient btn-link'>
                My Portfolio
              </a>
            </motion.div>


            <motion.div
            variants={fadeIn('up', 0.7)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:justify-center
              lg:mx-0'>
              <a href="https://github.com/carullahtursun">
                <FaGithub />
              </a>

              <a href="https://www.instagram.com/carullah_tursun/">
                <FaInstagram />
              </a>

              <a href="https://www.linkedin.com/in/carullah-tursun-901934208/">
                <FaLinkedin />
              </a>
            </motion.div>


          </div>

          <motion.div 
          variants={fadeIn('down', 0.5)}
          initial='hidden'
          whileInView={'show'}
/*           viewport={{ once: false, amount: 0.7 }}
 */
          className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
            <img className=' bg-gradient-to-r from-blue-600 via-pink-700 to-purple-700 rounded-lg rounded-br-[150px]  rounded-tl-[200px]' src={Image1}  alt="" />
          </motion.div>

        </div>
      </div>
    </section>
  )

};

export default Banner;
