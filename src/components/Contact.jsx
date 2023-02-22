import { useRef,useState } from 'react';
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser';
import { fadeIn } from '../variants'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const yestify = () => toast("Email başarı ile Gönderildi");
  const notify = () => toast("Gönderme Başarısız Oldu");

  
  const [isYes,setYes]=useState(false)
  
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lytt2wi', 'template_52v1k1r', form.current, 'MbZPYgNyhZgAvTFEg')
      .then((result) => {
        
          console.log(result.text,setYes(true) );
      }, (error) => {
          console.log(Error.text,setYes(true));
      });
      e.target.reset();
  };



  return (
    <section className='lg:section py-16 ' id='contact'>
      <div className="container mx-auto">
      <ToastContainer />
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
          <form
            ref={form} onSubmit={sendEmail}
            
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 p-6 pb-24 items-start'>
            <input type="text"
              name="user_name"
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all   '
              placeholder='Your Nmae' required />
            <input type="email"
              name="user_email"
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all   '
              placeholder='Your Email' required />
            <textarea
              type="text"
              name="message"
              className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all  resize-none mb-12 '
              placeholder='Your Message' required></textarea>
            <button onClick={isYes ? yestify : notify} type='submit' className='btn btn-lg'>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
};

export default Contact;
