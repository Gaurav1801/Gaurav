'use client'
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import Link from "next/link";


    
 
export default function HeroSection() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/RESUME_G.pdf';
    link.download = 'RESUME_G';
    link.click();
  };
  return (
    <section className="mt-20 sm:mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 md:py-20 md:px-20 text-center sm:text-left">
          <h1 className="text-white text-4xl lg:text-6xl mb-5 font-bold">
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
             Hello , I'm 
            </span>
            <br/>
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Gaurav',
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web developer',
        1000,
        'Frontend developer',
        1000,
        // 'Mobile developer',
        // 1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
            
          </h1>
          <p className="text-[#ADB7BE] text-lg lg:text-xl">
            
          </p>
          <div className="mt-3">
            <button className="px-6 py-3 rounded-full mr-4 w-full sm:w-fit bg-gradient-to-br from-blue-500 to-pink-500 text-white hover:bg-slate-200">
             <Link href='#contact'>Hire Me
             </Link> 
            </button>
            <button onClick={handleDownload} className="px-1 py-1 mt-4 rounded-full mr-4 w-full sm:w-fit text-white bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800">
              <span className="block  bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
                </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-3 lg:mt-2">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] relative lg:w-[450px] lg:h-[450px] ">
            <Image
              src="/image/myavtar-removebg-preview.png"
              alt="hero image"
              className="absolute mt-2 lg:mt-0 transform -translate-x-1/2 -translate-y-1/2 top-1/3 left-1/2"
              width={400}
              height={400}
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
}
