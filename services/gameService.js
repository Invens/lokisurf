import axios from 'axios';

export async function fetchGamesData() {
  try {
    const response = await axios.get('http://localhost:5000/api/games');
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
}

export async function fetchGameById(guid) {
  try {
    const response = await axios.get(`http://localhost:5000/api/games/${guid}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching game by ID:", error.message);
    throw error;
  }
}
