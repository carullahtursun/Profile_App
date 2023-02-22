import React from 'react';
import { motion } from 'framer-motion'

import { fadeIn } from '../variants'
const Contact = () => {
  return (
    <section className='lg:section py-16 ' id='contact'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div
          variants={fadeIn('down', 0.7)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
           className='flex-1 flex items-center'>
            <div>
              <h4 className='text-4xl uppercase text-accent font-medium  mb-2 tracking-wide'>Get in touch</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12 '>
                Let's work <br />
                together!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form 
          variants={fadeIn('up', 0.7)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className='flex-1 border rounded-2xl flex flex-col gap-y-6 p-6 pb-24 items-start'>
            <input type="text"
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all   '
              placeholder='Your Nmae' />
              <input type="text"
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all   '
              placeholder='Your Email' />
              <textarea type="text"
              className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all  resize-none mb-12 '
              placeholder='Your Message'></textarea>
              <button className='btn btn-lg'>Send Message</button>
          </motion.form>
        </div>
      </div>
    </section>
  )
};

export default Contact;
