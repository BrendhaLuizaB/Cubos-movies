"use client";
import { useGlobalContext } from "@/app/Context/movieContext";
import { ThemeContext } from "@/app/hooks/ThemeContext";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useContext } from "react";

const SearchInput = () => {
  const { inputValue, setInputValue } = useGlobalContext();
  const { theme } = useContext(ThemeContext);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    if (inputValue.includes(e.target.value)) {
      return setInputValue("");
    }
  };

  return (
    <>
      {theme === "dark" ? (
        <div className="relative">
          <input
            type="text"
            name="filter"
            id="filter"
            placeholder="Pesquise por filmes"
            className="text-purple-purple1 p-2 sm:w-48 lg:w-[25rem] md:w-[25rem] rounded-sm bg-mauveDark-mauve4 border-none focus:border-purpleDark-purple9"
            onChange={handleChange}
          />
          <div className="absolute right-4 top-3 md:hidden sm:hidden lg:visible">
            <MagnifyingGlassIcon className="text-purple-purple2 " />
          </div>
        </div>
      ) : (
        <div>
          <input
            type="text"
            name="filter"
            id="filter"
            placeholder="Pesquise por filmes"
            className="text-purpleDark-purple2 p-2 sm:w-48 lg:w-[25rem] md:w-[25rem] rounded-sm bg-purple-purple3 border-none focus:border-purpleDark-purple9"
            onChange={handleChange}
          />
        </div>
      )}
    </>
  );
};

export default SearchInput;
