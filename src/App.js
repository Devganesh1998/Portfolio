import React from "react";
import "./App.css";
import About from "./Components/About";
import TechStack from "./Components/TechStack";
import Proficiency from "./Components/Proficiency";
import Projects from "./Components/Projects";
import { cardData } from "./Data/CardData";
import Statistics from "./Components/Statistics";
import GithubStat from "./Components/GithubStat";

function App() {
  return (
    <React.Fragment>
      <About />
      <TechStack />
      <Proficiency />
      <Projects {...cardData} />
      <Statistics />
      <GithubStat />
    </React.Fragment>
  );
}

export default App;
