import { useContext } from "react";
import { ThemeContext } from "./ContextApi";

export const Navbar = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <nav className="p-4 bg-gray-800 text-white">
      <button onClick={toggleTheme} className="bg-blue-500 px-4 py-2 rounded">
        Toggle Theme
      </button>
    </nav>
  );
};
