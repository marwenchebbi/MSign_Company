import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';

import sign_language from '../images/sign-language-blue.png';

const Hero = () => {
    const englishText = "Accessible Solutions for a Brighter Tomorrow";
    const brailleText = "⠃⠑⠎⠏⠕⠅⠑ ⠎⠕⠋⠞⠺⠁⠗⠑ ⠎⠕⠇⠥⠞⠊⠕⠝⠎ ⠋⠕⠗ ⠽⠕⠥⠗ ⠥⠝⠊⠟⠥⠑ ⠃⠥⠎⠊⠝⠑⠎⠎ ⠝⠑⠑⠙⠎";

    const [displayText, setDisplayText] = useState(brailleText);

    useEffect(() => {
        const maxLength = Math.max(brailleText.length, englishText.length);
        const paddedBrailleText = brailleText.padEnd(maxLength, " ");
        const paddedEnglishText = englishText.padEnd(maxLength, " ");

        let index = 0;
        const interval = setInterval(() => {
            if (index <= maxLength) {
                setDisplayText((prevText) =>
                    paddedEnglishText.slice(0, index) + paddedBrailleText.slice(index)
                );
                index++;
            } else {
                clearInterval(interval);
            }
        }, 50);

        return () => clearInterval(interval);
    }, [brailleText, englishText]);

    return (
        <div className="hero bg-gray-100 min-h-screen flex flex-col items-center justify-center py-8" id="hero">
            <NavBar />

            <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
                <div className="text-center lg:text-left lg:w-2/3 mb-8 lg:mb-0">
                    <h1
                        className="mb-5 md:text-5xl text-3xl font-bold text-blue-900"
                        style={{
                            minWidth: '500px', // Set based on the longest text width
                            fontFamily: 'monospace', // Prevents spacing shifts
                            letterSpacing: '0.05em' // Fine-tuning for uniform appearance
                        }}
                    >
                        {displayText}
                    </h1>
                    <p className="text-xl font-semibold tracking-tight mb-5 text-gray-500">
                    We are a team of passionate, skilled developers committed to creating accessible and inclusive software solutions.
                    </p>
                    <Link to="/contact" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center px-6 py-3 text-lg shadow-lg rounded-full transition duration-200">
                        Learn more
                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                    </Link>
                </div>
                <div className="lg:w-1/2 flex justify-center lg:justify-end">
                    <img alt="Braille printer" className="rounded-lg  w-80 md:w-[350px] pr-3" src={sign_language} />
                </div>
            </div>
        </div>
    );
};

export default Hero;
