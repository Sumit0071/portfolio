import React from "react";
import Image from "next/image";
const Footer = () => {
    return (
        <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
            <div className="container p-12 flex flex-row justify-between">
                <Image src='/assets/logo.png' alt='logo' height={70} width={70} />
                <p className="text-slate-600">Sumit 2024 All copyrights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;