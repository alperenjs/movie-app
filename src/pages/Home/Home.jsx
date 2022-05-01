import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./home.css";
import {
  fetchAllMovies,
  fetchMovieDetail,
  fetchCastInfo,
  fetchPersonDetail,
} from "../../store/movie/movieSlice";
import { getLoading, getAllMovies } from "../../store/movie/selectors";

function Home() {
  const dispatch = useDispatch();
  const { loading, movies } = useSelector((state) => ({
    loading: getLoading(state),
    movies: getAllMovies(state),
  }));

  useEffect(() => {
    console.log(2);
    dispatch(fetchPersonDetail(287));
  }, [dispatch]);

  // useEffect(() => {
  //   console.log(2);
  //   dispatch(fetchAllMovies());
  // }, [dispatch]);

  return <div>Home</div>;
}

export default Home;
