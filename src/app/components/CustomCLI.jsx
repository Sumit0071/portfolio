// components/CustomCLI.js
import React, { useRef, useEffect } from 'react';
import { Terminal } from 'xterm';

const CustomCLI = () => {
    const terminalRef = useRef( null );
    const terminalInstance = useRef( null );

    useEffect( () => {
        if ( typeof window !== 'undefined' ) { // Check if running in the browser
            const { Terminal } = require( 'xterm' ); // Import Xterm.js only on the client-side
            require( 'xterm/css/xterm.css' );
            terminalInstance.current = new Terminal();
            terminalInstance.current.open( terminalRef.current );

            return () => {
                terminalInstance.current.dispose();
            };
        }
    }, [] );

    // Check if terminal instance and its dimensions property are initialized before accessing
    const terminalDimensions = terminalInstance.current ? terminalInstance.current.dimensions : null;

    return <div ref={terminalRef} />;
};

export default CustomCLI;
