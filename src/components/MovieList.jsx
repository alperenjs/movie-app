import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchAllMovies } from "../store/movie/movieSlice";
import MovieCard from "./MovieCard";
import { getLoading, getAllMovies } from "../store/movie/selectors";

function MovieList() {
  const dispatch = useDispatch();

  const { loading, movies } = useSelector((state) => ({
    loading: getLoading(state),
    movies: getAllMovies(state),
  }));

  useEffect(() => {
    console.log(2);
    dispatch(fetchAllMovies());
  }, [dispatch]);

  return (
    <>
      <section className="mt-9">
        <div className="mt-2 grid grid-cols-2 gap-y-5 sm:grid-cols-3 gap-x-5 ">
          {movies.map((movie) => {
            return (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                vote_average={movie.vote_average}
                img_url={movie.poster_path}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default MovieList;
