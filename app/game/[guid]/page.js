// app/game/[guid]/page.js
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { fetchGameById } from '../../../services/gameService';

const GamePage = () => {
  const { guid } = useParams();
  const [gameData, setGameData] = useState(null);

  useEffect(() => {
    console.log('GUID:', guid); // Log to ensure the GUID is correct
    if (guid) {
      fetchGameById(guid)
        .then((data) => setGameData(data))
        .catch((error) => console.error('Error loading game:', error));
    }
  }, [guid]);

  if (!gameData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="game-page">
      <h1>{gameData.title}</h1>
      <iframe
        src={gameData.link}
        width={gameData.width}
        height={gameData.height}
        allowFullScreen
        title={gameData.title}
      ></iframe>
      <p>{gameData.description}</p>
    </div>
  );
};

export default GamePage;
