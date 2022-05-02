import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieList from "../../components/MovieList";
import "./home.css";
import {
  fetchAllMovies,
  fetchMovieDetail,
  fetchCastInfo,
  fetchPersonDetail,
  searchMovies,
} from "../../store/movie/movieSlice";
import {
  getLoading,
  getAllMovies,
  getIsSearching,
} from "../../store/movie/selectors";

function Home() {
  const dispatch = useDispatch();
  const { loading, movies, isSearching } = useSelector((state) => ({
    loading: getLoading(state),
    movies: getAllMovies(state),
    isSearching: getIsSearching(state),
  }));

  return <MovieList />;
}

export default Home;
