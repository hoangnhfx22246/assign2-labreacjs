export const API_KEY = "fd38be97ba08c46d9b7aa12521d45ba3";
export const API_ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDM4YmU5N2JhMDhjNDZkOWI3YWExMjUyMWQ0NWJhMyIsIm5iZiI6MTcyMDY4OTc0Ni4yMjIzMSwic3ViIjoiNjY4ZmEyM2ViMzQ0NDVmMGVhOTEzOWUzIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.GAT4RdZ8adJhq6W6SsdIzaKE4R4yUWTG8fNm4Wez_KY";
export const url = "https://api.themoviedb.org/3";
export const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchSearch: `/search/movie?api_key=${API_KEY}&language=en-US`,
};
export const image_path = {
  url: "https://image.tmdb.org/t/p/",
  size: ["original", "w500"],
};
