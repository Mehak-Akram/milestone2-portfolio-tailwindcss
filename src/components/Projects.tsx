import React from 'react'
import Heading from './Heading';
import Card from './Card';
import Image from 'next/image';

const data = [
    {
        id : 0,
        title : "CountDown Timer",
        desc : "A CLI based CountDown build with Typescript Node js and Inquirer",
        img : "/img1.jpg",
    },
    {
        id : 1,
        title : "Tic Tac Toe",
        desc : "A Tic Tac Toe game build with html css and javascript ",
        img : "/tic-tac.png",
    },
    {
        id : 2,
        title : "Figma Website",
        desc : "A Figma Website build with Typescript Nextjs and Custom CSS",
        img : "/Screenshot (141).png",
    },
    {
        id : 3,
        title : "Todo List",
        desc : "A CLI based Todo List build with Typescript and Inquirer",
        img : "/img4.jpeg",
    },
    {
        id : 4,
        title : "Currency Convertor",
        desc : "Currency Convertor built HTML CSS and JavaScript",
        img : "/Screenshot (140).png",
    },
    {
        id : 5,
        title : "Blog Website",
        desc : "A blog Website build with Typescript Nextjs AND Custom CSS",
        img : "/Screenshot (142).png",
    },
]

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
        <Heading title=' Projects'/>
        <div className='grid gap-10 xl-gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
            {data.map((el)=>(<Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            
            />))}
        </div>
    </div>
  )
}

export default Projects