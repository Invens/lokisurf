"use client";
import { useState, useEffect } from "react";
import Layout from "./layout";
import GameGrid from "../components/gameGride";
import { fetchGamesData } from "../services/gameService";
import Pagination from "../components/pagination";
import Header from "@/components/header/page";
import Footer from "../components/footer/footer";
import Bfooter from "@/components/footer/b-footer";
import { subscribeUserToPush } from "@/components/NotificationButton";

export default function Home() {
  const [games, setGames] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 352; // Number of games to show per page
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(false);
  const [showNotificationPrompt, setShowNotificationPrompt] = useState(false);


  useEffect(() => {
    if (typeof window !== "undefined" && "Notification" in window) {
      setIsNotificationEnabled(Notification.permission === "granted");
      if (Notification.permission === "default") {
        setShowNotificationPrompt(true);
      }
    }


    const fetchData = async () => {
      try {
        const data = await fetchGamesData();

        if (data && data.length) {
          // Filter games by GUID for the targeted games
          const prioritizedGames = data.filter((game) =>
            [
              'subway_surfers', 
              'temple_run_2', 
              'ludo_club_fun_dice_game', 
              'chess_3d',
              'nuts_and_bolts',
              '8ball_pro'
            ].includes(game.guid)
          );

          // Remove prioritized games from the main array to avoid duplicates
          const otherGames = data.filter(
            (game) => ![
              'subway_surfers', 
              'temple_run_2', 
              'ludo_club_fun_dice_game', 
              'chess_3d',
              'nuts_and_bolts',
              '8ball_pro'
            ].includes(game.guid)
          );

          // Place Temple Run at the 13th position
          const placeTempleRun = (gamesArray, prioritizedGames) => {
            const templeRun = prioritizedGames.find(game => game.guid === 'temple_run_2');
            if (templeRun) {
              gamesArray.splice(12, 0, { ...templeRun, prioritized: true });
            }
            return gamesArray;
          };

          // Place Subway Surfer into the 20th position
          const placeSubwaySurfer = (gamesArray, prioritizedGames) => {
            const subwaySurfer = prioritizedGames.find(game => game.guid === 'subway_surfers');
            if (subwaySurfer) {
              gamesArray.splice(10, 0, { ...subwaySurfer, prioritized: true });
            }
            return gamesArray;
          };

          // Place Ludo Club at the 33rd position
          const placeLudoClub = (gamesArray, prioritizedGames) => {
            const ludoClub = prioritizedGames.find(game => game.guid === 'ludo_club_fun_dice_game');
            if (ludoClub) {
              gamesArray.splice(32, 0, { ...ludoClub, prioritized: true });
            }
            return gamesArray;
          };

          // Place Chess 3D at the 42nd position
          const placeChess = (gamesArray, prioritizedGames) => {
            const chessGame = prioritizedGames.find(game => game.guid === 'chess_3d');
            if (chessGame) {
              gamesArray.splice(45, 0, { ...chessGame, prioritized: true });
            }
            return gamesArray;
          };
          const placeNutes = (gamesArray, prioritizedGames) => {
            const NutesGames = prioritizedGames.find(game => game.guid === 'nuts_and_bolts');
            if (NutesGames) {
              gamesArray.splice(42, 0, { ...NutesGames, prioritized: true });
            }
            return gamesArray;
          };
          const place8Ballpro = (gamesArray, prioritizedGames) => {
            const PoolGames = prioritizedGames.find(game => game.guid === '8ball_pro');
            if (PoolGames) {
              gamesArray.splice(35, 0, { ...PoolGames, prioritized: true });
            }
            return gamesArray;
          };

          // Randomly insert the remaining prioritized games in the other available positions
          const insertRemainingGamesRandomly = (gamesArray, prioritizedGames) => {
            let shuffledGames = [...gamesArray]; // Clone the array
            for (let game of prioritizedGames) {
              // Avoid duplicates and already set games
              if (!['subway_surfers', 'temple_run_2', 'ludo_club_fun_dice_game', 'chess_3d', 'nuts_and_bolts', '8ball_pro' ].includes(game.guid)) {
                // Get a random position in the array
                const randomIndex = Math.floor(Math.random() * Math.min(gamesPerPage, shuffledGames.length));
                shuffledGames.splice(randomIndex, 0, { ...game, prioritized: true });
              }
            }
            return shuffledGames;
          };

          // Step 1: Place Temple Run at the 13th index
          let updatedGames = placeTempleRun(otherGames, prioritizedGames);

          // Step 2: Place Subway Surfer at the 20th index
          updatedGames = placeSubwaySurfer(updatedGames, prioritizedGames);

          // Step 3: Place Ludo Club at the 33rd index
          updatedGames = placeLudoClub(updatedGames, prioritizedGames);

          // Step 4: Place Chess 3D at the 42nd index
          updatedGames = placeChess(updatedGames, prioritizedGames);

          updatedGames =placeNutes(updatedGames, prioritizedGames);

          updatedGames =place8Ballpro(updatedGames, prioritizedGames);

          // Step 5: Randomly insert remaining games
          updatedGames = insertRemainingGamesRandomly(updatedGames, prioritizedGames);

          // Set the updated games array to state
          setGames(updatedGames);
        }
      } catch (error) {
        console.error("Failed to fetch games:", error);
      }
    };

    fetchData();
    
  }, []);

   // Handle enabling notifications
   const handleEnableNotifications = async () => {
    try {
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        await subscribeUserToPush();
        setIsNotificationEnabled(true);
        setShowNotificationPrompt(false);
        alert("Notifications enabled successfully!");
      } else {
        alert("Notifications permission denied.");
      }
    } catch (error) {
      console.error("Error enabling notifications:", error);
      alert("Failed to enable notifications. Please try again.");
    }
  };
  const handleDeclineNotifications = () => {
    setShowNotificationPrompt(false);
    alert("You can enable notifications later in your browser settings.");
  };

  // Calculate the games to display on the current page
  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = games.slice(indexOfFirstGame, indexOfLastGame);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
    <div>
      <Layout>
        {showNotificationPrompt && !isNotificationEnabled && (
          <div
            style={{
              position: "fixed",
              bottom: "20px", // Bottom position
              right: "20px", // Right position
              backgroundColor: "#333",
              color: "#fff",
              padding: "15px 20px",
              borderRadius: "8px",
              zIndex: "10000",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <p style={{ margin: 0 }}>Enable notifications to stay updated!</p>
            <button
              onClick={handleEnableNotifications}
              style={{
                backgroundColor: "#007bff",
                color: "#fff",
                fontSize: "12px",
                border: "none",
                padding: "8px 16px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Allow
            </button>
            <button
              onClick={handleEnableNotifications}
              style={{
                backgroundColor: "#dc3545",
                color: "#fff",
                border: "none",
                fontSize: "12px",
                padding: "8px 16px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              No Thanks
            </button>
          </div>
        )}

        {games.length > 0 ? (
          <>
            <GameGrid title={`Page ${currentPage}`} games={currentGames} />
            <Pagination
              gamesPerPage={gamesPerPage}
              totalGames={games.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </>
        ) : (
          <p className="text-white">Loading...</p>
        )}

        <Header />
        <Footer />
      </Layout>
    </div>
    <Bfooter />
  </>
  );
}
