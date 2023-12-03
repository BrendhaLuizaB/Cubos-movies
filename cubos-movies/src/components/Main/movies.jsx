import { useContext } from "react";
import CardMovies from "../cardMovies/card";
import { GlobalContext } from "@/app/Context/movieContext";

const MovieList = () => {
  const { data, searchResults, movieClicked } = useContext(GlobalContext);
  return (
    <>
      <div
        className="bg-white-400 rounded-md bg-clip-padding 
      backdrop-filter backdrop-blur-sm bg-opacity-10 flex flex-wrap justify-center p-4 mt-10"
      >
        {searchResults
          ? searchResults.map((movie, index) => (
              <CardMovies key={index} movie={movie} />
            ))
          : data?.results.map((movie, index) => (
              <CardMovies key={index} movie={movie} />
            ))}
      </div>
    </>
  );
};

export default MovieList;
