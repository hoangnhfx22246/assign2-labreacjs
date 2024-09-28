import React from "react";
import NavBar from "../../components/Navbar/NavBar";
import SearchForm from "../../components/SearchForm/SearchForm";
import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { requests, url } from "../../APIMovie";
import MovieList from "../../components/Movies/MovieList";

const Search = () => {
  const [search, setSearch] = useState(""); // sử dụng state để lưu giá trị search

  const { isLoading, error, requestData } = useFetch(); // sử dụng custom hook để lấy dữ liệu thông qua fetch

  function onSubmit(search) {
    // const path = url + requests.fetchSearch + `&query=${search}`;
    setSearch(search);
  }

  return (
    <div className="app">
      <NavBar />
      <SearchForm onSubmit={onSubmit} />
      {search && (
        <MovieList
          title="Original"
          APIEndpoint={requests.fetchSearch + `&query=${search}`}
          isLargeRow
          className="flex-wrap justify-center"
        />
      )}
    </div>
  );
};

export default Search;
