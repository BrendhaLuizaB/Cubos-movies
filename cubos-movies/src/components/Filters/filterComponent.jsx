import { GlobalContext } from "@/app/Context/movieContext";
import { useContext } from "react";

const Filters = () => {
  const { filter, selectedGenres, setSelectedGenres } =
    useContext(GlobalContext);

  const handleChangeFilter = (e) => {
    if (selectedGenres.includes(e.target.value)) {
      const newArray = selectedGenres.filter((id) => id !== e.target.value);
      return setSelectedGenres(newArray);
    }
    setSelectedGenres([...selectedGenres, e.target.value]);
  };

  return (
    <>
      <div className="flex justify-center flex-wrap gap-4 mt-5 w-[40rem]">
        {filter.genres.map((genre, index) => {
          return (
            <div
              className="bg-purple-purple11 p-2 rounded-sm cursor-pointer"
              key={index}
            >
              <input
                type="checkbox"
                id="genre"
                name={genre.name}
                value={genre.id}
                onChange={handleChangeFilter}
                className="cursor-pointer"
              />
              <label className="text-purple-purple2 cursor-pointer ml-2">
                {genre.name}
              </label>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Filters;
