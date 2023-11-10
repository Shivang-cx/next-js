import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Btn from "./button";
import Image from 'next/image'
const ScrollingImages = () => {

const sliderRef = useRef(null);
const sliderTwoRef = useRef(null);
const sliderThreeRef = useRef(null);
useEffect(() => {
  const slider:any = sliderRef.current;

  const slides = slider.querySelectorAll('.image');

  const tl = gsap.timeline({ repeat: -1, yoyo: true });

  tl.to(slides,  {
    yPercent: -75 * (slides.length - 1),
    duration: slides.length * 1,
    ease: 'power1.inOut',
  });

  return () => {
    tl.kill(); // Clean up the timeline when the component is unmounted
  };
}, []);

useEffect(() => {
  const sliderTwo:any = sliderTwoRef.current;
  const slidesTow = sliderTwo.querySelectorAll('.image');

  const tl = gsap.timeline({ repeat: -1, yoyo: true });

  tl.to(slidesTow,  {
    yPercent: 75 * (slidesTow.length - 1),
    duration: slidesTow.length * 1,
    ease: 'power1.inOut',
  });

  return () => {
    tl.kill(); // Clean up the timeline when the component is unmounted
  };
}, []);

useEffect(() => {
  const sliderThree:any = sliderThreeRef.current;
  const slidesThr = sliderThree.querySelectorAll('.image');

  const tl = gsap.timeline({ repeat: -1, yoyo: true });

  tl.to(slidesThr,  {
    yPercent: -75 * (slidesThr.length - 1),
    duration: slidesThr.length * 1,
    ease: 'power1.inOut',
  });

  return () => {
    tl.kill(); // Clean up the timeline when the component is unmounted
  };
}, []);

  return (
    <section className="discover-drops-section relative" id="artwork">
    <Image src="/images/Discoverdrops.png" width={1920} height={600} alt='Banner'/>
    <div className="container mx-auto border-[3px] rounded-[6px] border-[#91ff0399] absolute top-[0] bottom-[0] left-[50%] translate-x-[-50%] pr-[50px] pl-[100px] backdrop-blur-sm bg-[#ffffff12]">
        <div className="flex justify-between h-full">
        <div className="info-sec max-w-[530px] flex flex-col justify-center">
            <h2 className="mb-[15px] text-[64px] leading-[74px] text-[#fff]">Learn first about the next Crypto Punks.</h2>
            <p className="text-[16px] leading-[26px] text-[#d6d6d6] mb-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, vulputate ipsum facilisis commodo.</p>
        <Btn text="Discover Drops"></Btn>
        </div>
        <div className="imgs-slider flex gap-x-[20px] truncate">
            <div className="flex flex-col gap-y-[20px] images-container">
            <div className="inner-container flex flex-col gap-y-[20px]" ref={sliderRef}>
                <Image className='image' src="/images/Hero-Image-For-bottom-left.png" width={250} height={250} alt="col-img"/>
                <Image className='image' src="/images/Hero-Image-For-bottom-left.png" width={250} height={250} alt="col-img"/>
                <Image className='image' src="/images/Hero-Image-For-bottom-left.png" width={250} height={250} alt="col-img"/>
                <Image className='image' src="/images/Hero-Image-For-bottom-left.png" width={250} height={250} alt="col-img"/>
                <Image className='image' src="/images/Hero-Image-For-bottom-left.png" width={250} height={250} alt="col-img"/>
            </div>
            </div>
            <div className='mt-[-90%]'>
            <div className="flex flex-col gap-y-[20px] images-container revers">
            <div className="inner-container flex flex-col gap-y-[20px]" ref={sliderTwoRef}>
                <Image className='image' src="/images/Hero-Image-For-bottom-right.png" width={250} height={250} alt="col-img"/>
                <Image className='image' src="/images/Hero-Image-For-bottom-right.png" width={250} height={250} alt="col-img"/>
                <Image className='image' src="/images/Hero-Image-For-bottom-right.png" width={250} height={250} alt="col-img"/>
                <Image className='image' src="/images/Hero-Image-For-bottom-right.png" width={250} height={250} alt="col-img"/>
                <Image className='image' src="/images/Hero-Image-For-bottom-right.png" width={250} height={250} alt="col-img"/>
            </div>
            </div>
            </div>
            <div className="flex flex-col gap-y-[20px] images-container">
            <div className="inner-container flex flex-col gap-y-[20px]" ref={sliderThreeRef}>
                <Image className='image' src="/images/Hero-Image-For-bottom-left.png" width={250} height={250} alt="col-img"/>
                <Image className='image' src="/images/Hero-Image-For-bottom-left.png" width={250} height={250} alt="col-img"/>
                <Image className='image' src="/images/Hero-Image-For-bottom-left.png" width={250} height={250} alt="col-img"/>
                <Image className='image' src="/images/Hero-Image-For-bottom-left.png" width={250} height={250} alt="col-img"/>
                <Image className='image' src="/images/Hero-Image-For-bottom-left.png" width={250} height={250} alt="col-img"/>
            </div>
            </div>
        </div>
        </div>
    </div>
</section>
  );
};

export default ScrollingImages;
