'use client'
import Image from "next/image";
import background from "./../assets/public-background.png";
import SearchInput from "@/components/Input/input";
import FilterButton from "@/components/FilterButton/filterButton";
import MovieList from "@/components/Main/movies";
import { BASE_URL } from "@/urls/baseUrl";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Footer from "@/components/Footer/footer";
import Pagination from "@/components/Pagination/pagination";
import { useContext, useState } from "react";
import { GlobalContext } from "./Context/movieContext";

export default function Home() {
  const {data} = useContext(GlobalContext)

  return (
    <>
      <div className="bg-[url('./../assets/public-background.png')] flex justify-center bg-no-repeat bg-cover bg-center object-cover">
      <div
        style={{
          background:
          "linear-gradient(180deg, rgba(18,17,19,0.8016456582633054) 0%, rgba(0,0,0,0.4459033613445378) 0%, rgba(18,17,19,0.695203081232493) 100%)",
        }}
        className="w-full"
        >
        <div className="flex justify-center items-center mt-32">
          <SearchInput />
          <FilterButton />
        </div>
        <div className="flex justify-center ">
          <MovieList/>
        </div>
        <Pagination data={data}/>
        <Footer/>
      </div>
        </div>
    </>
  );
}
