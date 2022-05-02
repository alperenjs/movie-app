import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUpcomingMovies } from "../store/movie/movieSlice";
import MovieCard from "./MovieCard";
import { getLoading, getUpcomingMovies } from "../store/movie/selectors";
import UpcomingCard from "./UpcomingCard";

function UpcomingList() {
  const dispatch = useDispatch();

  const { loading, movies } = useSelector((state) => ({
    loading: getLoading(state),
    movies: getUpcomingMovies(state),
  }));

  useEffect(() => {
    dispatch(fetchUpcomingMovies());
  }, [dispatch]);

  return (
    <aside className=" w-1/5 py-10 px-10  min-w-min  hidden lg:block ">
      <div className="mt-10">
        <span className="font-semibold text-gray-700 text-left flex">
          Upcoming Movies
        </span>
        <ul className="mt-4 text-gray-400 text-xs space-y-3">
          {movies.map((movie) => {
            return (
              <UpcomingCard
                key={movie.id}
                title={movie.title}
                vote_average={movie.vote_average}
                img_url={movie.poster_path}
              />
            );
          })}
        </ul>
      </div>
    </aside>
  );
}

export default UpcomingList;
