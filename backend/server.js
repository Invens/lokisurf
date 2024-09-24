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

  // Endpoint to get all games
  app.get('/api/games', async (req, res) => {
    try {
      const response = await axios.get('https://h5games.online/freegames.json');
      res.json(response.data);
    } catch (error) {
      res.status(500).send('Error fetching data');
    }
  });

  // Endpoint to get a game by GUID
  app.get('/api/games/:guid', async (req, res) => {
    try {
      const { guid } = req.params;
      const response = await axios.get('https://h5games.online/freegames.json');
      const games = response.data;

      // Find the game by GUID
      const game = games.find(g => g.guid === guid);

      if (game) {
        res.json(game);
      } else {
        res.status(404).send('Game not found');
      }
    } catch (error) {
      res.status(500).send('Error fetching data');
    }
  });

  // Endpoint to get all unique categories
  app.get('/api/categories', async (req, res) => {
    try {
      const response = await axios.get('https://h5games.online/freegames.json');
      const games = response.data;

      // Extract unique categories from the games list
      const categories = [...new Set(games.map(game => game.category))];

      res.json(categories); // Send the unique categories as a response
    } catch (error) {
      res.status(500).send('Error fetching categories');
    }
  });

  // Endpoint to get related games by category or tags
  app.get('/api/related-games/:guid', async (req, res) => {
    try {
      const { guid } = req.params;
      const response = await axios.get('https://h5games.online/freegames.json');
      const games = response.data;

      // Find the game by GUID
      const game = games.find(g => g.guid === guid);
      if (!game) {
        return res.status(404).send('Game not found');
      }

      // Find related games (example: by category)
      const relatedGames = games.filter(g => g.category === game.category && g.guid !== guid);

      res.json(relatedGames);
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
