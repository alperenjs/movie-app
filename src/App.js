import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import MovieDetail from "./pages/MovieDetail/MovieDetail";
import CastDetail from "./pages/CastDetail/CastDetail";

function App() {
  return (
    <div className="App">
      {process.env.REACT_APP_API_KEY}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movie/:movieID" element={<MovieDetail />} />
          <Route path="/cast/:castID" element={<CastDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
