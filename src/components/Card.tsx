import React from 'react'
import Image from 'next/image';

interface propsType{
    title: string;
    desc : string;
    img: string;
}

const Card:React.FC<propsType> = ({title,desc,img}) => {
  return (
    <div className='project-div transition-all duration-1000 ease-in-out border-2 border-accent rounded-lg w-[300px] sm:w-[350px] hover:scale-105 bg-transparent ' data-aos="zoom-in-up">
        <div>
            <Image className='image1 w-[300px] sm:w-[350px] h-auto' 
            src={img}
            width={350}
            height={350}
            alt={title}/>
        </div>
        <div className='p-4 space-y-4'>
            <div className='text-accent text-3xl font-extrabold'>{title}</div>
            <div>{desc}</div>
            <div className=' border-2  border-[#cf5c36] bg-[#121212] rounded-full  text-white h-10 w-[120px] flex justify-center items-center mx-20 sm:mx-24'><a href="#">Github Link</a></div>
        </div>
    </div>
  )
}

export default Card