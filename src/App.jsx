import { ThemeProvider } from "./context/ThemeContext";
import ThemedButton from "./components/ThemedButton";

const App = () => (
  <ThemeProvider>
    <ThemedButton />
  </ThemeProvider>
);

export default App;
