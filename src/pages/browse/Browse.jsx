import React, { useState } from "react";
import NavBar from "../../components/Navbar/NavBar";
import Banner from "../../components/Banner/Banner";
import { requests } from "../../APIMovie";
import MovieList from "../../components/Movies/MovieList";

function Browse() {
  return (
    <div className="app">
      <NavBar />
      <Banner />
      {/*TODO render MovieList */}
      <MovieList
        title="Original"
        APIEndpoint={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <MovieList title="Xu hướng" APIEndpoint={requests.fetchTrending} />
      <MovieList title="Xếp hạng cao" APIEndpoint={requests.fetchTopRated} />
      <MovieList title="Hành động" APIEndpoint={requests.fetchActionMovies} />
      <MovieList title="Hài" APIEndpoint={requests.fetchComedyMovies} />
      <MovieList title="Kinh dị" APIEndpoint={requests.fetchHorrorMovies} />
      <MovieList title="Lãng mạn" APIEndpoint={requests.fetchRomanceMovies} />
      <MovieList title="Tài liệu" APIEndpoint={requests.fetchDocumentaries} />
    </div>
  );
}

export default Browse;
