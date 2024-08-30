import Link from 'next/link';
import { useState, useEffect } from 'react';
import Head from "next/head";

const GameGrid = ({ games }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to show the loading spinner
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust this delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative ">
      {loading ? (
        <div className="flex justify-center items-center h-[60vh]">
          {/* Loading Animation */}
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24"></div>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-4 p-4">
          <div className="bg-white rounded-lg flex flex-col items-center lg:w-[10vw] xl:w-[8vw] xl:h-[16vh] lg:h-[20vh] w-[40vw] h-[20vh] shadow-lg">
            <div className="flex justify-center">
              <Link href="/">
                <img src="/lokisurf.png" alt="Loki Surf Logo" className="object-cover h-[8vh]" />
              </Link>
            </div>

            {/* Loki Surf Text */}
            <div className="text-center text-gray-800 xl:mt-[-10px] lg:mt-[-15px] font-semibold">
              Loki Surf
            </div>

            {/* Horizontal Border */}
            <hr className="w-full border-t-2 border-gray-300 my-2" />

            {/* Icons for Home and Search */}
            <div className="w-full flex justify-around">
              <div>
                <Link href="/">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 9.75V20a.75.75 0 00.75.75h5.5a.75.75 0 00.75-.75v-6.5h4.5v6.5a.75.75 0 00.75.75h5.5A.75.75 0 0021 20V9.75L12 3 3 9.75z" />
                  </svg>
                </Link>
              </div>
              <div>
                <Link href="/search">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M11 2a9 9 0 106.32 15.39l4.69 4.7a1 1 0 001.41-1.41l-4.7-4.69A9 9 0 0011 2zM4 11a7 7 0 1114 0 7 7 0 01-14 0z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {games.map((game, index) => (
            <Link key={index} href={`/game/${game.guid}`}>
              <div
                className={`relative p-1 rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 ${index % 7 === 0 ? 'col-span-2 row-span-2' : ''} hover:scale-105 hover:rotate-3d`}
              >
                <div
                  className="absolute bottom-0 left-0 right-0 inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                >
                  <h3 className="text-sm">{game.title}</h3>
                </div>
                <img
                  src={game.thumb}
                  alt={game.title}
                  className="rounded-md mb-0 w-full h-full object-cover"
                />
              </div>
            </Link>
          ))}
        </div>
      )}
      {/* Add this style to your global CSS file or in a <style jsx> block */}
      <style jsx>{`
        .rotate-3d {
          transform: rotateY(0deg) rotateX(0deg);
          transition: transform 0.5s ease-in-out;
        }
        .hover\\:rotate-3d:hover {
          transform: rotateY(15deg) rotateX(15deg);
        }
        @keyframes backgroundAnimation {
          0% { background-color: #ffffff; }
          50% { background-color: #f0f0f0; }
          100% { background-color: #ffffff; }
        }
        .hover\\:animate-background:hover {
          animation: backgroundAnimation 1s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default GameGrid;
