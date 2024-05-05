import React from "react";
import Moviepage from "../component/Moviepage";

const UpComing = () => {
  let url =
    "https://api.themoviedb.org/3/movie/upcoming?language=ko-KR&region=KR&page=1";
  return (
    <div>
      <Moviepage url={url} />
    </div>
  );
};

export default UpComing;
