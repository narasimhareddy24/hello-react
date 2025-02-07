import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemedButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Toggle Theme (Current: {theme})
    </button>
  );
};

export default ThemedButton;
