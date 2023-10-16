import React, { useEffect } from 'react';
import gsap from 'gsap';
import Btn from "./button";
import Image from 'next/image'
const ScrollingImages = () => {
  useEffect(() => {
    const images = document.querySelectorAll('.image');
    const container = document.querySelectorAll('.images-container');
    // const revcontainer = document.querySelector('.revers');

    const totalImages = images.length;
    const imageWidth = images[0].clientWidth;
    const containerWidth = totalImages * imageWidth;

    // container.style.width = `${containerWidth}px`;

    const tl = gsap.timeline({ repeat: -1 });

    tl.fromTo(container, { y: 0 }, { y: `-${imageWidth}px`, duration: 1, speed:1, ease: 'power2.inOut' })
      .to(container, { y: `-${2 * imageWidth}px`, duration: 1, ease: 'power2.inOut' }, '+=1')
      .to(container, { y: `-${3 * imageWidth}px`, duration: 1, ease: 'power2.inOut' }, '+=1')
      .to(container, { y: 0, duration: 1, ease: 'power2.inOut' }, '+=1');

      // const bt = gsap.timeline({repeat:1});

      // bt.fromTo(revcontainer, { y: 0 }, { y: `${imageWidth}px`, duration: 1, speed:8, ease: 'power2.inOut' })
      // .to(revcontainer, { y: `${2 * imageWidth}px`, duration: 1, ease: 'power2.inOut' }, '+=1')
      // .to(revcontainer, { y: `${3 * imageWidth}px`, duration: 1, ease: 'power2.inOut' }, '+=1')
      // .to(revcontainer, { y: 0, duration: 1, ease: 'power2.inOut' }, '+=1');

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
            <div className="inner-container flex flex-col gap-y-[20px]">
                <Image className='image' src="/images/Hero-Image-For-bottom-left.png" width={250} height={250} alt="col-img"/>
                <Image className='image' src="/images/Hero-Image-For-bottom-left.png" width={250} height={250} alt="col-img"/>
                <Image className='image' src="/images/Hero-Image-For-bottom-left.png" width={250} height={250} alt="col-img"/>
                <Image className='image' src="/images/Hero-Image-For-bottom-left.png" width={250} height={250} alt="col-img"/>
                <Image className='image' src="/images/Hero-Image-For-bottom-left.png" width={250} height={250} alt="col-img"/>
            </div>
            </div>
            <div className="flex flex-col gap-y-[20px] images-container revers">
            <div className="inner-container flex flex-col gap-y-[20px]">
                <Image className='image' src="/images/Hero-Image-For-bottom-right.png" width={250} height={250} alt="col-img"/>
                <Image className='image' src="/images/Hero-Image-For-bottom-right.png" width={250} height={250} alt="col-img"/>
                <Image className='image' src="/images/Hero-Image-For-bottom-right.png" width={250} height={250} alt="col-img"/>
                <Image className='image' src="/images/Hero-Image-For-bottom-right.png" width={250} height={250} alt="col-img"/>
                <Image className='image' src="/images/Hero-Image-For-bottom-right.png" width={250} height={250} alt="col-img"/>
            </div>
            </div>
            <div className="flex flex-col gap-y-[20px] images-container">
            <div className="inner-container flex flex-col gap-y-[20px]">
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
