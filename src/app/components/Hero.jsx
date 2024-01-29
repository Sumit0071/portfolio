"use client";

import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

// import CustomCLI from './CustomCLI';
// import { Terminal } from 'xterm';
const MontserratFont = "'Montserrat', sans-serif"; // Assign font to a constant

const Hero = () => {
    const PfpImg = "/assets/pfp2.jpg";

    return (
        <section className='lg:py-16'>

            <div className="grid grid-cols-1 sm:grid-cols-12">

                <div className='col-span-7 place-self-center text-center 
                sm:text-left '>
                    <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>
                        <div className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 py-2'>
                            Hello,I'm {''}</div>

                        <span>
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Sumit!',
                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                    'Web Developer',
                                    1000,
                                    'ML enthusiast',
                                    1000,
                                    'I like to learn new stuffs!!',
                                    1000
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ fontSize: '1em', display: 'inline-block' }}
                                repeat={Infinity}
                            />
                        </span></h1>
                    <p className='text-[#ADB7BE] sm:text-lg mb-6 lg:text-xl'>
                        Let's make a better tommorow                    </p>
                    <div>
                        <button className='px-5 py-4 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br
                         from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800
                         text-white mb-4'>Hire me</button>
                        <DownloadButton />
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
            {/* <CustomCLI /> */}

        </section>
    )
};
const DownloadButton = () => {
    const handleDownload = () => {
        window.open( "/assets/resume.pdf", '_blank' );
    };
    return (
        <button className='btn-primary px-1 py-1 border 
       w-full sm:w-fit text-white rounded-full mr-4
       hover:bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500  'onClick={handleDownload} >
            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full 
            px-5 py-4'>Download CV</span></button>
    );
};
export default Hero;
