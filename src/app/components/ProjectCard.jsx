import React, { useState } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ( { imgUrl, title, description, gitUrl, previewUrl } ) => {
    const [showMessage, setShowMessage] = useState( false );

    const handleGitLinkClick = () => {
        if ( gitUrl === "/" ) {
            setShowMessage( true );
            setTimeout( () => setShowMessage( false ), 2000 );
        } else {
            // Navigate to the GitHub repo
            window.location.href = gitUrl;
        }
    };

    const handlePreviewLinkClick = () => {
        if ( previewUrl === "/" ) {
            setShowMessage( true );
            setTimeout( () => setShowMessage( false ), 2000 );
        } else {
            //    Navigate to the live preview
            window.location.href = previewUrl;
        }
    };

    return (
        <div>
            <div className="h-52 md:h-72 rounded-t-xl relative group" style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}>
                <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
                    <div onClick={handleGitLinkClick} className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link cursor-pointer">
                        <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </div>
                    <div onClick={handlePreviewLinkClick} className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link cursor-pointer">
                        <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </div>
                </div>
            </div>
            <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
                <h5 className="text-xl font-semibold mb-2">{title}</h5>
                <p className="text-[#ADB7BE]">{description}</p>
                {showMessage && ( gitUrl === "/" || previewUrl === "/" ) && (
                    <p className="text-red-500 text-sm">Oopsie! {gitUrl === "/" ? "GitHub repo" : "Live link"} not available at this moment .</p>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
