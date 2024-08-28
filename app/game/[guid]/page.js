"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchGameById, fetchRelatedGames } from "../../../services/gameService";
import Link from 'next/link';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const GamePage = () => {
  const { guid } = useParams();
  const [gameData, setGameData] = useState(null);
  const [relatedGames, setRelatedGames] = useState([]);
  const [bgColor, setBgColor] = useState(getRandomColor());
  const [isFullscreen, setIsFullscreen] = useState(false);

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
    // Event listeners for fullscreen changes
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
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
    if (iframe.requestFullscreen) {
      iframe.requestFullscreen();
    } else if (iframe.webkitRequestFullscreen) { /* Safari */
      iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) { /* IE11 */
      iframe.msRequestFullscreen();
    }
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
    }
  };

  // Filter out the current game from the related games list and limit to 50 games
  const filteredRelatedGames = relatedGames
    .filter(game => game.guid !== guid)
    .slice(0, 258);

  // Get the first 4 games for the left sidebar
  const leftSidebarGames = filteredRelatedGames.slice(0, 3);

  // Get the next 4 games for the right sidebar
  const rightSidebarGames = filteredRelatedGames.slice(3, 6);

  // Get the remaining games to display below the game content
  const gamesBelowContent = filteredRelatedGames.slice(6, 258);

  return (
    <div className="flex flex-col h-[100vh]" style={{ backgroundColor: bgColor }}>
      <div className="flex flex-grow p-8">
        {/* Left Sidebar - Hidden on mobile */}
        <div className="hidden md:block w-[15%] p-2 space-y-2" style={{ backgroundColor: bgColor }}>
          <div className="bg-white rounded-lg flex w-[10vw] h-[12vh]">
            <div className="flex justify-center items-center">
              <Link href="/">
                <h1 className="text-2xl w-[10vw] ml-[12%] font-extrabold">
                  LOki Surf
                </h1>
              </Link>
            </div>
          </div>
          {leftSidebarGames.map((game) => (
            <Link key={game.guid} href={`/game/${game.guid}`}>
              <img src={game.thumb} alt={game.title} className="w-[10vw] h-[12vh] mt-2 object-cover rounded-md cursor-pointer" />
            </Link>
          ))}
        </div>

        {/* Game Content */}
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
          {/* Bottom Navbar */}
          <div className="flex justify-between items-center p-4 w-full bg-white">
            <div className="text-sm md:text-2xl font-bold">{gameData.title}</div>
            <div className="flex space-x-2">
              <button className="px-4 py-3 bg-gray-700 text-white rounded-full hover:bg-gray-600">👍</button>
              <button className="px-4 py-3 bg-gray-700 text-white rounded-full hover:bg-gray-600">👎</button>
              <button onClick={handleFullscreen} className="px-3 lg:px-4 py-2 lg:py-3 bg-gray-700 text-white rounded-full hover:bg-gray-600">⛶</button>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Hidden on mobile */}
        <div className="hidden md:block w-[15%] p-2 space-y-2" style={{ backgroundColor: bgColor }}>
          {rightSidebarGames.map((game) => (
            <Link key={game.guid} href={`/game/${game.guid}`}>
              <img src={game.thumb} alt={game.title} className="w-[10vw] h-[12vh] mt-2 object-cover rounded-md cursor-pointer" />
            </Link>
          ))}
        </div>
      </div>

      {/* Related Games Below Content */}
      <div className="w-full p-4 py-4" style={{ backgroundColor: bgColor }}>
        <div className="grid lg:grid-cols-10 xl:grid-cols-10 grid-cols-2 md:grid-cols-3 gap-4">
          {gamesBelowContent.map((game) => (
            <Link key={game.guid} href={`/game/${game.guid}`}>
              <img src={game.thumb} alt={game.title} className="w-full h-auto object-cover rounded-md cursor-pointer" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamePage;
