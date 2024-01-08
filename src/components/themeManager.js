import { useState } from "react";
import "./themes.css"

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

export default function ThemeManager() {

    return (
        <>
            <p className="highlighted">Provider Pattern - switch between lightmode and darkmode</p>
            <div>


            </div>
        </>

    )

}