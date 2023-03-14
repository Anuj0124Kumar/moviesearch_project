import React, { useContext, useEffect, useState } from "react";

const url = `https://www.omdbapi.com/?&apikey=1894a122`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [isError, setIsError] = useState({ show: "false", msg: "" });
  const [movieName, setMovieName] = useState("Batman");
  const [progress,setProgress] = useState(0);

  const getMovie = async (url) => {
    setIsLoading(true);
    try {
        setProgress(10);
      const res = await fetch(url);
      const data = await res.json();

      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data.Search);
        setIsError({
          show: false,
          msg: "",
        });
        setProgress(100);
      } else {
        setIsError({
          show: true,
          msg: data.Error,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      getMovie(`${url}&s=${movieName}`);
    }, 1000);

    return () => clearTimeout(timeOut);
  }, [movieName]);

  return (
    <AppContext.Provider
      value={{ isLoading, isError, movie, movieName, setMovieName,progress }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
