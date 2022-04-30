import { configureStore } from "@reduxjs/toolkit";
import movies from "./movie/movieSlice";

export const store = configureStore({
  reducer: { movies },
});
