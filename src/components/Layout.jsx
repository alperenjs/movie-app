import React, { useEffect } from "react";
import Navbar from "./Navbar";
import SearchList from "./SearchList";
import UpcomingList from "./UpcomingList";
import { useDispatch, useSelector } from "react-redux";

import { fetchAllMovies, setIsSearching } from "../store/movie/movieSlice";
import MovieCard from "./MovieCard";
import {
  getLoading,
  getAllMovies,
  getIsSearching,
} from "../store/movie/selectors";

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  const { loading, isSearching } = useSelector((state) => ({
    loading: getLoading(state),
    isSearching: getIsSearching(state),
  }));

  // useEffect(() => {
  //   dispatch(setIsSearching(true));
  // }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen  2xl:max-w-screen-2xl 2xl:mx-auto">
        <div className=" flex-1 py-10  px-5 sm:px-10 ">{children}</div>
        {isSearching ? <SearchList /> : <></>}
        <UpcomingList />
      </div>
    </>
  );
};

export default Layout;
