import Link from 'next/link';
import { useState, useEffect } from 'react';
import Slider from 'react-slick'; // Import react-slick
import Head from "next/head";
import Image from 'next/image';

const GameGrid = ({ games }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to show the loading spinner
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust this delay as needed

    return () => clearTimeout(timer);
  }, []);

  // Slider settings for mobile view
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust as needed
  };

  // Get the first 10 games for the slider
  const sliderGames = games.slice(0, 10);

  // Get the remaining games for the grid view
  const gridGames = games.slice(10);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative mt-[100px]">
      {loading ? (
        <div className="flex justify-center items-center h-[100vh]">
          {/* Loading Animation */}
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24 neon-glow"></div>
        </div>
      ) : (
        <>
          {/* Slider for mobile view */}
          <div className="mt-[150px] block lg:hidden">
            <Slider {...sliderSettings}>
              {sliderGames.map((game, index) => (
                <Link key={index} href={`/game/${game.guid}`}>
                  <div className="relative p-1 rounded-lg overflow-hidden shadow-md game-tile neon-border">
                    <Image
                      width={1000}
                      height={1000}
                      src={game.thumb}
                      alt={game.title}
                      className="w-full h-full object-cover rounded-md"
                    />
                    <div className="absolute bottom-0 left-0 right-0 inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-sm neon-text">{game.title}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </Slider>
          </div>

          {/* Grid view for mobile and desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-4 p-4">
            {gridGames.map((game, index) => (
              <Link key={index} href={`/game/${game.guid}`}>
                <div
                  className={`relative p-1 rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 neon-border game-tile hover:scale-110 hover:rotate-3d ${index % 7 === 0 ? 'col-span-2 row-span-2' : ''}`}
                >
                  <div className="absolute bottom-0 left-0 right-0 inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-sm neon-text">{game.title}</h3>
                  </div>
                  <Image
                    width={1000}
                    height={1000}
                    src={game.thumb}
                    alt={game.title}
                    className="rounded-md mb-0 w-full h-full object-cover"
                  />
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
      <style jsx>{`
        .game-tile {
          border: 2px solid #00FF00;
          box-shadow: 0 4px 8px rgba(0, 255, 0, 0.2);
          transition: box-shadow 0.3s ease;
        }

        .game-tile:hover {
          box-shadow: 0 6px 12px rgba(0, 255, 0, 0.6);
        }

        .neon-text {
          font-family: 'Orbitron', sans-serif;
          color: #00FF00;
          text-transform: uppercase;
        }

        .neon-glow {
          border-color: #00FF00 transparent transparent transparent;
          animation: neon-glow 1.5s infinite ease-in-out;
        }

        @keyframes neon-glow {
          0% {
            border-color: #00FF00 transparent transparent transparent;
          }
          50% {
            border-color: #FF00FF transparent transparent transparent;
          }
          100% {
            border-color: #00FF00 transparent transparent transparent;
          }
        }

        .rotate-3d {
          transform: rotateY(0deg) rotateX(0deg);
          transition: transform 0.5s ease-in-out;
        }
        .hover\\:rotate-3d:hover {
          transform: rotateY(15deg) rotateX(15deg);
        }

        .neon-border {
          border: 2px solid #0ff;
          box-shadow: 0px 0px 10px #0ff, 0px 0px 20px #00f, 0px 0px 30px #00ff00;
        }

        @keyframes backgroundAnimation {
          0% { background-color: #000000; }
          50% { background-color: #0a0a0a; }
          100% { background-color: #000000; }
        }
        .hover\\:animate-background:hover {
          animation: backgroundAnimation 1s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default GameGrid;
