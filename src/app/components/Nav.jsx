import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import NavLink from './NavLink';

const navLinks = [
    { title: "About", path: "#about" },
    { title: "Projects", path: "#projects" },
    { title: "Contact me", path: "#contact" },

];
const Nav = () => {
    return (
        <nav className='fixed top-0 left-0 right-0 bg-[#121212] bg-opacity-90'>
            <div className='flex flex-wrap items-center justify-between mx-auto py-4'>

                <Link href="/">
                    <Image src="/assets/logo.png" height={85} width={85}>
                    </Image></Link>
                <div className="menu hideen md:block md:w-auto max-lg:hidden" id='navbar'>
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 '>{
                        navLinks.map( ( link, index ) =>
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li> )
                    }
                    </ul>

                </div>

            </div>

        </nav>
    )
};

export default Nav;
