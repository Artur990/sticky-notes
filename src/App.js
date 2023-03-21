import React from "react";

import NavColor from "./components/navColor/NavColor";
import NavMenu from "./components/navMenu/NavMenu";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <NavColor />
      <NavMenu />
    </div>
  );
};

export default App;
