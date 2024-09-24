const cluster = require('cluster');
const os = require('os');
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const numCPUs = os.cpus().length; // Number of CPU cores

// Worker process
if (cluster.isWorker) {
  const app = express();
  const port = 8001;

  app.use(cors());

  // Helper function to normalize data from both APIs
  const normalizeGameData = (game, source) => {
    if (source === 'h5games') {
      return {
        title: game.title,
        category: game.category,
        description: game.description,
        url: game.link,
        thumbnail: game.thumb,
        guid: game.guid,
        width: game.width,
        height: game.height,
        source: 'H5Games' // This helps differentiate the source in case you need to
      };
    } else if (source === 'htmlgames') {
      return {
        title: game.name,
        category: game.category,
        description: game.description,
        url: game.url,
        thumbnail: game.thumb3, // You can pick any of the thumbnail sizes, e.g., thumb3
        guid: game.url.split('/').pop(), // Extracting a pseudo GUID based on URL
        width: game.width,
        height: game.height,
        source: 'HTMLGames'
      };
    }
  };

  // Endpoint to get all games from both APIs
  app.get('/api/games', async (req, res) => {
    try {
      // Fetching data from both APIs
      const [h5gamesResponse, htmlgamesResponse] = await Promise.all([
        axios.get('https://h5games.online/freegames.json'),
        axios.get('https://www.htmlgames.com/rss/games.php?json')
      ]);

      // Normalizing the games from both APIs
      const h5games = h5gamesResponse.data.map(game => normalizeGameData(game, 'h5games'));
      const htmlgames = htmlgamesResponse.data.map(game => normalizeGameData(game, 'htmlgames'));

      // Merging both sets of games into one array
      const allGames = [...h5games, ...htmlgames];

      // Returning the combined games list
      res.json(allGames);
    } catch (error) {
      res.status(500).send('Error fetching data');
    }
  });

  // Endpoint to get a game by GUID from both APIs
  app.get('/api/games/:guid', async (req, res) => {
    try {
      const { guid } = req.params;

      // Fetching data from both APIs
      const [h5gamesResponse, htmlgamesResponse] = await Promise.all([
        axios.get('https://h5games.online/freegames.json'),
        axios.get('https://www.htmlgames.com/rss/games.php?json')
      ]);

      // Searching for the game by GUID in both APIs
      const h5games = h5gamesResponse.data.map(game => normalizeGameData(game, 'h5games'));
      const htmlgames = htmlgamesResponse.data.map(game => normalizeGameData(game, 'htmlgames'));

      const allGames = [...h5games, ...htmlgames];

      // Find the game by GUID
      const game = allGames.find(g => g.guid === guid);

      if (game) {
        res.json(game);
      } else {
        res.status(404).send('Game not found');
      }
    } catch (error) {
      res.status(500).send('Error fetching data');
    }
  });

  app.listen(port, () => {
    console.log(`Worker ${process.pid} started, Proxy server running on http://localhost:${port}`);
  });
}

// Master process
if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
}
