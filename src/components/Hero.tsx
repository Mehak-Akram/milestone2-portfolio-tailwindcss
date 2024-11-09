import React from 'react';
import Image from 'next/image';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div id='hero' className='sm:min-h-screen bg-no-repeat bg-[url(/banner_bg.png)] bg-bottom sm:bg-right  lg:bg-[15%] '
    style={{backgroundSize: "25%",}}>,
      <Navbar/>
      <hr />
      <div className='container pt-8 grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[50px] sm:text-[50px] leading-tight flex justify-center items-center'>
          <div>
            <p data-aos="zoom-in-up" className='font-extrabold' >Hi, it's <span className="text-accent">Mehak</span> and</p>
            <p data-aos="zoom-in-up" className='font-extrabold'>I am  passionate<span className="text-accent"> Front-end Developer</span>
            </p>
            <p data-aos="zoom-in-up" className='font-extralight text-[25px]'>
            As a front-end developer with a strong foundation in HTML, CSS,
            JavaScript, and TypeScript a focus on Nextjs and Tailwind CSS,
             I focus on writing clean, efficient, and maintainable code
          </p>
          </div>
        </div>
      </div>
</div>
  )
}

export default Hero