import Image from "next/image";
import logo from "./../../assets/Cubos Logo.png";
import { SunIcon } from "@radix-ui/react-icons";

const Header = () => {
  return (
    <div className="bg-mauveDark-mauve1 border-b-purple-purple1 flex justify-between">
      <div className="flex items-center p-5">
        <div>
          <Image src={logo} alt="logo cubos" />
        </div>
          <h2 className="text-mauveDarkA-mauveA2 text-lg font-semibold ml-4">
            Movies
          </h2>
      </div>
      <div className="bg-purpleDark-purple3 m-5 p-4 rounded-sm">
        <SunIcon className="text-mauveDarkA-mauveA2" />
      </div>
    </div>
  );
};

export default Header;
