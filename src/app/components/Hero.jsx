import React from 'react'
import Image from 'next/image'
const PfpImg = "/assets/hero.jpg"
const Hero = () => {
    return (
        <section>

            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className='col-span-7 place-self-center'>
                    <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>
                        Hello,I'm Sumit</h1>
                    <p className='text-[#ADB7BE] text-lg mb-6 lg:text-xl'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. quasi,

                    </p>
                    <div>
                        <button className='px-4 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-black'>Hire me</button>
                        <button className='px-4 py-3 rounded-full mr-4 bg-transparent  
                        border border-white hover:border-fuchsia-900 mt-4 text-white'>Download CV</button>
                    </div>
                </div>
                <div className='col-span-5 place-self-center mt-4 lg:mt-0  overflow-hidden'>
                    <div className="rounded-full bg-[#181818] w-[300px] h-[300px] relative">
                        <Image src={PfpImg} alt='pfpImage'
                            width={250} height={250} className='absolute transform -translate-x-1/2 
                            -translate-y-1/2 top-1/2 left-1/2 rounded-full'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero