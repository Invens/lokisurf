import React, { useState } from "react";
import './style.css';
import Image from "next/image";

const BFooter = () => {
  const [logoPosition, setLogoPosition] = useState(0); // Initial position

  // Function to move logo left
  const moveLeft = () => {
    setLogoPosition((prev) => (prev - 10 >= 0 ? prev - 10 : 0)); // Ensure it doesn't move too far left
  };

  // Function to move logo right
  const moveRight = () => {
    setLogoPosition((prev) => (prev + 10 <= 90 ? prev + 10 : 90)); // Ensure it doesn't move too far right
  };

  return (
    <footer className="relative bg-white w-full mt-[100px] pt-[150px] overflow-hidden">
      {/* Animated Waves */}
      <div className="waves back">
        <svg viewBox="0 24 150 28">
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <use xlinkHref="#gentle-wave" x="48" y="5" />
          <use xlinkHref="#gentle-wave" x="48" y="7" />
        </svg>
      </div>

      <div className="waves front">
        <svg viewBox="0 24 150 28">
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <use xlinkHref="#gentle-wave" x="48" y="0" />
          <use xlinkHref="#gentle-wave" x="48" y="3" />
        </svg>
      </div>

      {/* Moving Logo in Footer */}
      <div className="footer-content relative">
        <div
          className="logo"
          style={{
            position: "absolute",
            left: `${logoPosition}%`, // Set position based on state
            bottom: "5px",
            zIndex: "100px",
            transition: "left 0.1s ease",
          }}
        >
          <img
            src="/lokisurf.png"
            alt="Logo"
            className="moving-logo"
            style={{ width: "150px" }}
          />
        </div>

        {/* Buttons to move the logo */}
    
      </div>

      {/* Footer content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col">
        <div className="flex flex-wrap justify-between items-center">
          <div className="md:mb-0">
            <p className="text-black font-semibold mt-2">Loki the World Play</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-gray-600">
            <ul>
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#jobs" className="hover:underline">Jobs</a></li>
              <li><a href="#privacy" className="hover:underline">Privacy Statement</a></li>
              <li><a href="#terms" className="hover:underline">Terms of Use</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
            <ul>
              <li><a href="#developers" className="hover:underline">Loki for Developers</a></li>
              <li><a href="#kids" className="hover:underline">Loki Kids</a></li>
              <li><a href="#cookie" className="hover:underline">Cookie Statement</a></li>
              <li><a href="#faq" className="hover:underline">FAQ</a></li>
            </ul>
            <div className="flex items-center justify-center">
              <Image
                src="/india.png"
                alt="India Flag"
                width={1000}
                height={1000}
                className="h-10 w-10"
              />
            </div>
          </div>
        </div>
        <div className="text-black text-center mt-10 text-xs">
          Loki Surf © 2024 - All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default BFooter;
