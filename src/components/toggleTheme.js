import { useContext } from "react";
import { ThemeContext } from "../providers/providerPattern";

export default function ToggleTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={() => toggleTheme(theme)}>
      Toggle Theme
    </button>
  );
}