"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchGameById, fetchRelatedGames } from "../../../services/gameService";
import Link from 'next/link';
import Head from "next/head";

const GamePage = () => {
  const { guid } = useParams();
  const [gameData, setGameData] = useState(null);
  const [relatedGames, setRelatedGames] = useState([]);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (guid) {
      fetchGameById(guid)
        .then((data) => {
          setGameData(data);
          return fetchRelatedGames(guid);
        })
        .then((related) => setRelatedGames(related))
        .catch((error) => console.error("Error loading game:", error));
    }
  }, [guid]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement || !!document.webkitFullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    document.addEventListener("MSFullscreenChange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
      document.removeEventListener("mozfullscreenchange", handleFullscreenChange);
      document.removeEventListener("MSFullscreenChange", handleFullscreenChange);
    };
  }, []);

  if (!gameData) {
    return <div></div>;
  }

  const handleFullscreen = () => {
    const iframe = document.querySelector("iframe");

    if (!iframe) return;

    const container = iframe.parentElement;

    // Check if iOS
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    try {
      if (isIOS) {
        // Open the game in a new tab on iOS
        window.open(gameData.link, '_blank');
      } else {
        if (container.requestFullscreen) {
          container.requestFullscreen();
        } else if (container.webkitRequestFullscreen) {
          container.webkitRequestFullscreen();
        } else if (container.msRequestFullscreen) {
          container.msRequestFullscreen();
        } else if (container.mozRequestFullScreen) {
          container.mozRequestFullScreen();
        }
      }
    } catch (error) {
      console.error("Fullscreen error:", error);
    }
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  };

  const filteredRelatedGames = relatedGames
    .filter(game => game.guid !== guid)
    .slice(0, 258);

  const leftSidebarGames = filteredRelatedGames.slice(0, 3);
  const rightSidebarGames = filteredRelatedGames.slice(3, 6);
  const gamesBelowContent = filteredRelatedGames.slice(6, 258);

  return (
    <>
      <Head>
        <title>{gameData.title} - Play Now</title>
        <meta name="description" content={` ${gameData.description}`} />
        <meta property="og:title" content={gameData.title} />
        <meta property="og:description" content={` ${gameData.description}`} />
        <meta property="og:image" content={gameData.thumb} />
        <meta property="og:url" content={`https://lokisurf.com/game/${guid}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={gameData.title} />
        <meta name="twitter:description" content={`${gameData.description}`} />
        <meta name="twitter:image" content={gameData.thumb} />
      </Head>
      {loading ? (
        <div className="flex justify-center items-center h-[60vh]">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24"></div>
        </div>
      ) : (
        <div className="flex flex-col h-[100vh]">
          <div className="flex flex-grow p-8">
            <div className="hidden md:block w-[15%] p-2 space-y-2">
              <div className="bg-white rounded-lg flex flex-col items-center lg:w-[10vw] xl:w-[10vw] xl:h-[20vh] lg:h-[20vh] w-[40vw] h-[20vh] shadow-lg">
                <div className="flex justify-center">
                  <Link href="/">
                    <img src="/lokisurf.png" alt="Loki Surf Logo" className="object-cover h-[10vh]" />
                  </Link>
                </div>
                <div className="text-center text-gray-800 xl:mt-[-10px] lg:mt-[-10px] font-semibold">
                  Loki Surf
                </div>
                <hr className="w-full border-t-2 border-gray-300 my-2" />
                <div className="w-full flex justify-around mt-2">
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
              {leftSidebarGames.map((game) => (
                <Link key={game.guid} href={`/game/${game.guid}`}>
                  <img src={game.thumb} alt={game.title} className="w-[10vw] h-[12vh] mt-2 object-cover rounded-md cursor-pointer" />
                </Link>
              ))}
            </div>
            <div className="w-full md:w-[70%] flex flex-col items-center px-2 mt-4">
              <div className="relative w-full h-[70vh] bg-white shadow-lg rounded-sm">
                <iframe
                  src={gameData.link}
                  className="w-full h-full bg-white"
                  allowFullScreen
                  title={gameData.title}
                ></iframe>
                {isFullscreen && (
                  <button
                    onClick={exitFullscreen}
                    className="absolute top-2 right-2 p-2 bg-gray-700 text-white rounded-full hover:bg-gray-600"
                  >
                    ✕
                  </button>
                )}
              </div>
              <div className="flex justify-between items-center p-4 w-full bg-white">
                <div className="text-sm md:text-2xl font-bold">{gameData.title}</div>
                <div className="flex space-x-2">
                  <button className="px-4 py-3 bg-gray-700 text-white rounded-full hover:bg-gray-600">👍</button>
                  <button className="px-4 py-3 bg-gray-700 text-white rounded-full hover:bg-gray-600">👎</button>
                  <button onClick={handleFullscreen} className="px-3 lg:px-4 py-2 lg:py-3 bg-gray-700 text-white rounded-full hover:bg-gray-600">
                    {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden md:block w-[15%] p-2 space-y-2">
              <div className="bg-white rounded-lg flex flex-col items-center lg:w-[10vw] xl:w-[10vw] xl:h-[20vh] lg:h-[20vh] w-[40vw] h-[20vh] shadow-lg">
                <div className="flex justify-center">
                  <Link href="/">
                    <img src="/lokisurf.png" alt="Loki Surf Logo" className="object-cover h-[10vh]" />
                  </Link>
                </div>
                <div className="text-center text-gray-800 xl:mt-[-10px] lg:mt-[-10px] font-semibold">
                  Loki Surf
                </div>
                <hr className="w-full border-t-2 border-gray-300 my-2" />
                <div className="w-full flex justify-around mt-2">
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
              {rightSidebarGames.map((game) => (
                <Link key={game.guid} href={`/game/${game.guid}`}>
                  <img src={game.thumb} alt={game.title} className="w-[10vw] h-[12vh] mt-2 object-cover rounded-md cursor-pointer" />
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:flex justify-center w-full bg-white shadow-lg p-4 mt-4">
            {gamesBelowContent.map((game) => (
              <Link key={game.guid} href={`/game/${game.guid}`}>
                <img src={game.thumb} alt={game.title} className="w-[10vw] h-[12vh] mt-2 object-cover rounded-md cursor-pointer mx-2" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default GamePage;
