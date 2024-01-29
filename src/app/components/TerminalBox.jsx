"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { XMarkIcon } from '@heroicons/react/24/solid'; // Assuming you have XMarkIcon from Heroicons

const TerminalBox = () => {
  const [showTerminal, setShowTerminal] = useState( false );
  const [inputValue, setInputValue] = useState( '' );
  const [currentDirectory, setCurrentDirectory] = useState( 'C:\\Users\\SUMIT ADHIKARI>' ); // Initial directory
  const [selectedTabContent, setSelectedTabContent] = useState( null );

  const toggleTerminal = () => {
    setShowTerminal( !showTerminal );
  };
  const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          <li>Node.js</li>
          <li>Express</li>
          <li>PostgreSQL</li>
          <li>Sequelize</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>Self learn to Code</li>
          <li>B.tech in computer science Engineering,
            Netaji Suubhash Engineering College
          </li>
        </ul>
      ),
    },
    {
      title: "Certifications",
      id: "certifications",
      content: (
        <ul className="list-disc pl-2">
          <li>Googgle Cloud Career Practitioner</li>
          <li>Google Professional Cloud Developer</li>
        </ul>
      ),
    },
  ];


  const handleCommand = () => {
    const command = inputValue.trim().toLowerCase();
    if ( command === 'cd..' ) {
      const directoryPath = currentDirectory.split( '\\' );
      directoryPath.pop(); // Remove the last directory from the path
      const parentDirectory = directoryPath.join( '\\' );
      setCurrentDirectory( parentDirectory + '>' );
      setSelectedTabContent( null );
    }
    else if ( command === 'show commands' ) {
      // Display available commands directly in the terminal
      setSelectedTabContent(
        <>
          <p className="text-white">Available commands:</p>
          <ul className="text-[#53749c]">
            <li>about: Navigate to about section</li>
            <li>projects: Navigate to projects section</li>
            <li>contact: Navigate to contact section</li>
            <li>cd..: Move up one directory</li>
          </ul>
        </>
      );
    }
    else if ( currentDirectory.includes( '\\about>' ) && command.startsWith( "cat " ) ) {
      const tabName = command.substring( 4 );
      const tab = TAB_DATA.find( tab => tab.id === tabName );
      if ( tab ) {
        setCurrentDirectory( `C:\\Users\\SUMIT ADHIKARI\\about\\${tab.id}>` );
        setSelectedTabContent( tab.content );
      } else {
        setSelectedTabContent( null ); // Reset content if tab not found
      }
    } else {
      const errorMessage = 'Command not recognized';
      switch ( command ) {
        case 'about':
          setCurrentDirectory( 'C:\\Users\\SUMIT ADHIKARI\\about>' );
          window.location.href = '#about'; // Redirect to about page
          break;
        case 'projects':
          setCurrentDirectory( 'C:\\Users\\SUMIT ADHIKARI\\projects>' );
          window.location.href = '#projects'; // Redirect to projects page
          break;
        case 'contact':
          setCurrentDirectory( 'C:\\Users\\SUMIT ADHIKARI\\contact>' );
          window.location.href = '#contact'; // Redirect to contact page
          break;
        case 'show commands':
          // Handle show commands logic here
          console.log( 'Available commands: about, projects, contact' );
          break;
        default:
          setSelectedTabContent( <p className="text-red-500">{errorMessage}</p> );
          break;
      }

    }

    setInputValue( '' ); // Clear input after handling command
  };

  return (
    <div className='relative'>
      <div className='flex justify-center items-center'>
        <h2 className='text-transparent bg-clip-text  bg-gradient-to-r
         from-purple-400 to-pink-600 px-2 py-2'>Wanna Play with CLI??</h2>

        <div onClick={toggleTerminal} className='cursor-pointer'>
          <Image src='/assets/Terminal_Logo.png' height={30} width={30} />
        </div>
      </div>
      {showTerminal && (
        <div className='container bg-[#272822] w-96 rounded border border-white p-2 absolute top-0 right-0'>
          <div className='flex items-center mb-2'>
            <div className='mr-2'>
              <Image src='/assets/Terminal_Logo.png' height={30} width={30} />
            </div>
            <div>
              <p className='text-white'>Hi Folks! Know about me</p>
              <p className='text-[#93864a] text-sm font-mono'>{currentDirectory}</p>
            </div>
          </div>
          <input
            type="text"
            placeholder="Enter command..."
            value={inputValue}
            onChange={( e ) => setInputValue( e.target.value )}
            onKeyDown={( e ) => {
              if ( e.key === 'Enter' ) {
                e.preventDefault(); // Prevent default behavior
                handleCommand();
              }
            }}
            className='bg-[#272822] text-white outline-none border-none'
          />
          {selectedTabContent && (
            <div className='mt-2 text-white'>
              {selectedTabContent}
            </div>
          )}
          <div className='absolute top-0 right-0 mt-1 mr-1'>
            <XMarkIcon className='h-6 w-6 text-gray-500 cursor-pointer' onClick={toggleTerminal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default TerminalBox;
