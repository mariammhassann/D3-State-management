import { useTheme } from "../context/ThemeContext.jsx";

function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button className="toggle-btn" onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}

export default ThemeToggleButton;
