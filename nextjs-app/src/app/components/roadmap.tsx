import Image from 'next/image'  
import React, { useState } from 'react';

export default function Roadmap() {
    // Step 1: Create a state variable
    const [isActive, setIsActive] = useState(true);

    // Step 2: Define a click handler
    const handleClick = () => {
      setIsActive(!isActive); // Toggle the boolean value
    }
  
    return (
    <section className='Rodmap-outer py-[150px] bg-[#0f0f11]' id="roadmap">
        <div className="container mx-auto">
            <h2 className='text-center spin-slow text-[64px] leading-[74px] text-[#fff] mb-[20px]'>Roadmap</h2>
        <p className='text-center max-w-[630px] mx-auto mb-[70px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere sapien risus imperdiet felis, dictumst eget nulla. Laoreet id volutpat tincidunt</p>
        </div>
        <div className="tabsection flex  max-w-[85%] mr-0 ml-auto">
                <div className="img-sec flex flex-col w-[40%] mr-[100px]">
                    <Image  className='cust-img w-full' width={500} height={500} src="/images/tab-1.png" alt={'tab-1'} />
                    <p className='mt-[40px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure exercitationem unde, numquam tempora aspernatur tenetur fuga voluptatibus nisi ratione impedit, cupiditate deserunt? Magnam animi unde cupiditate eius voluptatem doloremque id?</p>
                </div>
                <div className='tab-hading w-[50%] flex flex-col'>
                    <div className={isActive  ?  "heading-wrapper relative py-[50px] pl-[80px] pr-[0] border border-[#565656] mr-[15px] relative bg-transparent mb-[15px]": "heading-wrapper relative py-[50px] pl-[80px] pr-[0] border border-[#91ff03] mr-[15px] relative bg-transparent mb-[15px]" }>
                    <h4 className='absolute w-[60px] h-[60px] border border-[#565656] top-[50%] translate-y-[-50%] left-[-30px] rounded-full text-[32px] leading-[42px] flex justify-center items-center bg-[#0f0f11]'>1</h4>
                    <h3 className='text-[32px] leading-[42px]' onClick={handleClick}>Mint on Ethereum</h3>
                    </div>
                    <div className="heading-wrapper relative py-[50px] pl-[80px] pr-[0] border border-[#565656] mr-[15px] relative bg-transparent mb-[15px]">
                    <h4 className='absolute w-[60px] h-[60px] border border-[#565656] top-[50%] translate-y-[-50%] left-[-30px] rounded-full text-[32px] leading-[42px] flex justify-center items-center bg-[#0f0f11]'>2</h4>
                    <h3 className='text-[32px] leading-[42px]'>Reveal metadata and rarity</h3>
                    </div>
                    <div className="heading-wrapper relative py-[50px] pl-[80px] pr-[0] border border-[#565656] mr-[15px] relative bg-transparent mb-[15px]">
                    <h4 className='absolute w-[60px] h-[60px] border border-[#565656] top-[50%] translate-y-[-50%] left-[-30px] rounded-full text-[32px] leading-[42px] flex justify-center items-center bg-[#0f0f11]'>3</h4>
                    <h3 className='text-[32px] leading-[42px]'>Social media assets</h3>
                    </div>
                    <div className="heading-wrapper relative py-[50px] pl-[80px] pr-[0] border border-[#565656] mr-[15px] relative bg-transparent mb-[15px]">
                    <h4 className='absolute w-[60px] h-[60px] border border-[#565656] top-[50%] translate-y-[-50%] left-[-30px] rounded-full text-[32px] leading-[42px] flex justify-center items-center bg-[#0f0f11]'>4</h4>
                    <h3 className='text-[32px] leading-[42px]'>Public Profile</h3>
                    </div>
                    <div className="heading-wrapper relative py-[50px] pl-[80px] pr-[0] border border-[#565656] mr-[15px] relative bg-transparent mb-[15px]">
                    <h4 className='absolute w-[60px] h-[60px] border border-[#565656] top-[50%] translate-y-[-50%] left-[-30px] rounded-full text-[32px] leading-[42px] flex justify-center items-center bg-[#0f0f11]'>5</h4>
                    <h3 className='text-[32px] leading-[42px]'>Club Shop</h3>
                    </div>
                    <div className="heading-wrapper relative py-[50px] pl-[80px] pr-[0] border border-[#565656] mr-[15px] relative bg-transparent">
                    <h4 className='absolute w-[60px] h-[60px] border border-[#565656] top-[50%] translate-y-[-50%] left-[-30px] rounded-full text-[32px] leading-[42px] flex justify-center items-center bg-[#0f0f11]'>6</h4>
                    <h3 className='text-[32px] leading-[42px]'>Private Club - Community Website</h3>
                    </div>
                </div>
            </div>
    </section>
    );
}