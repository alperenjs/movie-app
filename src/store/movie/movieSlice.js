import { createSlice } from "@reduxjs/toolkit";
import { https } from "util";
import axios from "axios";

const { REACT_APP_BASE_URL, REACT_APP_API_KEY } = process.env;

const initialState = {
  loading: false,
  movies: [],
  movieDetail: {},
  castInfo: {},
  personDetail: {}
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
    setCastInfo(state, { payload }) {
      state.castInfo = payload;
    },
    setPersonDetail(state, { payload }) {
      state.personDetail = payload;
    }
  },
});

export const { setLoading, setAllMovies, setMovieDetail, setCastInfo, setPersonDetail } =
  movieSlice.actions;

export function fetchAllMovies() {
  return async (dispatch) => {
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
  return async (dispatch) => {
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

export function fetchCastInfo(id) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    axios
      .get(
        `${REACT_APP_BASE_URL}/movie/${id}/credits?api_key=${REACT_APP_API_KEY}`
      )
      .then(function (response) {
        // handle success
        let data = response.data;
        dispatch(setCastInfo(data));
        console.log("castDetail", data);
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

export function fetchPersonDetail(id) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    axios
      .get(
        `${REACT_APP_BASE_URL}/person/${id}?api_key=${REACT_APP_API_KEY}`
      )
      .then(function (response) {
        // handle success
        let data = response.data;
        dispatch(setCastInfo(data));
        console.log("presondetail", data);
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
