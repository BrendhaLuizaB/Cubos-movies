import { GlobalContext } from "@/app/Context/movieContext";
import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import { useContext } from "react";


const FilterButton = () => {
    const {openFilters, setOpenFilters} = useContext(GlobalContext)

    const handleFilter = () => {
        setOpenFilters(true)
        openFilters ? setOpenFilters(false) : setOpenFilters(true)
    }
    return ( 
        <div onClick={() => handleFilter()} className="bg-purpleA-purpleA5 bg-opacity-25 flex items-center px-5 py-4 rounded-sm cursor-pointer">
            <MixerHorizontalIcon className="text-purpleDarkA-purpleA12 "/>
        </div>
     );
}
 
export default FilterButton;