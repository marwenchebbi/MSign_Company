import React, { useState, useEffect } from "react";
import braille_printer from "../images/braille_printer.jpg";

const BrailleHelloWorldGame = () => {
  const [inputText, setInputText] = useState("");
  const [brailleText, setBrailleText] = useState("");
  const [displayText, setDisplayText] = useState("");

  // This function converts normal text to Braille equivalent
  const translateToBraille = (text) => {
    const brailleMapping = {
      a: "⠁", b: "⠃", c: "⠉", d: "⠙", e: "⠑",
      f: "⠋", g: "⠛", h: "⠓", i: "⠊", j: "⠚",
      k: "⠅", l: "⠇", m: "⠍", n: "⠝", o: "⠕",
      p: "⠏", q: "⠟", r: "⠗", s: "⠎", t: "⠞",
      u: "⠥", v: "⠧", w: "⠺", x: "⠭", y: "⠽", z: "⠵", " ": " ",
    };

    return " " + text
      .toLowerCase()
      .split("")
      .map((char) => brailleMapping[char] || "") // Return empty string for unmapped characters
      .join("");
  };

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index + 1 < brailleText.length) {
        setDisplayText((prev) => prev + brailleText[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 150); // Adjust speed of letter appearance
    return () => clearInterval(interval);
  }, [brailleText]);

  const handleChange = (e) => {
    const text = e.target.value;
    setInputText(text);
    setBrailleText(translateToBraille(text));
    setDisplayText("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white">
      
      <div className="w-full h-[400px] max-w-[1000px] p-6 rounded-3xl shadow-2xl bg-opacity-90 bg-gray-900 border border-gray-800  ">
        <input
          type="text"
          value={inputText}
          onChange={handleChange}
          placeholder="Enter text..."
          className="w-full p-4 mb-6 text-xl  font-semibold rounded-lg shadow-inner bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-pink-500"
        />
        <div className="relative flex justify-center mb-8">
          <img
            src={braille_printer}
            alt="Braille Machine"
            className="w-48 h-auto object-contain rounded-lg shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-indigo-700 to-transparent opacity-40 rounded-lg"></div>
        </div>
        <div className=" text-4xl font-extrabold flex  justify-center items-center p-6  bg-opacity-90   tracking-wide">
          {displayText.split("").map((letter, index) => (
            <span
              key={index}
              className="inline-block transition-transform transform translate-y-2 opacity-0 animate-fade-in text-pink-400 text-4xl"
            >
              {letter}
            </span>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default BrailleHelloWorldGame;
