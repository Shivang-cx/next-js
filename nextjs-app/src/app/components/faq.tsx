
import React from 'react';
import Image from 'next/image';
import FAQComponent from './faqcomponent';

const Faq: React.FC = () => {   
    const faqs = [
        {
            question: 'When is the public mint date?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna non elementum amet. Fermentum, tincidunt urna, felis volutpat est eleifend proin. Malesuada fermentum vivamus phasellus egestas',
        },
        {
            question: 'When is the whitelist mint date?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna non elementum amet. Fermentum, tincidunt urna, felis volutpat est eleifend proin. Malesuada fermentum vivamus phasellus egestas',
        },
        {
            question: 'What is the mint price?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna non elementum amet. Fermentum, tincidunt urna, felis volutpat est eleifend proin. Malesuada fermentum vivamus phasellus egestas',
        },
        {
            question: 'How many whitelist spots will be available?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna non elementum amet. Fermentum, tincidunt urna, felis volutpat est eleifend proin. Malesuada fermentum vivamus phasellus egestas',
        },
        {
            question: 'How can I earn a whitelist spot?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna non elementum amet. Fermentum, tincidunt urna, felis volutpat est eleifend proin. Malesuada fermentum vivamus phasellus egestas',
        }
        // Add more FAQs as needed
    ];
    return (
        <section className="faq-sec relative pt-[150px] z-10">
            <div className="container mx-auto">
            <div className="questions-shape-left absolute left-0 top-[38%] right-auto bottom-auto z-[0] w-[300px] h-[500px] bg-[#552675] blur-[300px]"></div>
                <h2 className='text-center spin-slow text-[56px] leading-[66px] text-[#fff]'>In case you<br />missed anything</h2>
                <p className='text-center max-w-[630px] mx-auto mt-[20px] mb-[50px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie viverra in id vitae gravida condimentum Eget orci, diam egestas non pharetra fer</p>
                <div className="FAQ-Wrapper max-w-[920px] mx-auto">
                    <div className="faq-container">
                        {faqs.map((faq, index) => (
                            <FAQComponent key={index} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </div>
                <Image src="/images/Shape_Right.png" width={290} height={528} alt='bg-image' className='absolute right-0 top-[37%]'/>
            </div>
        </section>
    );
}

export default Faq