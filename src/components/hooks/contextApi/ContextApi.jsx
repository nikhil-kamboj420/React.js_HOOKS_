import { createContext, useContext, useState } from "react";
// create Context
export const ThemeContext = createContext();

// create Provider component
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((preTheme) => (preTheme === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// custom hook to get the theme

export const useTheme = () => {
    const context = useContext(ThemeContext);
    return context;
}