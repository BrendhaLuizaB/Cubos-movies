"use client";
import { useGlobalContext } from "@/app/Context/movieContext";

const SearchInput = () => {
  const { inputValue, setInputValue } = useGlobalContext();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="text-purple-purple1 flex justify-center">
        <input
          type="text"
          name="filter"
          id="filter"
          placeholder="Pesquise por filmes"
          className="p-2 w-[28rem] rounded-sm bg-mauveDark-mauve4 border-none focus:border-purpleDark-purple9"
          onChange={handleChange}
        />
    </div>
  );
};

export default SearchInput;
