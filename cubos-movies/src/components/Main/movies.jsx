import { useContext } from "react";
import CardMovies from "../cardMovies/card";
import { GlobalContext } from "@/app/Context/movieContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const MovieList = ({ data }) => {
  const apiKey = "5e106f5be41eaa634fae58a988921697";
  const {inputValue} = useContext(GlobalContext)
  
  const { data: searchResults, isLoading, isError } = useQuery({
    queryKey: [`search-${inputValue}`],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${inputValue}&page-1&include_adult=false`
      );
      return data.results;
    },
    enabled: !!inputValue,
  });

  return (
    <div
      className="bg-gray-400 rounded-md bg-clip-padding 
      backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 flex flex-wrap w-[88rem] justify-center p-8 mt-10"
    >
      {searchResults ? searchResults.map((movie, index) => 
         <CardMovies key={index} movie={movie}/>)
       : 
      data?.map((movie, index) => 
         <CardMovies key={index} movie={movie} />)
      }
    </div>
  );
};

export default MovieList;
