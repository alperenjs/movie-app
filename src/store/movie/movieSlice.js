import { createSlice } from "@reduxjs/toolkit";
import { https } from "util";
import axios from "axios";

const { REACT_APP_BASE_URL, REACT_APP_API_KEY } = process.env;

const initialState = {
  loading: false,
  movies: [],
  movieDetail: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setLoading(state, { payload }) {
      return {
        ...state,
        loading: payload,
      };
    },
    setAllMovies(state, { payload }) {
      state.movies = payload;
    },
    setMovieDetail(state, { payload }) {
      state.movieDetail = payload;
    },
  },
});

export const { setLoading, setAllMovies, setMovieDetail } = movieSlice.actions;

export function fetchAllMovies() {
  return async (dispatch, getState) => {
    dispatch(setLoading(true));
    axios
      .get(
        `${REACT_APP_BASE_URL}/movie/popular?api_key=${REACT_APP_API_KEY}&page=1`
      )
      .then(function (response) {
        // handle success
        let data = response.data.results;
        dispatch(setAllMovies(data));
        console.log(data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        dispatch(setLoading(false));
      });
  };
}

export function fetchMovieDetail(id) {
  return async (dispatch, getState) => {
    dispatch(setLoading(true));
    axios
      .get(`${REACT_APP_BASE_URL}/movie/${id}?api_key=${REACT_APP_API_KEY}`)
      .then(function (response) {
        // handle success
        let data = response.data;
        dispatch(setMovieDetail(data));
        console.log("detail", data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        dispatch(setLoading(false));
      });
  };
}

export default movieSlice.reducer;
