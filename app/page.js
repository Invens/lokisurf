"use client"
import { useState, useEffect } from 'react';
import Layout from './layout';
import GameGrid from '../components/gameGride';
import { fetchGamesData } from '../services/gameService';
import Pagination from '../components/pagination';

export default function Home() {
  const [games, setGames] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedGame, setSelectedGame] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const gamesPerPage = 300; // Number of games to show per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchGamesData();
        setGames(data || []); // Ensure that data is set to games state
      } catch (error) {
      }
    };

    fetchData();
  }, []);


  // Calculate the games to display on the current page
  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = games.slice(indexOfFirstGame, indexOfLastGame);


  // Handle opening the modal
  const handleOpenModal = (game) => {
    setSelectedGame(game);
    setIsModalOpen(true);
  };

  // Handle closing the modal
  const handleCloseModal = () => {
    setSelectedGame(null);
    setIsModalOpen(false);
  };

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Layout>
      {games.length > 0 ? (
        <>
          <GameGrid
            title={`Page ${currentPage}`}
            games={currentGames}
            onGameClick={handleOpenModal} // Pass the modal open handler
          />
          <Pagination
            gamesPerPage={gamesPerPage}
            totalGames={games.length}
            paginate={paginate}
            currentPage={currentPage}
          />
         
        </>
      ) : (
        <p className="text-white">No games available</p>
      )}
    </Layout>
  );
}
