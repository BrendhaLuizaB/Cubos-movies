"use client";
import { useGlobalContext } from "@/app/Context/movieContext";

const SearchInput = () => {
  const { inputValue, setInputValue } = useGlobalContext();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="">
        <input
          type="text"
          name="filter"
          id="filter"
          placeholder="Pesquise por filmes"
          className="text-purple-purple1 p-2 sm:w-48 lg:w-[25rem] md:w-[25rem] rounded-sm bg-mauveDark-mauve4 border-none focus:border-purpleDark-purple9"
          onChange={handleChange}
        />
     </div>
  );
};

export default SearchInput;
