import { useState, useEffect } from 'react';
import Image from 'next/image'
import Btn from './button'
export default function Header() {
    const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return (
        <header className={`header-wrapper w-full p-[25px] fixed left-0 right-0 top-0 z-[999] transition ease-in-out delay-150  ${isSticky ? 'bg-[#111111e6]' : 'bg-transparent'}` }>
        <div className={`w-full h-full absolute top-0 left-0 bottom-0 right-0 z-[-1] transition ease-in-out delay-100`}></div>
        <div className='container mx-auto'>
        <div className="flex justify-between items-center">
        <div className="logo-wrapper">
        <Image src="/images/Logo.png" width={100} height={100} alt="Picture of the author" />
        </div>
        <div className="menu-wrapper flex items-center">
            <ul className="nav-menu flex mr-[35px]">
                    <a href="#home" className="nav-menu-link mr-[40px] text-white transition ease-in-out delay-100 hover:text-[#91ff03]">Home</a>
                <li className="nav-menu-item">
                </li>
                <li className="nav-menu-item">
                    <a href="#artwork" className="nav-menu-link mr-[40px] text-white transition ease-in-out delay-100 hover:text-[#91ff03]">Artwork</a>
                </li>
                <li className="nav-menu-item">
                    <a href="#roadmap" className="nav-menu-link mr-[40px] text-white transition ease-in-out delay-100 hover:text-[#91ff03]">Roadmap</a>
                </li>
                <li className="nav-menu-item">
                    <a href="#FAQ" className="nav-menu-link mr-[40px] text-white transition ease-in-out delay-100 hover:text-[#91ff03]">FAQ</a>
                </li>
                <li className="nav-menu-item">
                    <a href="#Team" className="nav-menu-link text-white  transition ease-in-out delay-100 hover:text-[#91ff03]">Team</a>
                </li>
            </ul>  
            <Btn text="View in Rarible" />
        </div>
        </div>
        </div>
      </header>
    );
}