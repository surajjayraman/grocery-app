import { useContext } from "react";
import { ThemeContext } from "../providers/providerPattern";

export default function ToggleTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <p className="highlighted">Provider Pattern</p>
      Current theme: {theme}
      <button
        style={{
          "background-color": theme,
          color: "white",
          padding: "10px",
          margin: "10px",
          "border-radius": "5px",
        }}
        onClick={toggleTheme}
      >
        Toggle Theme
      </button>
    </>
  );
}
