import React from "react";
import Search from "../component/Search";
import Movie from "./Movie";
import LoadingBar from 'react-top-loading-bar'
//import { useContext } from 'react'
import { useGlobalContext } from '../component/context'
//import { AppContext } from '../component/context'

export default function Home() {

    const {progress} = useGlobalContext();
  return (
    <>
      <div>
        <LoadingBar
          color="#f11946"
          height={4}
          progress={progress}
        />
        <Search />
        <Movie />
      </div>
    </>
  );
}
