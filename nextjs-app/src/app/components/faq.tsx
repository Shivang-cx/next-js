import { useState } from "react";
import Image from "next/image";

export default function Faq() {
    const [activeTab, setActiveTab] = useState(0);

    const handleClick = (index: React.SetStateAction<number>) => {
      setActiveTab(index);
    };

    return(
        <section className="faq-sec relative pt-[150px]">
            <div className="container mx-auto">
                <h2 className='text-center spin-slow text-[56px] leading-[66px] text-[#fff]'>In case you<br/>missed anything</h2>
                <p className='text-center max-w-[630px] mx-auto mt-[20px] mb-[50px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie viverra in id vitae gravida condimentum Eget orci, diam egestas non pharetra fer</p>
                <div className="FAQ-Wrapper max-w-[920px] mx-auto   ">
                    <div className="Faq-item py-[40px] border-b-[1px] border-[#565656]">
                        <div className="heading flex justify-between">
                            <h3 className="text-[32px] leading-[34px]" onClick={() => handleClick(0)}>When is the public mint date?</h3>
                            <Image  src="./images/icon.svg" width={20} height={10} alt="drop-down" onClick={() => handleClick(0)} className={`transition ease-in-out delay-300 ${activeTab === 0 ? 'rotate-180':'rotate-0'}`}/>
                        </div>
                        <div className={`content  transition ease-in-out delay-300 ${activeTab === 0 ? 'h-[100px] opacity-100 pt-[20px]' : 'h-[0px] opacity-0 pt-[0px]'}`}>
                        <p className="text-[16px] text-[#d6d6d6] leading-[26px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus facere deleniti nesciunt magni laudantium molestias blanditiis. Velit placeat labore aspernatur libero aliquid laboriosam, voluptates dicta, facere quaerat soluta quisquam ipsa.</p>
                        </div>
                    </div>
                    <div className="Faq-item py-[40px] border-b-[1px] border-[#565656]">
                        <div className="heading flex justify-between">
                            <h3 className="text-[32px] leading-[34px]" onClick={() => handleClick(1)}>When is the public mint date?</h3>
                            <Image  src="./images/icon.svg" width={20} height={10} alt="drop-down" onClick={() => handleClick(1)} className={`transition ease-in-out delay-300 ${activeTab === 1 ? 'rotate-180':'rotate-0'}`}/>
                        </div>
                        <div className={`content  transition ease-in-out delay-300 ${activeTab === 1 ? 'h-[100px] opacity-100 pt-[20px]' : 'h-[0px] opacity-0 pt-[0px]'}`}>
                        <p className="text-[16px] text-[#d6d6d6] leading-[26px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus facere deleniti nesciunt magni laudantium molestias blanditiis. Velit placeat labore aspernatur libero aliquid laboriosam, voluptates dicta, facere quaerat soluta quisquam ipsa.</p>
                        </div>
                    </div>
                    <div className="Faq-item py-[40px] border-b-[1px] border-[#565656]">
                        <div className="heading flex justify-between">
                            <h3 className="text-[32px] leading-[34px]" onClick={() => handleClick(2)}>When is the public mint date?</h3>
                            <Image  src="./images/icon.svg" width={20} height={10} alt="drop-down" onClick={() => handleClick(2)} className={`transition ease-in-out delay-300 ${activeTab === 2 ? 'rotate-180':'rotate-0'}`}/>
                        </div>
                        <div className={`content  transition ease-in-out delay-300 ${activeTab === 2 ? 'h-[100px] opacity-100 pt-[20px]' : 'h-[0px] opacity-0 pt-[0px]'}`}>
                        <p className="text-[16px] text-[#d6d6d6] leading-[26px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus facere deleniti nesciunt magni laudantium molestias blanditiis. Velit placeat labore aspernatur libero aliquid laboriosam, voluptates dicta, facere quaerat soluta quisquam ipsa.</p>
                        </div>
                    </div>
                    <div className="Faq-item py-[40px] border-b-[1px] border-[#565656]">
                        <div className="heading flex justify-between">
                            <h3 className="text-[32px] leading-[34px]" onClick={() => handleClick(3)}>When is the public mint date?</h3>
                            <Image  src="./images/icon.svg" width={20} height={10} alt="drop-down" onClick={() => handleClick(3)} className={`transition ease-in-out delay-300 ${activeTab === 3 ? 'rotate-180':'rotate-0'}`}/>
                        </div>
                        <div className={`content  transition ease-in-out delay-300 ${activeTab === 3 ? 'h-[100px] opacity-100 pt-[20px]' : 'h-[0px] opacity-0 pt-[0px]'}`}>
                        <p className="text-[16px] text-[#d6d6d6] leading-[26px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus facere deleniti nesciunt magni laudantium molestias blanditiis. Velit placeat labore aspernatur libero aliquid laboriosam, voluptates dicta, facere quaerat soluta quisquam ipsa.</p>
                        </div>
                    </div>
                    <div className="Faq-item py-[40px] border-b-[1px] border-[#565656]">
                        <div className="heading flex justify-between">
                            <h3 className="text-[32px] leading-[34px]" onClick={() => handleClick(4)}>When is the public mint date?</h3>
                            <Image  src="./images/icon.svg" width={20} height={10} alt="drop-down" onClick={() => handleClick(4)} className={`transition ease-in-out delay-300 ${activeTab === 4 ? 'rotate-180':'rotate-0'}`}/>
                        </div>
                        <div className={`content  transition ease-in-out delay-300 ${activeTab === 4 ? 'h-[100px] opacity-100 pt-[20px]' : 'h-[0px] opacity-0 pt-[0px]'}`}>
                        <p className="text-[16px] text-[#d6d6d6] leading-[26px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus facere deleniti nesciunt magni laudantium molestias blanditiis. Velit placeat labore aspernatur libero aliquid laboriosam, voluptates dicta, facere quaerat soluta quisquam ipsa.</p>
                        </div>
                    </div>
                    <div className="Faq-item py-[40px] border-b-[1px] border-[#565656]">
                        <div className="heading flex justify-between">
                            <h3 className="text-[32px] leading-[34px]" onClick={() => handleClick(5)}>When is the public mint date?</h3>
                            <Image  src="./images/icon.svg" width={20} height={10} alt="drop-down" onClick={() => handleClick(5)} className={`transition ease-in-out delay-300 ${activeTab === 5 ? 'rotate-180':'rotate-0'}`}/>
                        </div>
                        <div className={`content  transition ease-in-out delay-300 ${activeTab === 5 ? 'h-[100px] opacity-100 pt-[20px]' : 'h-[0px] opacity-0 pt-[0px]'}`}>
                        <p className="text-[16px] text-[#d6d6d6] leading-[26px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus facere deleniti nesciunt magni laudantium molestias blanditiis. Velit placeat labore aspernatur libero aliquid laboriosam, voluptates dicta, facere quaerat soluta quisquam ipsa.</p>
                        </div>
                    </div>
                    <div className="Faq-item py-[40px] border-b-[1px] border-[#565656]">
                        <div className="heading flex justify-between">
                            <h3 className="text-[32px] leading-[34px]" onClick={() => handleClick(6)}>When is the public mint date?</h3>
                            <Image  src="./images/icon.svg" width={20} height={10} alt="drop-down" onClick={() => handleClick(6)} className={`transition ease-in-out delay-300 ${activeTab === 6 ? 'rotate-180':'rotate-0'}`}/>
                        </div>
                        <div className={`content  transition ease-in-out delay-300 ${activeTab === 6 ? 'h-[100px] opacity-100 pt-[20px]' : 'h-[0px] opacity-0 pt-[0px]'}`}>
                        <p className="text-[16px] text-[#d6d6d6] leading-[26px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus facere deleniti nesciunt magni laudantium molestias blanditiis. Velit placeat labore aspernatur libero aliquid laboriosam, voluptates dicta, facere quaerat soluta quisquam ipsa.</p>
                        </div>
                    </div>
                </div>   
            </div>
        </section>
    );
}