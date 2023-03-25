import axios from 'axios';

const API_KEY = '5f00324c3530ad02b76dbaa7a82cb337';

const BASE_URL = 'https://api.themoviedb.org/3/';

axios.defaults.baseURL = BASE_URL;

export async function fetchTrendMovies() {
  const response = await axios.get(`/trending/movie/week?api_key=${API_KEY}`);
  return response.data.results;
}

export async function fetchOnSearch(query) {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${query}`
  );
  return response.data.results;
}

export async function fetchFilmDetails(filmId) {
  const response = await axios.get(`movie/${filmId}?api_key=${API_KEY}`);
  return response.data;
}

export async function fetchFilmCast(filmId) {
  const response = await axios.get(
    `movie/${filmId}/credits?api_key=${API_KEY}`
  );
  return response.data.cast;
}
export async function fetchFilmReviews(filmId) {
  const response = await axios.get(
    `movie/${filmId}/reviews?api_key=${API_KEY}`
  );
  return response.data.results;
}
