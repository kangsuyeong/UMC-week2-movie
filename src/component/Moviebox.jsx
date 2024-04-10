import React from "react";

const imageLink = "https://image.tmdb.org/t/p/w500";

const Moviebox = ({ movies }) => {
  return (
    <div className="movie-box">
      <div class="overview">
        <p>{movies.overview}</p>
      </div>
      <div>
        <img
          className="movie-img"
          src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
        />
      </div>
      <div className="movie-info">
        <div>{movies.title}</div>
        <div>{movies.vote_average}</div>
      </div>
    </div>
  );
};

export default Moviebox;
