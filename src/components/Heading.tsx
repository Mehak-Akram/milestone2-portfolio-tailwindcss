import React from 'react'

interface propsType{
    title : string;
}

const Heading:React.FC<propsType> = ({title}) => {
  return (
    <div>
        <div className='text-center text-4xl md:text-5xl pb-8 font-extrabold'>
            <p className='inline-block pb-2'><span className='text-accent'>My</span>{title}</p>
        </div>
    </div>
  )
}

export default Heading