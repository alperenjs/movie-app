import { createSlice } from "@reduxjs/toolkit";
import { https } from "util";
import axios from "axios";

const { REACT_APP_BASE_URL, REACT_APP_API_KEY } = process.env;

const initialState = {
  loading: false,
  movies: [],
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
    addMovies(state, { payload }) {
      state.movies = payload;
    },
  },
});

export const { setLoading, addMovies } = movieSlice.actions;

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
        dispatch(addMovies(data));
        console.log(data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        dispatch(setLoading(true));
      });
  };
}

export default movieSlice.reducer;
