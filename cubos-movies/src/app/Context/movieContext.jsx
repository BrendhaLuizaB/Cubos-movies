"use client";

import {
  BASE_URL,
  DETAILS_URL,
  MOVIE_GENRES,
  MOVIE_TRAILER,
} from "@/urls/baseUrl";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("");
  const [isHovering, setIsHovering] = useState(-1);
  const [detailsId, setDetailsId] = useState("");
  const [page, setPage] = useState(1);
  const [movieClicked, setMovieClicked] = useState(false);
  const [openFilters, setOpenFilters] = useState(false);
  const [selectedGenres, setSelectedGenres] = useState([]);

  const { data, isLoading: dataLoading } = useQuery({
    queryKey: ["movies", page],
    queryFn: async () => {
      const { data } = await axios.get(`${BASE_URL}&page=${page}`);
      return data;
    },
    staleTime: 1000 * 60,
  });

  const newUrl = DETAILS_URL.replace("id", detailsId);
  const { data: details } = useQuery({
    queryKey: ["details", detailsId],
    queryFn: async () => {
      const { data } = await axios.get(newUrl);
      return data;
    },
  });

  const newVideoUrl = MOVIE_TRAILER.replace("id", detailsId);
  const { data: video } = useQuery({
    queryKey: ["video", detailsId],
    queryFn: async () => {
      const { data } = await axios.get(newVideoUrl);
      return data;
    },
  });

  const { data: filter } = useQuery({
    queryKey: ["filter"],
    queryFn: async () => {
      const { data } = await axios.get(MOVIE_GENRES);
      return data;
    },
  });

  const { data: searchResults } = useQuery({
    queryKey: [`search-${inputValue}`],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&query=${inputValue}&page-1&include_adult=false`
      );
      return data.results;
    },
    enabled: !!inputValue,
  });

  return (
    <GlobalContext.Provider
      value={{
        searchResults,
        page,
        setPage,
        data,
        details,
        inputValue,
        setInputValue,
        isHovering,
        setIsHovering,
        movieClicked,
        setMovieClicked,
        detailsId,
        setDetailsId,
        video,
        openFilters,
        setOpenFilters,
        filter,
        selectedGenres,
        setSelectedGenres,
        dataLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
