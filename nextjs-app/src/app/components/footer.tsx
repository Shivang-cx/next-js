import Image from 'next/image'  

export default function Footer() {
    return(
        <section className='footer-main pt-[70px] bg-[#2b1a39] backdrop-blur-[5px] truncate relative'>
            <div className="container mx-auto flex border-b border-[#2e2e2e]">
                <div className="ft-left w-[456px] mr-[300px]">
                    <Image src="/images/Logo.png" width={105} height={30} alt='ft-logo'/>
                    <div className='text-[#878787] text-[16px] leading-[26px] w-[456px] whitespace-pre-wrap'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui in sapien, in donec nisl, non. Tincidunt viverra preti um enim velit tempor elementum.</div>
                </div>
                <div className="ft-right mb-[60px] flex">
                <div className="ft-col mr-[300px]">
                    <h4 className='mb-[25px] color-[#fff] text-[16px]'>Site</h4>
                    <ul>
                        <li><a href="" className='text-[#878787] text-[16px] mb-[15px] leading-[20px] flex hover:text-[#91ff03] transition ease-in duration-300'>Home</a></li>
                        <li><a href="" className='text-[#878787] text-[16px] mb-[15px] leading-[20px] flex hover:text-[#91ff03] transition ease-in duration-300'>Contact</a></li>
                        <li><a href="" className='text-[#878787] text-[16px] mb-[15px] leading-[20px] flex hover:text-[#91ff03] transition ease-in duration-300'>Terms & Conditions</a></li>
                        <li><a href="" className='text-[#878787] text-[16px] leading-[20px] flex'>Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="ft-col">
                    <h4 className='mb-[25px] color-[#fff] text-[16px]'>Admin</h4>
                    <ul>
                        <li><a href="" className='text-[#878787] text-[16px] mb-[15px] leading-[20px] flex hover:text-[#91ff03] transition ease-in duration-300'>Style Guide</a></li>
                        <li><a href="" className='text-[#878787] text-[16px] mb-[15px] leading-[20px] flex hover:text-[#91ff03] transition ease-in duration-300'>Licenses</a></li>
                        <li><a href="" className='text-[#878787] text-[16px] mb-[15px] leading-[20px] flex hover:text-[#91ff03] transition ease-in duration-300'>Changelog</a></li>
                        <li><a href="" className='text-[#878787] text-[16px] mb-[15px] leading-[20px] flex hover:text-[#91ff03] transition ease-in duration-300'>Instructions</a></li>
                        <li><a href="" className='text-[#878787] text-[16px] mb-[15px] leading-[20px] flex hover:text-[#91ff03] transition ease-in duration-300'>password</a></li>
                        <li><a href="" className='text-[#878787] text-[16px] leading-[20px] flex'>404 page</a></li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="container mx-auto flex py-[25px] justify-between">
                <p className='copy-text text-[16px] leading-[20px]'>Design & Developed by <a href="" className='text-[#91ff03] '>Flowzai</a>. Powered by <a href="" className='text-[#91ff03]'>webflow</a></p>
            </div>
            <Image src="/images/Footer.png" width={1903} height={1259} alt="footer image"  className='absolute left-[30%] top-[0%] right-auto bottom-[0%] z-[-1]'/>
        </section>
    );
}