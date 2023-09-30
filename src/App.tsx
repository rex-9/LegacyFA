import Home from "./pages/Home";
import Panel from "./components/Panel";
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext("");

function App() {
  const [theme, setTheme] = useState("light");

  // if local storage is empty save theme as light
  useEffect(() => {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", "light");
    }
  }, []);

  useEffect(() => {
    const html = document.querySelector("html");
    //set dark or light theme
    if (localStorage.getItem("theme") === "dark") {
      html?.classList.add("dark");
      setTheme("dark");
    } else {
      html?.classList.remove("dark");
      setTheme("light");
    }
  }, [theme]);

  const ThemeProvider = ({ children }: { children: JSX.Element }) => {
    return (
      <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    );
  };

  return (
    <>
      <ThemeProvider>
        <section className="flex justify-center h-screen overflow-y-hidden overflow-x-hidden font-mooli">
          <Panel theme={theme} setTheme={setTheme} />
          <Home />
        </section>
      </ThemeProvider>
    </>
  );
}

export default App;
