const cluster = require('cluster');
const os = require('os');
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const numCPUs = os.cpus().length; // Number of CPU cores

const externalSources = [
  'https://h5games.online/freegames.json',
  'https://www.htmlgames.com/rss/games.php?json',
  'https://www.onlinegames.io/media/plugins/genGames/embed.json'
];

// Example for custom direct links
const customGames =[
  {
    "title": "Vally Of Wolves",
    "thumb": "/valley-of-wolves.webp",
    "link": "https://g.igroutka.ru/games/23/OWBYrKzs4ojfxbJV/rvvASMiM/f921f37779634c868acf3979a48eb7a6/",
    "description": "Exciting online game with engaging mechanics and challenges. Play directly in your browser.",
    "category": "shooters",
    "tags": "Action,Adventure,Multiplayer",
    "width": "800",
    "height": "600",
    "guid": "owbyrkzs4ojfxb",
    "pubDate": "Wed, 20 Sep 23 10:00:00 +0000"
  },
  {
    "title": "Subway Surfers Hollywood",
    "thumb": "/subway-surfer.avif",
    "link": "https://g.igroutka.ru/games/164/CuKFQPWtdby6UYev/10/subway_surfers_hollywood/",
    "description": "Run, dodge, and dash your way through Hollywood in Subway Surfers! Avoid obstacles and keep running to get the highest score.",
    "category": "racing",
    "tags": "Endless Runner,Action,Fun",
    "width": "900",
    "height": "700",
    "guid": "subway_surfers",
    "pubDate": "Mon, 15 May 23 12:45:00 +0000"
  },
  {
    "title": "Temple Run 2",
    "thumb": "/temple-run-2.png",
    "link": "https://m.igroutka.ru/ni3/118/TempleRun2/",
    "description": "Temple Run 2 brings thrilling running action with new features and enhancements. Avoid obstacles and keep running!",
    "category": "racing",
    "tags": "Endless Runner,Action,Skill",
    "width": "1024",
    "height": "768",
    "guid": "temple_run_2",
    "pubDate": "Thu, 12 Jan 23 14:30:00 +0000"
  },
  {
    "title": "Ludo Club - Fun Dice Game",
    "thumb": "/ludo.jpeg",
    "link": "https://g.igroutka.ru/games/368/MBP6SlExpkfi65/ludo-club---fun-dice-game/6/ludo.html",
    "description": "A fun and engaging dice game that you can play with friends. Ludo Club will keep you entertained for hours!",
    "category": "board",
    "tags": "Board Game,Multiplayer,Strategy",
    "width": "800",
    "height": "600",
    "guid": "ludo_club_fun_dice_game",
    "pubDate": "Tue, 10 Oct 23 11:15:00 +0000"
  },
  {
    "title": "Chess 3D",
    "thumb": "/chess.avif",
    "link": "https://m.igroutka.ru/ni/493/igra-shakhmaty-3d/",
    "description": "Play a 3D chess game with amazing visuals. Challenge your friends or play against AI.",
    "category": "puzzles",
    "tags": "Board Game,Strategy,Multiplayer",
    "width": "1024",
    "height": "768",
    "guid": "chess_3d",
    "pubDate": "Sat, 17 Jun 23 10:50:00 +0000"
  },
  {
    "title": "Nuts and Bolts: Screwing Puzzle",
    "thumb": "/nuts.jpeg",
    "link": "https://g.igroutka.ru/games/736/aUfdlRyO1QvLDWrY/624bcad1-766c-4355-ad11-9eedf0558ee9/index.html",
    "description": "Test your problem-solving skills with Nuts and Bolts: Screwing Puzzle, a unique puzzle game where players must fit various shapes together to progress through challenging levels. The game’s 3D graphics and intricate designs create a captivating experience, making it ideal for puzzle enthusiasts looking for a fun yet challenging adventure.",
    "category": "puzzles",
    "tags": "Board Game,Strategy,Multiplayer",
    "width": "1024",
    "height": "768",
    "guid": "nuts_and_bolts",
    "pubDate": "Sat, 17 Jun 23 10:50:00 +0000"
  },
  {
    "title": "8 Ball Pro",
    "thumb": "/8ball.jpeg",
    "link": "https://g2.igroutka.ru/games/23/8_ball_pro/rvvASMiM/20fa5406b00643128250478502fa5453/",
    "description": "Step into the virtual pool hall with 8 Ball Pro, where you can showcase your billiards skills against friends or AI opponents. Featuring realistic physics and beautifully rendered graphics, this game provides an authentic pool experience. Whether you're a beginner or a seasoned pro, challenge yourself to master the art of potting balls and executing trick shots to become the ultimate champion.",
    "category": "puzzles",
    "tags": "Board Game,Strategy,Multiplayer",
    "width": "1024",
    "height": "768",
    "guid": "8ball_pro",
    "pubDate": "Sat, 17 Jun 23 10:50:00 +0000"
  },
]

const normalizeH5Games = (games) => {
  return games.map(game => ({
    title: game.title,
    link: game.link,
    thumb: game.thumb,
    description: game.description,
    category: game.category,
    tags: game.tags,
    width: game.width,
    height: game.height,
    guid: game.guid
  }));
};

const normalizeHtmlGames = (games) => {
  return games.map(game => ({
    title: game.name,
    link: game.url,
    thumb: game.thumb1 || game.thumb2 || game.thumb3, // Use the first available thumbnail
    description: game.description,
    category: game.category,
    tags: "", // Add tags if needed, it's missing in this structure
    width: game.width,
    height: game.height,
    guid: game.name.toLowerCase().replace(/\s+/g, '-')
  }));
};

const normalizeOnlineGames = (games) => {
  return games.map(game => ({
    title: game.title,
    link: game.embed,
    thumb: game.image,
    description: game.description,
    category: "", // Add a default category if missing
    tags: game.tags,
    width: 800, // Default size if not provided
    height: 600,
    guid: game.title.toLowerCase().replace(/\s+/g, '-')
  }));
};

// Worker process
if (cluster.isWorker) {
  const app = express();
  const port = 8001;

  app.use(cors());

  let cachedGames = []; // To store the games for caching
  let lastFetchTime = 0;
  const CACHE_DURATION = 60 * 60 * 1000; // 1 hour

  // Function to fetch all games and normalize them
  const fetchAllGames = async () => {
    try {
      const allGames = [];

      const [h5gamesResponse, htmlgamesResponse, onlinegamesResponse] = await Promise.all(
        externalSources.map(src => axios.get(src))
      );

      const h5games = normalizeH5Games(h5gamesResponse.data);
      const htmlgames = normalizeHtmlGames(htmlgamesResponse.data);
      const onlinegames = normalizeOnlineGames(onlinegamesResponse.data);

      allGames.push(...h5games, ...htmlgames, ...onlinegames, ...customGames);

      cachedGames = allGames;
      lastFetchTime = Date.now();
    } catch (error) {
      console.error('Error fetching games', error);
    }
  };

  // Fetch the games initially when the server starts
  fetchAllGames();

  // Endpoint to get all games from multiple sources
  app.get('/api/games', async (req, res) => {
    // Refresh the data if the cache duration has expired
    if (Date.now() - lastFetchTime > CACHE_DURATION) {
      await fetchAllGames();
    }
    res.json(cachedGames);
  });

  // Endpoint to get a game by GUID
  app.get('/api/games/:guid', async (req, res) => {
    const { guid } = req.params;

    if (!cachedGames.length) {
      await fetchAllGames(); // Fetch the data if it's not already fetched
    }

    const game = cachedGames.find(game => game.guid === guid);

    if (game) {
      res.json(game);
    } else {
      res.status(404).send('Game not found');
    }
  });

  // Endpoint to get all unique categories
  app.get('/api/categories', async (req, res) => {
    if (!cachedGames.length) {
      await fetchAllGames(); // Fetch the data if not already fetched
    }

    // Extract unique categories from the games list
    const categories = [...new Set(cachedGames.map(game => game.category).filter(Boolean))];

    res.json(categories); // Send the unique categories as a response
  });

  // Endpoint to get related games by category or tags
  app.get('/api/related-games/:guid', async (req, res) => {
    const { guid } = req.params;

    if (!cachedGames.length) {
      await fetchAllGames(); // Fetch the data if it's not already fetched
    }

    const game = cachedGames.find(g => g.guid === guid);

    if (!game) {
      return res.status(404).send('Game not found');
    }

    // Find related games by category (or you can also match by tags)
    const relatedGames = cachedGames.filter(g => g.category === game.category && g.guid !== guid);

    res.json(relatedGames);
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
