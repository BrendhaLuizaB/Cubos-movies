import { useContext } from "react";
import CardMovies from "../cardMovies/card";
import { GlobalContext } from "@/app/Context/movieContext";
import MovieNotFound from "../MovieNotFound/noMovie";

const MovieList = () => {
  const { data, searchResults, selectedGenres } = useContext(GlobalContext);

  const getFilteredMovies = () => {
    const movies = searchResults ?? data?.results;
    const hasFilterActive = selectedGenres.length > 0;
    if (!hasFilterActive) return movies;
    return movies.filter((movie) => {
      return movie.genre_ids.some((id) => selectedGenres.includes(String(id)));
    });
  };

  const filteredMovies = getFilteredMovies();

  return (
    <>
      <div
        className="bg-white-400 rounded-md bg-clip-padding 
      backdrop-filter backdrop-blur-sm bg-opacity-10 flex flex-wrap justify-center p-4 mt-10"
      >
        {!filteredMovies || filteredMovies.length === 0 ? (
          <MovieNotFound />
        ) : (
          filteredMovies.map((movie, index) => {
            return <CardMovies key={index} movie={movie} />;
          })
        )}
      </div>
    </>
  );
};

export default MovieList;
