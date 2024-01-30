import { useState } from 'react';
import { RiSunLine, RiMoonLine } from 'react-icons/ri'; // Import icons from react-icons

const ToggleIcon = () => {
    const [isDarkMode, setIsDarkMode] = useState( false );

    const toggleMode = () => {
        setIsDarkMode( !isDarkMode );
        // You can set your dark mode styles here
        // For example, changing background color of body
        if ( !isDarkMode ) {
            document.body.classList.add( 'dark' );
        } else {
            document.body.classList.remove( 'dark' );
        }
    };

    return (
        <button
            className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
                } text-white`}
            onClick={toggleMode}
        >
            {isDarkMode ? (
                <RiMoonLine className="h-6 w-6" /> // Moon icon for dark mode
            ) : (
                <RiSunLine className="h-6 w-6" /> // Sun icon for light mode
            )}
        </button>
    );
};

export default ToggleIcon;
