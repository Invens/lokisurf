"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchGameById, fetchRelatedGames } from "../../../services/gameService";
import Link from 'next/link';
import Head from "next/head";
import Bfooter from "@/components/footer/b-footer";
import Image from "next/image";

const GamePage = () => {
  const { guid } = useParams();
  const router = useRouter();
  const [gameData, setGameData] = useState(null);
  const [games, setGames] = useState([]); // Ensure games are being fetched and set
  const [relatedGames, setRelatedGames] = useState([]);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isSearchPopupOpen, setIsSearchPopupOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (guid) {
        setLoading(true);
        try {
          const data = await fetchGameById(guid);
          setGameData(data);
          const related = await fetchRelatedGames(guid);
          setRelatedGames(related);
          setGames(related);
        } catch (error) {
          console.error("Error loading game:", error);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchData();
  }, [guid]);
  

  // Search functionality
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchInput) {
        const filteredGames = games.filter(game =>
          game.title.toLowerCase().includes(searchInput.toLowerCase())
        );
        setSearchResults(filteredGames);
      } else {
        setSearchResults([]);
      }
    }, 300); // Wait for 300ms before filtering

    return () => clearTimeout(timer); // Clear previous timeout if searchInput changes
  }, [searchInput, games]);

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleGameClick = (gameGuid) => {
    router.push(`/game/${gameGuid}`);
    setSearchInput(''); // Clear search input after selecting a game
    setSearchResults([]); // Clear search results
    setIsSearchPopupOpen(false); // Close search popup
  };

  const handleSearchIconClick = () => {
    setIsSearchPopupOpen(true);
  };

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

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[100vh] text-white">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-blue-500 h-24 w-24"></div>
        <p>Loading game...</p>
      </div>
    );
  }
  
  if (!gameData) {
    return <div className="text-white text-center">No game data found</div>;
  }
  

  const handleFullscreen = () => {
    const iframe = document.querySelector("iframe");

    if (!iframe) return;

    const container = iframe.parentElement;
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    try {
      if (isIOS) {
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
        <meta name="description" content={gameData.description} />
        <meta property="og:title" content={gameData.title} />
        <meta property="og:description" content={gameData.description} />
        <meta property="og:image" content={gameData.thumb} />
        <meta property="og:url" content={`https://lokisurf.com/game/${guid}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={gameData.title} />
        <meta name="twitter:description" content={gameData.description} />
        <meta name="twitter:image" content={gameData.thumb} />
      </Head>
      <div className="flex flex-col h-[100vh]">
        <div className="flex flex-grow p-8">
          {/* Left Sidebar */}
          <div className="hidden md:block w-[15%] p-2 space-y-2">
            <div className="bg-white rounded-lg flex flex-col items-center lg:w-[10vw] xl:w-[10vw] xl:h-[20vh] lg:h-[20vh] w-[40vw] h-[20vh] shadow-lg">
              <Link href="/">
                <img src="/lokisurf.png" alt="Loki Surf Logo" className="object-cover h-[10vh]" />
              </Link>
              <div className="text-center text-gray-800 font-semibold">Loki Surf</div>
              <hr className="w-full border-t-2 border-gray-300 my-2" />
              <div className="w-full flex justify-around mt-2">
                <Link href="/">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 9.75V20a.75.75 0 00.75.75h5.5a.75.75 0 00.75-.75v-6.5h4.5v6.5a.75.75 0 00.75.75h5.5A.75.75 0 0021 20V9.75L12 3 3 9.75z" />
                  </svg>
                </Link>
                <button onClick={handleSearchIconClick}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M11 2a9 9 0 106.32 15.39l4.69 4.7a1 1 0 001.41-1.41l-4.7-4.69A9 9 0 0011 2zM4 11a7 7 0 1114 0 7 7 0 01-14 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            {leftSidebarGames.map((game) => (
              <Link key={game.guid} href={`/game/${game.guid}`}>
                <Image width={1000} height={1000} src={game.thumb} alt={game.title} className="w-[10vw] h-[12vh] mt-2 object-cover rounded-md cursor-pointer" />
              </Link>
            ))}
          </div>
 {/* Search Popup */}
 {isSearchPopupOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg w-full max-w-md">
              <input
                type="text"
                placeholder="Search game"
                value={searchInput}
                onChange={handleSearchChange}
                className="p-2 rounded-lg w-full"
              />
              <div className={`mt-2 bg-white rounded-lg shadow-lg ${searchInput ? 'block' : 'hidden'}`}>
                {searchResults.map(game => (
                  <p
                    key={game.guid}
                    className="block px-4 py-2 text-black hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleGameClick(game.guid)}
                  >
                    {game.title} - {game.category}
                  </p>
                ))}
                {searchResults.length === 0 && searchInput && (
                  <p className="block px-4 py-2 text-gray-500">No results found</p>
                )}
              </div>
              <button onClick={() => setIsSearchPopupOpen(false)} className="mt-2 text-red-500">
                Close
              </button>
            </div>
          </div>
        )}
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
               {/* Game Description */}
               <div className="p-4 w-full bg-gray-800 rounded-lg mt-4 shadow-md">
              <h2 className="text-lg font-semibold">Description</h2>
              <p className="text-gray-300">{gameData.description}</p>
            </div>
          </div>
           

          {/* Right Sidebar */}
          <div className="hidden md:block w-[15%] p-2 space-y-2">
            {rightSidebarGames.map((game) => (
              <Link key={game.guid} href={`/game/${game.guid}`}>
                <Image width={1000} height={1000} src={game.thumb} alt={game.title} className="w-[10vw] h-[12vh] mt-2 object-cover rounded-md cursor-pointer" />
              </Link>
            ))}
          </div>
        </div>

        {/* Related Games Below Content */}
        <div className="w-full p-4 py-6">
          <div className="grid lg:grid-cols-10 xl:grid-cols-10 grid-cols-2 md:grid-cols-3 gap-4">
            {gamesBelowContent.map((game) => (
              <Link key={game.guid} href={`/game/${game.guid}`}>
                <Image width={1000} height={1000} src={game.thumb} alt={game.title} className="w-full h-auto object-cover rounded-md cursor-pointer" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GamePage;
