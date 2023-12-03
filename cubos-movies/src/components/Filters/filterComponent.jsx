import { GlobalContext } from "@/app/Context/movieContext";
import { useContext, useState } from "react";

const Filters = () => {
  const { filter, selectedItems, setSelectedItems } = useContext(GlobalContext);

  // const getGenreId = () => {
  //     setGenreId(filter.genre.id)
  // }
  console.log("GENRES NA TELA DE FILTRO", filter);

  return (
    <>
      <div className="flex justify-center flex-wrap gap-4 mt-5 w-[40rem]">
        {filter.genres.map((genre, index) => {
          return (
            <div className="bg-purple-purple11 p-2 rounded-sm" key={index}> 
              <input
                type="checkbox"
                id="genre"
                name={genre.name}
                value={genre.id}
              />
              <label className="text-purple-purple2">{genre.name}</label>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Filters;
