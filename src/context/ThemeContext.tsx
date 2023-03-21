import { createContext } from "react";
import { useState  } from "react";

const ThemeContext = createContext({});


export function ThemeProvider({childern}){
  const [theme, setTheme] = useState("light");
  return (<ThemeContext.Provider value={{ theme, setTheme }}>{childern}</ThemeContext.Provider>)
}

export default ThemeContext;
