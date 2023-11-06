import Image from 'next/image'  

export default function OurTeam() {
    return(
        
        <section className='our team py-[130px] relative' id='Team'>
            <div className="container mx-auto z-10 relative">
            <h2 className='text-center spin-slow text-[56px] leading-[66px] text-[#fff]'>Our Team</h2>
            <p className='text-center max-w-[630px] mx-auto mt-[20px] mb-[50px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere sapien risus imperdiet felis, dictumst eget nulla. Laoreet id volutpat tincidunt</p>
            
            <div className="creators flex mt-[75px] justify-between">
                <div className="creators-col flex flex-col justify-center items-center">
                    <a className='creators-img w-[200px] h-[200px] bg-[#ffffff1a] border rounded-full border-transparent relative' href="javascript:void(0)">
                        <Image src="/images/Team1.png" width={150} height={150} alt='teamimg' className='normal-img absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 w-[150px] h-[150px] transition ease-in duration-300'/>
                        <Image src="/images/Team-Hover1.png" width={150} height={150} alt='teamimg' className='hover-img absolute top-[50%] left-[50%] z-0 w-[150px] h-[150px] transition ease-in duration-300 opacity-0'/>
                    </a>
                    <a className='creator-name text-[#fff] text-[36px] leading-[36px] mt-[25px] flex flex-col justify-center items-center' href="javascript:void(0)">Peter P. Gass <span className='text-[#91ff03] text-[16px] leading-[26px] mt-[10px]'>CEO & 3D Designer</span> </a>
                </div>
                <div className="creators-col flex flex-col justify-center items-center">
                    <a className='creators-img w-[200px] h-[200px] bg-[#ffffff1a] border rounded-full border-transparent relative' href="javascript:void(0)">
                        <Image src="/images/Team2.png" width={150} height={150} alt='teamimg' className='normal-img absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 w-[150px] h-[150px] transition ease-in duration-300'/>
                        <Image src="/images/Team-Hover2.png" width={150} height={150} alt='teamimg' className='hover-img absolute top-[50%] left-[50%] z-0 w-[150px] h-[150px] transition ease-in duration-300 opacity-0'/>
                    </a>
                    <a className='creator-name text-[#fff] text-[36px] leading-[36px] mt-[25px] flex flex-col justify-center items-center' href="javascript:void(0)">Scott N. Scott<span className='text-[#91ff03] text-[16px] leading-[26px] mt-[10px]'>Chief Marketing Officer</span> </a>
                </div>
                <div className="creators-col flex flex-col justify-center items-center">
                    <a className='creators-img w-[200px] h-[200px] bg-[#ffffff1a] border rounded-full border-transparent relative' href="javascript:void(0)">
                        <Image src="/images/Team3.png" width={150} height={150} alt='teamimg' className='normal-img absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 w-[150px] h-[150px] transition ease-in duration-300'/>
                        <Image src="/images/Team-Hover3.png" width={150} height={150} alt='teamimg' className='hover-img absolute top-[50%] left-[50%] z-0 w-[150px] h-[150px] transition ease-in duration-300 opacity-0'/>
                    </a>
                    <a className='creator-name text-[#fff] text-[36px] leading-[36px] mt-[25px] flex flex-col justify-center items-center' href="javascript:void(0)">Anna R. Strang<span className='text-[#91ff03] text-[16px] leading-[26px] mt-[10px]'>Chief Operating Officer</span> </a>
                </div>
                <div className="creators-col flex flex-col justify-center items-center">
                    <a className='creators-img w-[200px] h-[200px] bg-[#ffffff1a] border rounded-full border-transparent relative' href="javascript:void(0)">
                        <Image src="/images/Team4.png" width={150} height={150} alt='teamimg' className='normal-img absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 w-[150px] h-[150px] transition ease-in duration-300'/>
                        <Image src="/images/Team-Hover4.png" width={150} height={150} alt='teamimg' className='hover-img absolute top-[50%] left-[50%] z-0 w-[150px] h-[150px] transition ease-in duration-300 opacity-0'/>
                    </a>
                    <a className='creator-name text-[#fff] text-[36px] leading-[36px] mt-[25px] flex flex-col justify-center items-center' href="javascript:void(0)">Jeffrey V. Oates<span className='text-[#91ff03] text-[16px] leading-[26px] mt-[10px]'>Chief Financial Officer</span> </a>
                </div>
            </div>
            </div>  
            <div className="theme-shape absolute left-[19%] top-auto right-auto bottom-0 z-0 w-[1200px] h-[500px] bg-[#622b45] blur-[200px]"></div>
        </section>
    );
}