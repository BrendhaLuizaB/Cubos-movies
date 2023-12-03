"use client";
import SearchInput from "@/components/Input/input";
import FilterButton from "@/components/FilterButton/filterButton";
import MovieList from "@/components/Main/movies";
import Footer from "@/components/Footer/footer";
import Pagination from "@/components/Pagination/pagination";
import { useContext } from "react";
import { GlobalContext } from "./Context/movieContext";
import DetailsPage from "@/components/DetailsPage/details";
import Filters from "@/components/Filters/filterComponent";

export default function Home() {
  const { data, movieClicked, openFilters, isLoading } = useContext(GlobalContext);

  return (
    <>
      <div className="bg-[url('./../assets/public-background.png')] flex justify-center bg-no-repeat bg-cover bg-center object-cover h-full">
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(18,17,19,0.8016456582633054) 0%, rgba(0,0,0,0.4459033613445378) 0%, rgba(18,17,19,0.695203081232493) 100%)",
          }}
          className="w-full"
        >
          
          {movieClicked ? (
            <DetailsPage />
          ) : (
            <div>
              <div className="flex justify-center items-center mt-32 gap-2">
                <SearchInput />
                <FilterButton />
              </div>
              <div className="flex justify-center">
                {openFilters ? <Filters/> : ''}
              </div>
              <div className="flex justify-center ">
                <MovieList />
              </div>
              <Pagination />
            </div>
          )}

          <Footer />
        </div>
      </div>
    </>
  );
}
