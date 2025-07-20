import React from "react";

const BrailleHelloWorldGame = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
      {/* Floating letters and Braille characters */}
      <div className="absolute inset-0 flex flex-wrap overflow-hidden opacity-20 text-5xl font-bold tracking-widest text-pink-400 animate-float">
        {"abcdefghijklmnopqrstuvwxyz⠁⠃⠉⠙⠑⠋⠛⠓⠊⠚⠅⠇⠍⠝⠕⠏⠟⠗⠎⠞⠥⠧⠺⠭⠽⠵".split("").map((char, index) => (
          <span
            key={index}
            className="m-2 animate-float"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BrailleHelloWorldGame;
