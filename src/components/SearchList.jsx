import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLoading, getSearchResult } from "../store/movie/selectors";
import { searchMovies } from "../store/movie/movieSlice";
import MovieCard from "./MovieCard";

function SearchList() {
  const dispatch = useDispatch();

  const { loading, searchResult } = useSelector((state) => ({
    loading: getLoading(state),
    searchResult: getSearchResult(state),
  }));

  return (
    <>
      <section className="mt-9">
        <div className="mt-2 grid grid-cols-2 gap-y-5 sm:grid-cols-3 gap-x-5 ">
          {searchResult?.map((movie) => {
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

export default SearchList;
