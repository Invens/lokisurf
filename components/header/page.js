import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { HiMenu } from 'react-icons/hi';
import { FaSearch } from 'react-icons/fa';

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
          axios.get('https://psychic-space-waffle-vg449wqrqx7c6p45-8001.app.github.dev/api/categories'),
          axios.get('https://psychic-space-waffle-vg449wqrqx7c6p45-8001.app.github.dev/api/games')
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
    <header className="bg-purple-900 h-[12vh] pr-2 relative">
      <div className="container mx-auto flex justify-between items-center lg:space-x-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <img src="/lokisurf.png" alt="Logo" className="h-[110px] w-[100px]" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-4 relative">
          <Link href="/" className="text-white">All Games</Link>
          {categories.slice(0, 8).map((category, index) => (
            <Link key={index} href={`/category/${category}`}>
              <p className="text-white">{category}</p>
            </Link>
          ))}
          {categories.length > 8 && (
            <div className="relative">
              <button onClick={handleMoreClick} className="text-white focus:outline-none">
                More
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
                  {categories.slice(8).map((category, index) => (
                    <Link key={index} href={`/category/${category}`}>
                      <p className="block px-4 py-2 text-black hover:bg-gray-200 cursor-pointer">
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
        <div className="hidden lg:flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search game"
            value={searchInput}
            onClick={() => setIsSearchPopupOpen(true)}
            onChange={handleSearchChange}
            className="p-2 rounded-lg"
          />
          <button onClick={handleSearchIconClick} className="text-white">
            <FaSearch className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu and Search */}
        <div className="flex items-center space-x-2 lg:hidden">
          <button onClick={handleSearchIconClick} className="text-white">
            <FaSearch className="h-6 w-6" />
          </button>
          <button onClick={handleSidebarToggle} className="text-white">
            <HiMenu className="h-6 w-6" />
          </button>
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

        {/* Sidebar */}
        {isSidebarOpen && (
          <div className="fixed inset-0 bg-white z-50 flex flex-col items-center">
            <div className="mt-4">
              <Link href="/">
                <img src="/lokisurf.png" alt="Logo" className="h-[110px] w-[100px]" />
              </Link>
            </div>
            <div className="mt-8">
              <nav className="flex flex-col items-center">
                {categories.map((category, index) => (
                  <Link key={index} href={`/category/${category}`} className="block py-2 text-black hover:bg-gray-200 w-full text-center">
                    {category}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="mt-8">
              <p className="text-center">Site Name</p>
              {/* Add social media icons here */}
            </div>
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
