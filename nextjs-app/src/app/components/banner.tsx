import Image from 'next/image'
import Btn from "./button";
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Power3 } from 'gsap/gsap-core';

export default function Banner() {

const containerRef = useRef(null);

  useEffect(() => {
    const container:any = containerRef.current;

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e:any) => {
      mouseX = e.clientX - container.offsetLeft;
      mouseY = e.clientY - container.offsetTop;

      gsap.to('.image-box', {
        x: mouseX / 10,
        y: mouseY / 10,
        duration: 0.5,
      });
    };

    const handleMouseLeave = () => {
      gsap.to('.image-box', {
        x: 0,
        y: 0,
        duration: 0.5,
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

    return (
        <section className='banner-main mt-[-110px] relative' id="home">
            <Image src="/images/Hero.png" width={1920} height={1900} alt='Banner'/>
            <div  className='image-container w-full h-[800px] absolute top-[0] left-0 right-0 bottom-[50vh] mt-[35vh] z-[10]' ref={containerRef}>
                <img className='image-box top-left absolute top-0 left-[15vw] blur-sm transition ease-in-out duation-700 hover:blur-none'  src='/images/Hero-Image-For-top-left.png' alt="" />
                <img className='image-box top-right absolute top-0 right-[15vw] blur-sm transition ease-in-out duation-700 hover:blur-none'  src='/images/Hero-Image-For-top-right.png'  alt="" />
                <img className='image-box bottom-left absolute top-[60%] left-[25vw] blur-sm transition ease-in-out duation-700 hover:blur-none' src='/images/Hero-Image-For-bottom-left.png' alt="" />
                <img className='image-box bottom-right absolute top-[60%] right-[20vw] blur-sm transition ease-in-out duation-700 hover:blur-none' src='/images/Hero-Image-For-bottom-right.png' alt="" />
            </div>
            <div className='banner-text w-auto h-[800px] absolute top-[0] left-[50%] translate-x-[-50%] bottom-[50vh] mt-[35vh] z-[10] flex flex-col items-center box'>
            <h1 className='text-[86px] text-white leading-[86px] text-center testing-header'>Next Gen <br/> NFT Avatars</h1>
            <p className='max-w-[630px]  mx-auto mt-[20px] mb-[30px] text-[16px] leading-[26px] flex text-[#d6d6d6] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem nam nisl, vitae amet pellentesque. Tristique cursus duis lectus dolor. Et interdum tristique elit elit nisl, eget praesent.</p>
            <Btn text="View in Rarible"/>
            </div>
        </section>
    );
}