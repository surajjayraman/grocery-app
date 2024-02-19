import { useContext } from "react";
import { ThemeContext } from "../providers/providerPattern";

export default function ToggleTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      Current theme: {theme}
      <button onClick={toggleTheme}>Toggle Theme</button>
    </>
  );
}
