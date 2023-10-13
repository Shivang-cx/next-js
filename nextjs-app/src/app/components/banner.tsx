import Image from 'next/image'
import Btn from "./button";

export default function Banner() {
    return (
        <section className='banner-main mt-[-110px] relative'>
            <Image src="/images/Hero.png" width={1920} height={1900} alt='Banner'/>
            <div className='image-container w-full h-[800px] absolute top-[0] left-0 right-0 bottom-[50vh] mt-[35vh] z-[10]'>
            <img className='top-left absolute top-0 left-[15vw] blur-sm transition ease-in-out delay-100 hover:blur-none' src='/images/Hero-Image-For-top-left.png' alt="" />
            <img className='top-right absolute top-0 right-[15vw] blur-sm transition ease-in-out delay-100 hover:blur-none' src='/images/Hero-Image-For-top-right.png'  alt="" />
            <img className='bottom-left absolute top-[60%] left-[25vw] blur-sm transition ease-in-out delay-100 hover:blur-none' src='/images/Hero-Image-For-bottom-left.png' alt="" />
            <img className='bottom-right absolute top-[60%] right-[20vw] blur-sm transition ease-in-out delay-100 hover:blur-none' src='/images/Hero-Image-For-bottom-right.png' alt="" />
            </div>
            <div className='banner-text w-auto h-[800px] absolute top-[0] left-[50%] translate-x-[-50%] bottom-[50vh] mt-[35vh] z-[10] flex flex-col items-center'>
            <h1 className='text-[86px] text-white leading-[86px]'>Next Gen <br/> NFT Avatars</h1>
            <p className='max-w-[630px]  mx-auto mt-[20px] mb-[30px] text-white text-[16px] leading-[26px] flex'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem nam nisl, vitae amet pellentesque. Tristique cursus duis lectus dolor. Et interdum tristique elit elit nisl, eget praesent.</p>
            <Btn text="View in Rarible" />
            </div>
        </section>
    );
}