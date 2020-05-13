import React from "react";
import "./App.css";
import About from "./Components/About";
import TechStack from "./Components/TechStack";
import Proficiency from "./Components/Proficiency";

function App() {
  return (
    <React.Fragment>
      <About />
      <TechStack />
      <Proficiency />
    </React.Fragment>
  );
}

export default App;
