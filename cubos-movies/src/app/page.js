'use client'
import Image from "next/image";
import background from "./../assets/public-background.png";
import SearchInput from "@/components/Input/input";
import FilterButton from "@/components/FilterButton/filterButton";
import MovieList from "@/components/Main/movies";
import { BASE_URL } from "@/urls/baseUrl";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const {data, isLoading, isError} = useQuery({
    queryKey: ['movies'],
    queryFn: async () => {
      const {data} = await axios.get(BASE_URL)
      console.log("777777777777777", data)
      return data.results
    }
  }) 

  fetch(BASE_URL, { cache: 'force-cache' });
  return (
    <>
      <div>
        <Image
          className="bg-no-repeat bg-cover bg-center h-screen w-screen relative top-0 left-0 object-cover"
          src={background}
          alt="Imagem de fundo"
        />
      </div>
      <div
        className="absolute top-0 left-0 h-screen w-screen"
        style={{
          background:
            "radial-gradient(circle, rgba(18,17,19,0.8016456582633054) 0%, rgba(0,0,0,0.70640756302521) 0%, rgba(18,17,19,0.695203081232493) 100%)",
        }}
      >
        <div className="flex justify-center">
          <SearchInput />
          <FilterButton />
        </div>
        <div className="flex justify-center">
          <MovieList data={data}/>
        </div>
      </div>
    </>
  );
}
