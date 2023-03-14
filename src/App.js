
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/Home';
import OneMovieData from './page/OneMovieData';

function App() {
 
  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="Movie/:id" element={<OneMovieData/>} />
     </Routes>
    </>
  );
}

export default App;
