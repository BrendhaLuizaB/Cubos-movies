/* eslint-disable @next/next/no-img-element */
import { GlobalContext } from "@/app/Context/movieContext";
import { DETAILS_URL } from "@/urls/baseUrl";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useState } from "react";

const CardMovies = ({ movie }) => {
  const IMAGE_API = "https://image.tmdb.org/t/p/w500";
  const { isHovering, setIsHovering, detailsId, setDetailsId, setMovieClicked, details } =
    useContext(GlobalContext);

    // console.log(movie)
  const handleOnMouseEnter = () => {
    setIsHovering(movie.id);
    setDetailsId(movie.id);
  };

  const handleClickMovie = () => {
    setMovieClicked(true)
  }
  const handleOnMouseLeave = () => {
    setIsHovering(-1);
  };

  const crossClass = () => {
    return `flex justify-center top-[6rem] left-[3rem] rounded-full p-[3.75rem] absolute items-center bg-white-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 ${
      isHovering === movie.id ? "" : "hidden"
    } `;
  };

  const detailsClass = () => {
    return `text-purple-purple1 ${
      isHovering === movie.id ? "" : "hidden"
    } transform transition-transform font-extralight italic text-sm`;
  };

  let averageVote = movie.vote_average;
  let total = 10;
  let percentage = (averageVote / total) * 100;

  return (
    <div
      className="m-2 relative transform transition-transform hover:scale-110 mb-5 cursor-pointer"
      onMouseEnter={() => handleOnMouseEnter()}
      onMouseLeave={handleOnMouseLeave}
      onClick={() => handleClickMovie()}
    >
      <img
        src={IMAGE_API + movie?.poster_path || IMAGE_API + movie?.backdrop_path}
        className="w-[15rem] rounded-sm "
        alt="movie-poster"
      />
      <div className={crossClass()}>
        <h1 className="text-[#FFE000] text-base font-semibold">
          {Math.round(percentage)}
          <span className="text-purple-purple1">%</span>
        </h1>
      </div>
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(18, 17, 19, 0.644) 100%, rgba(0,0,0,0.70640756302521) 0%, rgba(18,17,19,0.695203081232493) 0%)",
        }}
        className="absolute bottom-0 p-2 pt-4 w-[100%] "
      >
        <h2 className="text-purple-purple1">{movie?.title}</h2>
        <p className={detailsClass()}>
          {details?.genres.map((genre, index) => {
            if (index === genre.length - 1) {
              return genre.name; // Não adicionar vírgula e espaço para o último item
            } else {
              return `${genre.name}, `; // Adicionar vírgula e espaço para os demais itens
            }
          })}
        </p>
      </div>
    </div>
  );
};

export default CardMovies;
