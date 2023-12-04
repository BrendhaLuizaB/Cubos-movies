import Image from "next/image";
import logo from "./../../assets/Cubos Logo.png";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { ThemeContext } from "@/app/hooks/ThemeContext";
import { useContext } from "react";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      {theme === "dark" ? (
        <div
          className="bg-mauveDark-mauve1 flex justify-between fixed top-0 z-10 right-0 left-0"
          style={{ borderBottom: "1px solid #f1e6fd5d" }}
        >
          <div className="flex items-center p-5">
            <div>
              <Image src={logo} alt="logo cubos" />
            </div>
            <h2 className="text-mauveDarkA-mauveA2 text-lg font-semibold ml-4">
              Movies
            </h2>
          </div>
          <div
            className="bg-purpleDark-purple3 m-5 p-4 rounded-sm cursor-pointer"
            onClick={handleTheme}
          >
            {theme === "dark" ? (
              <SunIcon className="text-mauveDarkA-mauveA2" />
            ) : (
              <MoonIcon className="text-mauveDarkA-mauveA2" />
            )}
          </div>
        </div>
      ) : (
        <div
          className="bg-purple-purple8 flex justify-between fixed top-0 z-10 right-0 left-0 cursor-pointer"
          style={{ borderBottom: "1px solid #f1e6fd5d" }}
        >
          <div className="flex items-center p-5">
            <div>
              <Image src={logo} alt="logo cubos" />
            </div>
            <h2 className="text-mauveDarkA-mauveA2 text-lg font-semibold ml-4">
              Movies
            </h2>
          </div>
          <div
            className="bg-purpleDark-purple3 m-5 p-4 rounded-sm"
            onClick={handleTheme}
          >
            {theme === "dark" ? (
              <SunIcon className="text-mauveDarkA-mauveA2" />
            ) : (
              <MoonIcon className="text-mauveDarkA-mauveA2" />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
