import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import About from "./Components/About";
import TechStack from "./Components/TechStack";
import Proficiency from "./Components/Proficiency";
import Projects from "./Components/Projects";
import { cardData } from "./Data/CardData";
import GithubStat from "./Components/GithubStat";
import ReactGA from 'react-ga';

ReactGA.initialize('UA-174139859-2');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <React.Fragment>
      <About />
      <TechStack />
      <Proficiency />
      <Projects {...cardData} />
      <GithubStat />
    </React.Fragment>
  );
}

export default App;
