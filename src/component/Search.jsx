import React from "react";
import { useGlobalContext } from "./context";

export default function Search() {
  const { movieName, setMovieName, isError } = useGlobalContext();

  return (
    <>
      <section className="search-section">
        <h2>Search Your Favourite Movie</h2>
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="text"
              placeholder="search movie"
              value={movieName}
              onChange={(e) => setMovieName(e.target.value)}
            />
          </div>
        </form>
        <div className="card-error">
          <p>{isError.show && isError.msg}</p>
        </div>
      </section>
    </>
  );
}
