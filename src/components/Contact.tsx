import React from 'react'
import { LuMailCheck } from "react-icons/lu";
import { BsTelephoneOutbound } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";





const Contact = () => {
  return (
    <div id='contact' className='container pt-32'>
      <div className='grid grid-cols-2 gap-10'>
        <div className='space-y-8'>
        <h2 className="text-4xl md:text-5xl font-extrabold" data-aos="zoom-in-up">Contact <span className="text-accent" data-aos="zoom-in-up">Me</span></h2>
          <div className='flex gap-3 items-center' data-aos="zoom-in-up">
          <LuMailCheck className='text-blue-800 text-3xl'/>  abc@gmail.com
          </div>
          <div className='flex gap-3 items-center' data-aos="zoom-in-up">
          <BsTelephoneOutbound className='text-green-600 text-3xl'/>  (012) 3456-789
          </div>
          <div className='flex gap-3 items-center' data-aos="zoom-in-up">
          <FaGithub className='text-white text-3xl'/>  Mehak-Akram
          </div>
          <div className='flex gap-3 items-center' data-aos="zoom-in-up">
          <FaLinkedin className='text-blue-800 text-4xl'/>  Mehak Akram
          </div>
        </div>
        <div className='space-y-8'>
          <div className='flex flex-col gap-1' data-aos="zoom-in-up">
            <label htmlFor="name" className='font-bold'>Name</label>
            <input type="text"
            className='h-[40px] bg-transparent border border-accent rounded-lg' 
            id='name'/>
          </div>
          <div className='flex flex-col gap-1' data-aos="zoom-in-up">
            <label htmlFor="email" className='font-bold'>Email</label>
            <input type="text"
            className='h-[40px] bg-transparent border border-accent rounded-lg' 
            id='email'/>
          </div>
          <div className='flex flex-col gap-1' data-aos="zoom-in-up">
            <label htmlFor="msg" className='font-bold'>Message</label>
            <textarea
            className=' bg-transparent border border-accent rounded-lg' 
            id='msg' rows={8}>
              </textarea>
          </div>
          <button className='border-2  border-[#cf5c36] bg-[#121212] rounded-full  text-white h-10 w-[120px] ' data-aos="zoom-in-up">Send</button>
        </div>
      </div>
    </div>
  )
}

export default Contact