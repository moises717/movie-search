const API_KEY = process.env.API_KEY;
console.log(API_KEY);
export const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=`;
export const GET_MOVIE_BY_ID = `http://www.omdbapi.com/?apikey=${API_KEY}&plot=full&i=`;
