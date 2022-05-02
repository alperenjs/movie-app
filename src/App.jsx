import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import MovieDetail from "./pages/MovieDetail/MovieDetail";
import CastDetail from "./pages/CastDetail/CastDetail";
import Layout from "./components/Layout";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/movie/:movieID" element={<MovieDetail />} />
            <Route path="/cast/:castID" element={<CastDetail />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
