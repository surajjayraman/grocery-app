import React, { useState, useContext } from "react";
import "../themes.css"
import Boxes from "./themeList";
import Toggle from "./themeToggle";

export const themes = {
    light: {
        background: "#fff",
        color: "#000"
    },
    dark: {
        background: "#171717",
        color: "#fff"
    }
};

export const ThemeContext = React.createContext()

// refactor
function useThemeContext() {
    const theme = useContext(ThemeContext);
    if (!theme) {
        throw new Error("useThemeContext must be used within ThemeProvider");
    }
    return theme;
}

export default function ThemeManager() {
    const [theme, setTheme] = useState('dark')

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : '')
    }

    return (
        <>
            <p className="highlighted">Provider Pattern - switch between lightmode and darkmode</p>
            <div className={`App theme-${theme}`}>
                <ThemeContext.Provider value={{ theme: themes[theme], toggleTheme }}>
                    <>
                        <Toggle />
                        <Boxes />
                    </>
                </ThemeContext.Provider>
            </div>
        </>

    )

}