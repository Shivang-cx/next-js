import React, { useState, useEffect } from 'react';
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';

interface FAQProps {
    question: string;
    answer: string;
}

const FAQComponent: React.FC<FAQProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        AOS.init({
             duration: 800,
             once: true,
           })
     }, []) 
    return (

        <div>
            <div className="Faq-item py-[40px] border-b-[1px] border-[#565656]"   data-aos="fade-up">
                <div className={`heading flex justify-between relative z-20 ${isOpen ? 'pb-0' : 'pb-[20px]'}`} onClick={toggleAccordion}>
                    <h3 className="text-[32px] leading-[34px]">{question}</h3>
                    <Image src="./images/icon.svg" width={20} height={10} alt="drop-down" className={`transition ease-in-out  duration-700 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
                </div>
                <div className={`content transition ease-in-out duration-700 relative ${isOpen ? 'mt-[20px]': 'mt-[-50px] truncate'}`}>
                    <p className={`text-[16px] text-[#d6d6d6] leading-[26px] transition ease-in-out duration-700  ${isOpen ? 'opacity-100': 'opacity-0'}`}>
                        {answer}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FAQComponent;
