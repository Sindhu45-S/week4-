import { Route, Routes } from "react-router-dom";
import { Movielist } from "../pages/Movielist";
import {Moviedetails} from "../pages/Moviedetails";
import  {Search}  from "../pages/Search";

const Allroute = () => {
  return (
    <Routes>
      <Route path="/" element={<Movielist title="Your Guide to great Movies" apiPath="movie/now_playing" />} />
      <Route path="/movies/popular" element={<Movielist title="Popular Movies" apiPath="movie/popular" />} />
      <Route path="/movies/top" element={<Movielist title="Top Rated Movies" apiPath="movie/top_rated" />} />
      <Route path="/movies/upcoming" element={<Movielist title="Upcoming Movies" apiPath="movie/upcoming" />} />
      <Route path="/movie/:id" element={<Moviedetails />} />
      <Route path="/search/:query" element={<Search />} />
    </Routes>
  );
};

export default Allroute;
