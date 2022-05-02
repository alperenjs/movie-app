import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import useDebounce from "../hooks/useDebounce";
import { searchResult, getLoading } from "../store/movie/selectors";
import React, { useState, useEffect } from "react";
import { searchMovies, setIsSearching } from "../store/movie/movieSlice";

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedValue = useDebounce(searchTerm, 500);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleInputFocus = () => {
    if (searchTerm.length > 3) {
      dispatch(setIsSearching(true));
    }
  };

  const handleInputBlur = () => {
    setTimeout(() => {
      dispatch(setIsSearching(false));
    }, 500);
  };

  useEffect(() => {
    dispatch(searchMovies(debouncedValue));
  }, [debouncedValue, dispatch]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "rgb(39 39 42)" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={`/`}>Movi-E</Link>
          </Typography>
        </Toolbar>
        <div className="items-center content-center justify-center flex">
          <span className="text-gray-400 relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 absolute left-5 bottom-0 pt-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </span>
          <input
            type="text"
            className="text-xs ring-1 mb-3 mx-2 bg-transparent ring-gray-200 dark:ring-zinc-600 focus:ring-red-300 pl-10 pr-5 py-3 rounded-full outline-none focus:ring-1"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
        </div>
      </AppBar>
    </Box>
  );
}
