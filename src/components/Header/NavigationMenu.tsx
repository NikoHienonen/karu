import { useState } from "react";
import { NavigationLinks } from "./NavigationLinks";
import { BsList, BsXLg } from "react-icons/bs";

interface Props {
  isMobile: boolean;
}

export const NavigationMenu = ({ isMobile }: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div
      onClick={toggleMenu}
      className="text-white hover:text-yellow-300 transition-colors"
    >
      <button className="flex gap-2 items-center" onClick={toggleMenu}>
        {!isMobile && (
          <span className="font-thin text-2xl uppercase tracking-wider">
            Menu
          </span>
        )}
        <BsList className="text-3xl" />
      </button>
      {menuOpen && (
        <nav className="absolute left-0 top-0 xl:-translate-x-1/5 flex flex-col justify-center items-center w-screen h-screen backdrop-blur-xl animate-fadeIn">
          <BsXLg className="absolute text-white hover:text-yellow-400 text-4xl top-10 right-8 cursor-pointer animate-fadeIn" />
          <NavigationLinks />
        </nav>
      )}
    </div>
  );
};
