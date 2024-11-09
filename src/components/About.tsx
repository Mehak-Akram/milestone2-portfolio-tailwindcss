import React from "react";
import Image from "next/image";
import about from "../../public/about.jpeg"


const About = () => {
  return (
    <div id='about' className="container pt-32">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div data-aos="zoom-in-up">
          <h2 className="text-4xl md:text-5xl font-extrabold" >About <span className="text-accent">Me</span></h2>
          <p className=" pt-2 font-extralight text-[25px]">
            I am Mehak Akram and I am a
            <span className="brown text-accent"> Front-end developer</span> As a front-end
            developer with a strong foundation in HTML, CSS,
            <br /> JavaScript, and TypeScript with a focus on Nextjs and
            Tailwind CSS,
            <br /> I focus on writing clean, efficient, and maintainable code <br />
            <span className="brown text-accent font-bold">What I am Learning</span><br />
            Crafting responsive layouts with HTML & CSS
            <br />
            Adding interactivity with JavaScript
            <br />
            Exploring popular frameworks like React and Nextjs
            <br />
            Experimenting with UI/UX design basics
          </p>
        </div>
        <div>
          <div className="skills grid grid-cols-2 text-accent text-3xl sm:text-4xl font-extrabold">
            <Image src={about} alt={"about"} className="about-img mx-12 border-2  border-[#cf5c36] rounded-full w-[600px] sm:w-[650px]" ></Image>
            {/* <div className="space-y-2">
              <h2 data-aos="zoom-in-up">HTML</h2>
              <h2 data-aos="zoom-in-up">CSS</h2>
              <h2 data-aos="zoom-in-up">JAVASCRIPT</h2>
            </div>
            <div className="space-y-2">
              <h2 data-aos="zoom-in-up">TYPESCRIPT</h2>
              <h2 data-aos="zoom-in-up">NEXT.JS</h2>
              <h2 data-aos="zoom-in-up">TAILWIND</h2>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;