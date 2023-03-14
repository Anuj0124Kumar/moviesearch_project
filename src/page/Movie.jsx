import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../component/context";

export default function Movie() {
  const { isLoading, movie } = useGlobalContext();

  if (isLoading) {
    return (
      <div>
        <div className="loading">Loading...</div>
      </div>
    );
  }

  return (
    <section className="movie-page">
      <div className="container grid grid-4-col">
        {movie.map((movieData) => {
          const { imdbID, Title, Poster } = movieData;
          return (
            <NavLink to={`Movie/${imdbID}`}>
              <div className="card">
                <div className="card-info">
                  <h2>
                    {Title.length > 15
                      ? `${Title.slice(0, 15)}...`
                      : `${Title}`}
                  </h2>
                  <img src={Poster} alt="no image" />
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
}
