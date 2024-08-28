import axios from 'axios';

export async function fetchGamesData() {
  try {
    const response = await axios.get('https://psychic-space-waffle-vg449wqrqx7c6p45-5000.app.github.dev/api/games');
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
}

export async function fetchGameById(guid) {
  try {
    const response = await axios.get(`https://psychic-space-waffle-vg449wqrqx7c6p45-5000.app.github.dev/api/games/${guid}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching game by ID:", error.message);
    throw error;
  }
}

export async function fetchRelatedGames(guid) {
  try {
    const response = await axios.get(`https://psychic-space-waffle-vg449wqrqx7c6p45-5000.app.github.dev/api/related-games/${guid}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching related games:", error.message);
    throw error;
  }
}
