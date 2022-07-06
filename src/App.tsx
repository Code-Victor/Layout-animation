import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Cards from "./components/Cards";
import Box from "./components/Box";

function App() {
  const [placeholder, setPlaceholder] = useState(false);

  return (
    <Box
      css={{
        minHeight: "100vh",
        minWidth: "100vw",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Cards placeholder={placeholder} />
      <Box>
        <label htmlFor="placeholder"><h4 style={{display:'inline'}}>with Placeholder?</h4></label>
        <input type="checkbox" name="placeholder" id="placeholder" checked={placeholder} onChange={(e)=>setPlaceholder(!placeholder)}/></Box>
    </Box>
  );
}

export default App;
