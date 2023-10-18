import Image from 'next/image'  
import React, { useState } from 'react';

export default function Roadmap() {
    const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index: React.SetStateAction<number>) => {
    setActiveTab(index);
  };
  
    return (
    <section className='Rodmap-outer py-[150px] bg-[#0f0f11]' id="roadmap">
        <div className="container mx-auto">
            <h2 className='text-center spin-slow text-[64px] leading-[74px] text-[#fff] mb-[20px]'>Roadmap</h2>
        <p className='text-center max-w-[630px] mx-auto mb-[70px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere sapien risus imperdiet felis, dictumst eget nulla. Laoreet id volutpat tincidunt</p>
        </div>
        <div className="tabsection flex  max-w-[85%] mr-0 ml-auto relative">
                <div className={`img-sec flex flex-col w-[40%] mr-[100px] absolute top-[50%] transition ease-in-out delay-100 translate-y-[-50%] ${activeTab === 0 ? 'opacity-100' : 'opacity-0'}`}>
                    <Image  className='cust-img w-full' width={500} height={500} src="/images/tab-1.png" alt={'tab-1'} />
                    <p className='mt-[40px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure exercitationem unde, numquam tempora aspernatur tenetur fuga voluptatibus nisi ratione impedit, cupiditate deserunt? Magnam animi unde cupiditate eius voluptatem doloremque id?</p>
                </div>
                <div className={`img-sec flex flex-col w-[40%] mr-[100px] absolute top-[50%] transition ease-in-out delay-100 translate-y-[-50%] ${activeTab === 1 ? 'opacity-100' : 'opacity-0'}`}>
                    <Image  className='cust-img w-full' width={500} height={500} src="/images/tab-2.png" alt={'tab-2'} />
                    <p className='mt-[40px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure exercitationem unde, numquam tempora aspernatur tenetur fuga voluptatibus nisi ratione impedit, cupiditate deserunt? Magnam animi unde cupiditate eius voluptatem doloremque id?</p>
                </div>
                <div className={`img-sec flex flex-col w-[40%] mr-[100px] absolute top-[50%] transition ease-in-out delay-100 translate-y-[-50%] ${activeTab === 2 ? 'opacity-100' : 'opacity-0'}`}>
                    <Image  className='cust-img w-full' width={500} height={500} src="/images/tab-3.png" alt={'tab-3'} />
                    <p className='mt-[40px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure exercitationem unde, numquam tempora aspernatur tenetur fuga voluptatibus nisi ratione impedit, cupiditate deserunt? Magnam animi unde cupiditate eius voluptatem doloremque id?</p>
                </div>
                <div className={`img-sec flex flex-col w-[40%] mr-[100px] absolute top-[50%] transition ease-in-out delay-100 translate-y-[-50%] ${activeTab === 3 ? 'opacity-100' : 'opacity-0'}`}>
                    <Image  className='cust-img w-full' width={500} height={500} src="/images/tab-4.png" alt={'tab-4'} />
                    <p className='mt-[40px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure exercitationem unde, numquam tempora aspernatur tenetur fuga voluptatibus nisi ratione impedit, cupiditate deserunt? Magnam animi unde cupiditate eius voluptatem doloremque id?</p>
                </div>
                <div className={`img-sec flex flex-col w-[40%] mr-[100px] absolute top-[50%] transition ease-in-out delay-100 translate-y-[-50%] ${activeTab === 4 ? 'opacity-100' : 'opacity-0'}`}>
                    <Image  className='cust-img w-full' width={500} height={500} src="/images/tab-5.png" alt={'tab-5'} />
                    <p className='mt-[40px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure exercitationem unde, numquam tempora aspernatur tenetur fuga voluptatibus nisi ratione impedit, cupiditate deserunt? Magnam animi unde cupiditate eius voluptatem doloremque id?</p>
                </div>
                <div className={`img-sec flex flex-col w-[40%] mr-[100px] absolute top-[50%] transition ease-in-out delay-100 translate-y-[-50%] ${activeTab === 5 ? 'opacity-100' : 'opacity-0'}`}>
                    <Image  className='cust-img w-full' width={500} height={500} src="/images/tab-6.png" alt={'tab-6'} />
                    <p className='mt-[40px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure exercitationem unde, numquam tempora aspernatur tenetur fuga voluptatibus nisi ratione impedit, cupiditate deserunt? Magnam animi unde cupiditate eius voluptatem doloremque id?</p>
                </div>
                <div className='tab-hading w-[50%] flex flex-col mr-0 ml-auto'>
                    <div className={`heading-wrapper relative py-[50px] pl-[80px] pr-[0] border  border-[#565656] mr-[15px] relative bg-transparent transition ease-in-out delay-100 mb-[15px]  ${activeTab === 0 ? 'border-[#91ff03]' : 'border-[#565656]'}` }>
                    <h4 className='absolute w-[60px] h-[60px] border border-[#565656] top-[50%] translate-y-[-50%] left-[-30px] rounded-full text-[32px] leading-[42px] flex justify-center items-center bg-[#0f0f11]'>1</h4>
                    <h3 className='text-[32px] leading-[42px] hover:cursor-pointer' onClick={() => handleClick(0)}>Mint on Ethereum</h3>
                    </div>
                    <div className={`heading-wrapper relative py-[50px] pl-[80px] pr-[0] border  border-[#565656] mr-[15px] relative bg-transparent transition ease-in-out delay-100 mb-[15px]  ${activeTab === 1 ? 'border-[#91ff03]' : 'border-[#565656]'}` }>
                    <h4 className='absolute w-[60px] h-[60px] border border-[#565656] top-[50%] translate-y-[-50%] left-[-30px] rounded-full text-[32px] leading-[42px] flex justify-center items-center bg-[#0f0f11]'>2</h4>
                    <h3 className='text-[32px] leading-[42px] hover:cursor-pointer' onClick={() => handleClick(1)}>Reveal metadata and rarity</h3>
                    </div>
                    <div className={`heading-wrapper relative py-[50px] pl-[80px] pr-[0] border  border-[#565656] mr-[15px] relative bg-transparent transition ease-in-out delay-100 mb-[15px]  ${activeTab === 2 ? 'border-[#91ff03]' : 'border-[#565656]'}` }>
                    <h4 className='absolute w-[60px] h-[60px] border border-[#565656] top-[50%] translate-y-[-50%] left-[-30px] rounded-full text-[32px] leading-[42px] flex justify-center items-center bg-[#0f0f11]'>3</h4>
                    <h3 className='text-[32px] leading-[42px] hover:cursor-pointer' onClick={() => handleClick(2)}>Social media assets</h3>
                    </div>
                    <div className={`heading-wrapper relative py-[50px] pl-[80px] pr-[0] border  border-[#565656] mr-[15px] relative bg-transparent transition ease-in-out delay-100 mb-[15px]  ${activeTab === 3 ? 'border-[#91ff03]' : 'border-[#565656]'}` }>
                    <h4 className='absolute w-[60px] h-[60px] border border-[#565656] top-[50%] translate-y-[-50%] left-[-30px] rounded-full text-[32px] leading-[42px] flex justify-center items-center bg-[#0f0f11]'>4</h4>
                    <h3 className='text-[32px] leading-[42px] hover:cursor-pointer' onClick={() => handleClick(3)}>Public Profile</h3>
                    </div>
                    <div className={`heading-wrapper relative py-[50px] pl-[80px] pr-[0] border  border-[#565656] mr-[15px] relative bg-transparent transition ease-in-out delay-100 mb-[15px]  ${activeTab === 4 ? 'border-[#91ff03]' : 'border-[#565656]'}` }>
                    <h4 className='absolute w-[60px] h-[60px] border border-[#565656] top-[50%] translate-y-[-50%] left-[-30px] rounded-full text-[32px] leading-[42px] flex justify-center items-center bg-[#0f0f11]'>5</h4>
                    <h3 className='text-[32px] leading-[42px] hover:cursor-pointer' onClick={() => handleClick(4)}>Club Shop</h3>
                    </div>
                    <div className={`heading-wrapper relative py-[50px] pl-[80px] pr-[0] border  border-[#565656] mr-[15px] relative bg-transparent transition ease-in-out delay-100  ${activeTab === 5 ? 'border-[#91ff03]' : 'border-[#565656]'}`}>
                    <h4 className='absolute w-[60px] h-[60px] border border-[#565656] top-[50%] translate-y-[-50%] left-[-30px] rounded-full text-[32px] leading-[42px] flex justify-center items-center bg-[#0f0f11]'>6</h4>
                    <h3 className='text-[32px] leading-[42px] hover:cursor-pointer' onClick={() => handleClick(5)}>Private Club - Community Website</h3>
                    </div>
                </div>
            </div>
    </section>
    );
}