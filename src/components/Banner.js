import React, { useEffect, useState } from "react";
import axios from "../network/axios";
import requests from "../network/request";
const baseUrl = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
      console.log(movie.overview);
      return response;
    }
    fetchData();
  }, []);
  function truncateString(str, n) {
    return str?.length > n ? str.slice(0, n) + "..." : str;
  }
  return (
    <header
      className="banner h-[448px] w-screen   object-contain"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url(${baseUrl}${movie?.backdrop_path})`,
      }}
    >
      <div className="banner-content ml-10 py-32  h-[190px]">
        <h2 className="text-4xl text-white font-semibold ">
          {movie?.name || movie?.title || movie?.original_name}
        </h2>
        <div className=" my-5 flex gap-4">
          <button className="px-7 py-2 bg-[#33333380] text-md text-center text-white font-medium rounded-sm hover:bg-[#e6e6e6] hover:text-black hover:transition-all duration-200 ">
            play
          </button>
          <button className="px-7 py-2 bg-[#33333380] text-md text-center font-medium rounded-sm text-white text-md  hover:bg-[#e6e6e6] hover:text-black hover:transition-all duration-200  ">
            My list
          </button>
        </div>
        <div className="desc my-10">
          <p className="text-base lin text-left text-white max-w-[45rem]">
            {truncateString(movie?.overview, 120)}
          </p>
        </div>
      </div>
    </header>
  );
}

export default Banner;
