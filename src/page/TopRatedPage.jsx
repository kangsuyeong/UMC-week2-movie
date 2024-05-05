import React from "react";
import Moviepage from "../component/Moviepage";
const TopRatedPage = () => {
  let url =
    "https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&region=KR&page=1";
  return (
    <div>
      <Moviepage url={url} />
    </div>
  );
};

export default TopRatedPage;
