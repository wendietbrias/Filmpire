import axios from "axios";

const MOVIE = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
});

const fetchMovieByCategories = async (category = "popular", page = 0) => {
  const { data } = await MOVIE.get(
    `/movie/${category}?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
  );

  return data;
};

const fetchMovieByGenre = async (genre, page) => {
  const { data } = await MOVIE.get(
    `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&page=${page}&with_genres=${genre}`
  );

  return data;
};

const fetchMovieDetail = async (movieId) => {
  const { data } = await MOVIE.get(
    `/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`
  );

  return data;
};

const fetchSimiliarMovie = async (movieId) => {
  const { data: similarResponse } = await MOVIE.get(
    `/movie/${movieId}/similar?api_key=${process.env.REACT_APP_API_KEY}`
  );

  const { data: creditResponse } = await MOVIE.get(
    `/movie/${movieId}/credits?api_key=${process.env.REACT_APP_API_KEY}`
  );

  return { similarResponse, creditResponse };
};

const fetchActorInfo = async (actorId, page = 1) => {
  const { data: actorBioResponse } = await MOVIE.get(
    `/person/${actorId}?api_key=${process.env.REACT_APP_API_KEY}`
  );
  const { data: actorMoviesResponse } = await MOVIE.get(
    `/person/${actorId}/movie_credits?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
  );

  return { actorBioResponse, actorMoviesResponse };
};

export {
  fetchMovieByCategories,
  fetchMovieByGenre,
  fetchMovieDetail,
  fetchSimiliarMovie,
  fetchActorInfo,
};
