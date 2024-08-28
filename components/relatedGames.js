// components/RelatedGames.js
import { useEffect, useState } from 'react';
import { fetchRelatedGames } from '../services/gameService';

const RelatedGames = ({ currentGameId }) => {
  const [relatedGames, setRelatedGames] = useState([]);

  useEffect(() => {
    fetchRelatedGames(currentGameId).then(setRelatedGames);
  }, [currentGameId]);

  return (
    <div className="related-games">
      <h2>Related Games</h2>
      <div className="game-list">
        {relatedGames.map((game) => (
          <div key={game.id} className="game-item">
            <img src={game.thumbnail} alt={game.title} />
            <p>{game.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedGames;
