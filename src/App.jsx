import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [timeoutId, setTimeOutId] = useState();

  const search = () => {
    console.log("search");
  };
  const debouncedSearch = (fn, delay) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const timeout = setTimeout(() => {
      fn();
    }, delay);
    setTimeOutId(timeout);
  };
  return (
    <>
      <button onClick={() => debouncedSearch(search, 2000)}>Test</button>
    </>
  );
}

export default App;
