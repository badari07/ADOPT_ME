import React, { useState } from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { Router } from "@reach/router";
import ThemeContext from "./ThemeContext";
import Details from "./Details";
import NavBar from "./NavBar";

const App = () => {
  const themeHook = useState("darkblue");
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <NavBar />
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};
render(<App />, document.getElementById("root"));
