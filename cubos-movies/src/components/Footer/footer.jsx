import { ThemeContext } from "@/app/hooks/ThemeContext";
import { useContext } from "react";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      {theme === "dark" ? (
        <div>
          <h1
            className="text-purple-purple2 flex justify-center py-5"
            style={{ borderTop: "1px solid #f1e6fd5d" }}
          >
            2023 © Todos os direitos reservados a Cubos Movies
          </h1>
        </div>
      ) : (
        <div className="bg-purple-purple8">
          <h1
            className="text-purple-purple2 flex justify-center py-5"
            style={{ borderTop: "1px solid #f1e6fd5d" }}
          >
            2023 © Todos os direitos reservados a Cubos Movies
          </h1>
        </div>
      )}
    </>
  );
};

export default Footer;
