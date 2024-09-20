"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { HiMenu } from 'react-icons/hi';
import { FaSearch } from 'react-icons/fa';
import { FaGamepad, FaTrophy } from 'react-icons/fa'; // Add game icons
import { MdLeaderboard } from 'react-icons/md'; // Leaderboard icon

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [games, setGames] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchPopupOpen, setIsSearchPopupOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchCategoriesAndGames = async () => {
      try {
        const [categoriesResponse, gamesResponse] = await Promise.all([
          axios.get('https://api.lokisurf.com/api/categories'),
          axios.get('https://api.lokisurf.com/api/games')
        ]);

        setCategories(categoriesResponse.data);
        setGames(gamesResponse.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchCategoriesAndGames();
  }, []);

  useEffect(() => {
    const filterResults = () => {
      if (searchInput) {
        const filteredGames = games.filter(game =>
          game.title.toLowerCase().includes(searchInput.toLowerCase()) ||
          game.category.toLowerCase().includes(searchInput.toLowerCase())
        );
        setSearchResults(filteredGames);
      } else {
        setSearchResults([]);
      }
    };

    filterResults();
  }, [searchInput, games]);

  const handleMoreClick = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

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

  const handleSidebarToggle = () => {
    setIsSidebarOpen(prevState => !prevState);
  };

  return (
    <header className="bg-gradient-to-r from-purple-800 via-purple-600 to-indigo-900 h-[12vh] pr-2 fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center space-x-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <img src="/lokisurf.png" alt="Logo" className="h-[90px] w-[80px] transition-transform hover:scale-105" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          <Link href="/" className="text-white text-lg flex items-center hover:text-yellow-400 transition-colors">
            <FaGamepad className="mr-2" /> All Games
          </Link>
          {categories.slice(0, 7).map((category, index) => (
            <Link key={index} href={`/category/${category}`}>
              <p className="text-white text-lg hover:text-yellow-400 transition-colors">{category}</p>
            </Link>
          ))}
          {categories.length > 8 && (
            <div className="relative">
              <button onClick={handleMoreClick} className="text-white text-lg hover:text-yellow-400 transition-colors">
                More
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-lg z-10">
                  {categories.slice(8).map((category, index) => (
                    <Link key={index} href={`/category/${category}`}>
                      <p className="block px-4 py-2 text-white hover:bg-gray-700 transition-colors cursor-pointer">
                        {category}
                      </p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </nav>

        {/* Desktop Search Input and Icon */}
        <div className="hidden lg:flex items-center space-x-3">
          <input
            type="text"
            placeholder="Search game"
            value={searchInput}
            onClick={() => setIsSearchPopupOpen(true)}
            onChange={handleSearchChange}
            className="p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button onClick={handleSearchIconClick} className="text-white">
            <FaSearch className="h-6 w-6 hover:text-yellow-400 transition-colors" />
          </button>
        </div>

        {/* Mobile Menu and Search */}
        <div className="flex items-center space-x-4 lg:hidden">
          <button onClick={handleSearchIconClick} className="text-white">
            <FaSearch className="h-6 w-6 hover:text-yellow-400 transition-colors" />
          </button>
          <button onClick={handleSidebarToggle} className="text-white">
            <HiMenu className="h-6 w-6 hover:text-yellow-400 transition-colors" />
          </button>
        </div>

        {/* Search Popup */}
        {isSearchPopupOpen && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-gray-800 p-4 rounded-lg w-full max-w-md">
              <input
                type="text"
                placeholder="Search game"
                value={searchInput}
                onChange={handleSearchChange}
                className="p-2 rounded-lg w-full bg-gray-700 text-white focus:ring-2 focus:ring-yellow-400"
              />
              <div className={`mt-2 bg-gray-800 rounded-lg shadow-lg ${searchInput ? 'block' : 'hidden'}`}>
                {searchResults.map(game => (
                  <p
                    key={game.guid}
                    className="block px-4 py-2 text-white hover:bg-gray-600 cursor-pointer transition-colors"
                    onClick={() => handleGameClick(game.guid)}
                  >
                    {game.title} - {game.category}
                  </p>
                ))}
                {searchResults.length === 0 && searchInput && (
                  <p className="block px-4 py-2 text-gray-400">No results found</p>
                )}
              </div>
              <button onClick={() => setIsSearchPopupOpen(false)} className="mt-2 text-red-500">
                Close
              </button>
            </div>
          </div>
        )}

        {/* Sidebar */}
        {isSidebarOpen && (
          <div className="fixed inset-0 bg-gray-900 z-50 flex flex-col items-center">
            <div className="mt-4">
              <Link href="/">
                <img src="/lokisurf.png" alt="Logo" className="h-[90px] w-[80px] transition-transform hover:scale-105" />
              </Link>
            </div>
            <nav className="mt-8 flex flex-col items-center space-y-2">
              {categories.map((category, index) => (
                <Link key={index} href={`/category/${category}`} className="block py-2 px-4 text-white text-lg hover:bg-gray-800 w-full text-center transition-colors">
                  {category}
                </Link>
              ))}
            </nav>
            <button onClick={handleSidebarToggle} className="absolute top-4 right-4 text-red-500">
              Close
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
