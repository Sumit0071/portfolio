
"use client";
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, addDoc } from "firebase/firestore";
// const firebaseConfig = {
//     apiKey: "AIzaSyBo1Eru7kYWnHl3-BZHJVsTwKM3b7SHKog",
//     authDomain: "portfolio-97e64.firebaseapp.com",
//     projectId: "portfolio-97e64",
//     storageBucket: "portfolio-97e64.appspot.com",
//     messagingSenderId: "949186348013",
//     appId: "1:949186348013:web:3d6fe9899239822c541de4"
// };
// const firebaseApp = initializeApp( firebaseConfig );
// const db = getFirestore( firebaseApp )
const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState( false );

    const handleSubmit = async ( e ) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        };
        const JSONdata = JSON.stringify( data );
        const endpoint = "/api/send";

        // Form the request for sending data to the server.
        const options = {
            // The method is POST because we are sending data.
            method: "POST",
            // Tell the server we're sending JSON.
            headers: {
                "Content-Type": "application/json",
            },
            // Body of the request is the JSON data we created above.
            body: JSONdata,
        };

        const response = await fetch( endpoint, options );
        const resData = await response.json();

        if ( response.status === 200 ) {
            console.log( "Message sent." );
            setEmailSubmitted( true );
        }
        // try {
        //     // Store data in Firebase Firestore
        //     const docRef = await addDoc( collection( db, "contacts" ), data );
        //     console.log( "Document written with ID: ", docRef.id );

        //     // Update state to indicate successful submission
        //     setEmailSubmitted( true );
        // } catch ( e ) {
        //     console.error( "Error adding document: ", e );
        // }
    };

    return (
        <section
            id="contact"
            className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
        >
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
            <div className="z-10">
                <h5 className="text-xl font-bold text-white my-2">
                    Let&apos;s Connect
                </h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    {" "}
                    I&apos;m currently looking for new opportunities, my inbox is always
                    open. Whether you have a question or just want to say hi, I&apos;ll
                    try my best to get back to you!
                </p>
                <div className="socials flex flex-row gap-2">
                    <Link href="https://github.com/Sumit0071">
                        <FaGithub className="bg-white h-7 w-7" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/sad2004">
                        <FaLinkedin className="bg-white h-7 w-7" />
                    </Link>
                    <Link href="https://www.instagram.com/sonic_blizard/">
                        <FaInstagram className="bg-white h-7 w-7" />
                    </Link>
                    <Link href="https://twitter.com/Sumit17912">
                        <FaTwitter className="bg-white h-7 w-7" />
                    </Link>
                    <Link href="https://open.spotify.com/user/31t3otkkh4cqli2elwerl5fm5fby">
                        <FaSpotify className="bg-white h-7 w-7" />
                    </Link>
                </div>


            </div>
            <div>
                {emailSubmitted ? (
                    <p className="text-green-500 text-sm mt-2">
                        Email sent successfully!
                    </p>
                ) : (
                    <form className="flex flex-col" onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label
                                htmlFor="email"
                                className="text-white block mb-2 text-sm font-medium"
                            >
                                Your email
                            </label>
                            <input
                                name="email"
                                type="email"
                                id="email"
                                required
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder="jacob@google.com"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="subject"
                                className="text-white block text-sm mb-2 font-medium"
                            >
                                Subject
                            </label>
                            <input
                                name="subject"
                                type="text"
                                id="subject"
                                required
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder="Just saying hi"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="message"
                                className="text-white block text-sm mb-2 font-medium"
                            >
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder="Let's talk about..."
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                        >
                            Send Message
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
};

export default EmailSection;