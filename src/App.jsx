import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NowPlayingPage from "./page/NowPlayingPage";
import Navbar from "./component/Navbar";
import MainPage from "./page/MainPage";
import PopularPage from "./page/PopularPage";
import TopRatedPage from "./page/TopRatedPage";
import UpComing from "./page/UpComing";
import { useState } from "react";
import MovieDetail from "./page/MovieDetail";
import NotFoundPage from "./page/NotFoundPage";
import SignUp from "./page/SignUp";
import Footer from "./component/Footer";
import LoginPage from "./page/LoginPage";

function App() {
  const [login, setLogin] = useState(false);
  return (
    <>
      <Navbar login={login} setLogin={setLogin} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/popular" element={<PopularPage />} />
        <Route path="/nowplaying" element={<NowPlayingPage />} />
        <Route path="/toprated" element={<TopRatedPage />} />
        <Route path="/upcoming" element={<UpComing />} />
        <Route path="/movie/:title" element={<MovieDetail />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
