import { createSlice } from "@reduxjs/toolkit";
import { https } from "util";
import axios from "axios";

const { REACT_APP_BASE_URL, REACT_APP_API_KEY } = process.env;

const initialState = {
  isSearching: false,
  loading: false,
  movies: [],
  searchResult: [],
  movieDetail: {},
  castInfo: [],
  personDetail: {},
  upcomingMovies: [],
  trailerVideos: [],
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
    setIsSearching(state, { payload }) {
      return {
        ...state,
        isSearching: payload,
      };
    },
    setAllMovies(state, { payload }) {
      state.movies = payload;
    },
    setSearchResult(state, { payload }) {
      state.searchResult = payload;
    },
    setMovieDetail(state, { payload }) {
      state.movieDetail = payload;
    },
    setCastInfo(state, { payload }) {
      state.castInfo = payload;
    },
    setPersonDetail(state, { payload }) {
      state.personDetail = payload;
    },
    setUpcomingMovies(state, { payload }) {
      state.upcomingMovies = payload;
    },
    setTrailerVideos(state, { payload }) {
      state.trailerVideos = payload;
    },
  },
});

export const {
  setLoading,
  setAllMovies,
  setMovieDetail,
  setCastInfo,
  setPersonDetail,
  setSearchResult,
  setUpcomingMovies,
  setTrailerVideos,
  setIsSearching,
} = movieSlice.actions;

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
export function fetchTrailerVideos(id) {
  // https://www.youtube.com/watch?v=
  return async (dispatch, getState) => {
    dispatch(setLoading(true));
    axios
      .get(
        `${REACT_APP_BASE_URL}/movie/${id}/videos?api_key=${REACT_APP_API_KEY}&page=1`
      )
      .then(function (response) {
        // handle success
        let data = response.data.results;
        dispatch(setTrailerVideos(data));
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

export function fetchUpcomingMovies() {
  return async (dispatch, getState) => {
    dispatch(setLoading(true));
    axios
      .get(
        `${REACT_APP_BASE_URL}/movie/upcoming?api_key=${REACT_APP_API_KEY}&page=1`
      )
      .then(function (response) {
        // handle success
        let data = response.data.results;
        dispatch(setUpcomingMovies(data));
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

export function searchMovies(keyword) {
  return async (dispatch, getState) => {
    dispatch(setLoading(true));
    axios
      .get(
        `${REACT_APP_BASE_URL}/search/movie?api_key=${REACT_APP_API_KEY}&query=${keyword}`
      )
      .then(function (response) {
        // handle success
        let data = response.data.results;
        dispatch(setSearchResult(data));
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
  return async (dispatch, getState) => {
    dispatch(setLoading(true));
    axios
      .get(
        `${REACT_APP_BASE_URL}/movie/${id}/credits?api_key=${REACT_APP_API_KEY}`
      )
      .then(function (response) {
        // handle success
        let data = response.data;
        dispatch(setCastInfo(data.cast));
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
  return async (dispatch, getState) => {
    dispatch(setLoading(true));
    axios
      .get(`${REACT_APP_BASE_URL}/person/${id}?api_key=${REACT_APP_API_KEY}`)
      .then(function (response) {
        // handle success
        let data = response.data;
        dispatch(setPersonDetail(data));
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
