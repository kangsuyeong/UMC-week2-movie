import React from "react";
import Moviepage from "../component/Moviepage";

const PopularPage = () => {
  let url =
    "https://api.themoviedb.org/3/movie/popular?language=ko-KR&region=KR&page=1";

  return (
    <div>
      <Moviepage url={url} />
    </div>
  );
};

export default PopularPage;
