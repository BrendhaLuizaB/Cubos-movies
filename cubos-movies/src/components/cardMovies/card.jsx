/* eslint-disable @next/next/no-img-element */
import { GlobalContext } from "@/app/Context/movieContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useState } from "react";

const CardMovies = ({ movie }) => {
  const apiKey = "5e106f5be41eaa634fae58a988921697";
  const IMAGE_API = "https://image.tmdb.org/t/p/w500";
  const {isHovering, setIsHovering, setDetailsId, detailsId} = useContext(GlobalContext)
  const { data: details, isLoading, isError } = useQuery({
    queryKey: [`details`],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${apiKey}`
      );
      return data;
    },
  });
// console.log('detalhes', details)
//   console.log(movie)

const handleOnMouseEnter = () => {
    setIsHovering(movie.id)
    setIsHovering(movie.id)
    console.log('ID DO FILME', movie.id)
}

const handleOnMouseLeave = () => {
    setIsHovering(-1)
}

const crossClass = () => {
    return `flex justify-center top-[6rem] left-[3rem] rounded-full p-[3.75rem] absolute items-center bg-white-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 ${isHovering === movie.id ? '' : 'hidden'} `
} 

const detailsClass = () => {
    return `text-purple-purple1 ${detailsId === movie.id ? '' : 'hidden'}`
} 
  let averageVote = movie.vote_average;
  let total = 10;
  let percentage = (averageVote / total) * 100;

  return (
    <div className="m-2 relative transform transition-transform hover:scale-110">
      <img
        src={IMAGE_API + movie?.poster_path}
        className="w-[15rem] rounded-sm "  
        alt="movie-poster"
        onMouseEnter={() => handleOnMouseEnter()}
        onMouseLeave={handleOnMouseLeave}
      />
      <div className={crossClass()}>
        <h1 className="text-[#FFE000] text-base font-semibold">{Math.round(percentage)}<span className="text-purple-purple1">%</span></h1>
      </div>
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(18, 17, 19, 0.644) 100%, rgba(0,0,0,0.70640756302521) 0%, rgba(18,17,19,0.695203081232493) 0%)",
        }}
        className="absolute bottom-0 p-2 pt-4 w-[100%] "
      >
        <h2 className="text-purple-purple1">{movie?.title}</h2>
        {/* <p className={detailsClass()}>{details?.genres.map((genre) => {console.log(genre.name)})}</p> */}
      </div>
    </div>
  );
};

export default CardMovies;
