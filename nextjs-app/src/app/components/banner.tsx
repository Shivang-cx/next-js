import Image from 'next/image'
import Btn from "./button";
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Power3 } from 'gsap/gsap-core';

export default function Banner() {
    
    //----------------------------------------------------------------------------------
    // const handleMouseEnter = () => {
    //     // Use GSAP to rotate the inner images
    //     gsap.to('.image-box', { rotation: 360 });
    //   };
    
    //   const handleMouseLeave = () => {
    //     // Reset the rotation
    //     gsap.to('.image-box', { rotation: 0 });
    //   };

    //----------------------------------------------------------------------------------
    // const containerRef = useRef<HTMLDivElement>(null);
    // const imagesRef = useRef<HTMLDivElement[]>([]);
  
    // useEffect(() => {
    //   const container = containerRef.current;
    //   const images = imagesRef.current;
  
    //   if (!container || images.length !== 4) return;
  
    //   container.addEventListener('mouseenter', (event) => {
    //     const { clientX, clientY } = event;
  
    //     images.forEach((image, index) => {
    //       const rect = image.getBoundingClientRect();
    //       const offsetX = clientX - rect.left - rect.width / 2;
    //       const offsetY = clientY - rect.top - rect.height / 2;
  
    //       gsap.to(image, {
    //         x: offsetX,
    //         y: offsetY,
    //         duration: 0.5,
    //       });
    //     });
    //   });
  
    //   container.addEventListener('mouseleave', () => {
    //     images.forEach((image) => {
    //       gsap.to(image, {
    //         x: 0,
    //         y: 0,
    //         duration: 0.5,
    //       });
    //     });
    //   });
    // }, []);
//---------------------------------------------------------------------
//     const imageRef = useRef<HTMLImageElement>(null);

//   useEffect(() => {
//     const image = imageRef.current;
//     if (!image) return;

//     const onMouseMove = (event: MouseEvent) => {
//       const { clientX, clientY } = event;
//       gsap.to(image, { x: clientX / 20, y: clientY / 20, duration: 0.2 });
//     };

//     document.addEventListener('mousemove', onMouseMove);

//     return () => {
//       document.removeEventListener('mousemove', onMouseMove);
//     };
//       }, []);
//----------------------------------------------------------------------
const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const images = container?.querySelectorAll('.image-box');

    const handleMouseEnter = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      gsap.to(images, {
        // x: mouseX - container!.offsetLeft,
        // y: mouseY - container!.offsetTop,
        x: mouseX / 10,
        y: mouseY /10,
        stagger: 0.2,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(images, {
        x: 0,
        y: 0,
        stagger: 0.2,
      });
    };

    container?.addEventListener('mouseenter', handleMouseEnter);
    container?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container?.removeEventListener('mouseenter', handleMouseEnter);
      container?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
//-----------------------------------------------------------------------
//  const containerRef = useRef<HTMLDivElement>(null);
//   const imagesRef = useRef<HTMLImageElement[]>([]);
//  useEffect(() => {
//     const container = containerRef.current;
//     const images = imagesRef.current;

//     if (container && images) {
//       const tl = gsap.timeline({ defaults: { ease: Power3.easeOut } });
      
//       container.addEventListener('mousemove', (e) => {
//         const { clientX, clientY } = e;
//         const x = clientX - container.offsetLeft;
//         const y = clientY - container.offsetTop;

//         tl.clear(); // Clear any previous animations

//         images.forEach((image, index) => {
//           const xOffset = x / container.clientWidth - 0.5;
//           const yOffset = y / container.clientHeight - 0.5;

//           tl.to(image, {
//             x: xOffset * 100,
//             y: yOffset * 100,
//             duration: 0.1,
//           });
//         });
//       });

//       container.addEventListener('mouseleave', () => {
//         tl.clear(); // Clear any previous animations
//         images.forEach((image) => {
//           tl.to(image, {
//             x: 0,
//             y: 0,
//             duration: 0.,
//           });
//         });
//       });
//     }
//   }, []);

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