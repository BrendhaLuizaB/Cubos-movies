import { GlobalContext } from "@/app/Context/movieContext";
import { ThemeContext } from "@/app/hooks/ThemeContext";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { setConfig } from "next/config";
import { useContext, useState } from "react";

const Pagination = () => {
  const { data, page, setPage } = useContext(GlobalContext);
  const {theme} = useContext(ThemeContext)

  const dynamicStyle = () => {
    return `${
      page === 1 ? "bg-purpleDark-purple2" : "bg-purple-purple11"
    } text-purple-purple2 flex items-center py-3 px-5 rounded-sm ${
      page === 1 ? "cursor-not-allowed" : "cursor-pointer"
    } font-medium border-none`;
  };

  return (
    <div className="flex justify-center gap-3 mb-10 items-center">
      <button disabled={page === 1} className={dynamicStyle()} onClick={() => setPage((old) => old - 1)}>
        <ChevronLeftIcon />
      </button>
      
      {theme === 'dark' ? <div className="text-purple-purple2 py-3 px-5 rounded-sm bg-purple-purple11 font-medium">
        {data?.page}
      </div> : <div className="text-purple-purple12 py-3 px-5 rounded-sm bg-purple-purple8 font-medium">
        {data?.page}
      </div>}
      <div
        className="bg-purple-purple11 text-purple-purple2 flex items-center py-3 px-5 rounded-sm cursor-pointer font-medium"
        onClick={() => setPage((old) => old + 1)}
      >
        <ChevronRightIcon />
      </div>
    </div>
  );
};

export default Pagination;
