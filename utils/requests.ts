const API_KEY = process.env.NEXT_PUBLIC_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'
const MOVIE_FILTER = 'include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=2023&region=US&sort_by=popularity.desc&with_watch_providers=8&with_original_language=en&without_companies=2,3,6125,420'
const TV_FILTER = 'first_air_date_year=2025&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_origin_country=US&with_original_language=en&with_watch_providers=8'

const requests = {
  fetchTrending: `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&${MOVIE_FILTER}`,
  fetchNetflixOriginals: `${BASE_URL}/discover/movie?api_key=${API_KEY}&${MOVIE_FILTER}`,
  fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&${MOVIE_FILTER}`,
  fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&${MOVIE_FILTER}&with_genres=28`,
  fetchAnimationMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&${MOVIE_FILTER}&with_genres=35`,
  fetchDramaMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&${MOVIE_FILTER}&with_genres=18`,
  fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&${MOVIE_FILTER}&with_genres=27`,
  fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&${MOVIE_FILTER}&with_genres=10749`,
  fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&${MOVIE_FILTER}&with_genres=99`,
  fetchFantasyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&${MOVIE_FILTER}&with_genres=14`,
  fetchHistoryMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&${MOVIE_FILTER}&with_genres=36`,
  fetchScienceFictionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&${MOVIE_FILTER}&with_genres=878`,
  fetchTVMovieMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&${MOVIE_FILTER}&with_genres=10770`,
  fetchWarMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&${MOVIE_FILTER}&with_genres=10752`,
  fetchTvShows: `${BASE_URL}/discover/tv?api_key=${API_KEY}&${TV_FILTER}`,
}

export default requests