'use client'

import { BASE_URL } from "@/urls/baseUrl";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({children}) => {
  const apiKey = "5e106f5be41eaa634fae58a988921697";
    const [inputValue, setInputValue] = useState('')
    const [isHovering, setIsHovering] = useState(-1)
    const [detailsId, setDetailsId] = useState(-1)
    const [dataMovie, setDataMovie] = useState({})
    const [page, setPage] = useState(1)

    
    const {data, isLoading, isError} = useQuery({
        queryKey: ['movies', page],
        queryFn: async () => {
          const {data} = await axios.get(`${BASE_URL}&page=${page}`)
          setDataMovie(data)
          return data
        }
      })

      const { data: searchResults} = useQuery({
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
        <GlobalContext.Provider value={{searchResults, page, setPage, data, inputValue, setInputValue, isHovering, setIsHovering, detailsId, setDetailsId}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext)
 
