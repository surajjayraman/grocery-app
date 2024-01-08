import React, { useContext } from "react";
import { ThemeContext } from "./themeManager";

export default function Toggle() {
    const theme = useContext(ThemeContext);

    return (
        <label className="switch">
            <input type="checkbox" onClick={theme.toggleTheme} />
            <span className="slider round" />
        </label>
    );
}
