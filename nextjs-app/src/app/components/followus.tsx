import Image from 'next/image'  
import Btn from './button';
import React, {useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Followus() {
    useEffect(() => {
        AOS.init({
             duration: 800,
             once: true,
           })
     }, [])
    return(
        <section className='follow-us outer py-[130px] bg-[url("/images/CTA-Bg.png")] relative bg-cover' data-aos="fade-up">
            <div className="container mx-auto text-center">
                <h2 className='text-center spin-slow text-[64px] leading-[74px] text-[#fff]'>Follow us!</h2>
                <p className='text-center max-w-[630px] mx-auto mt-[20px] mb-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie viverra in id vitae gravida condimentum Eget orci, diam egestas non pharetra fer</p>
                <Btn text="Twitter"></Btn>
            </div>
            <Image src="/images/CTA-Image.png" width={540} height={305} alt='img-1'  className='absolute left-[80px] bottom-[0]'/>
            <Image src="/images/CTA-Image.png" width={540} height={305} alt='img-1'  className='absolute right-[80px] bottom-[0]'/>
        </section>
    );
}