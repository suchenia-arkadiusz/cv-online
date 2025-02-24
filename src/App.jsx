import './App.scss'

import {library} from '@fortawesome/fontawesome-svg-core';
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {HashRouter, Route, Routes} from "react-router-dom";
import CV from "./pages/CV/CV.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import {Header} from "./components/Header/Header.jsx";
import Project from "./pages/Projects/subpages/Project/Project.jsx";
import Footer from "./components/Footer/Footer.jsx";
import MainContainer from "./components/MainContainer/MainContainer.jsx";

library.add(faStar, faGithub, faLinkedin)

function App() {
  return (
    <HashRouter>
      <Header/>
      <MainContainer>
        <Routes>
          <Route path="/" element={<CV/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/projects/:id" element={<Project/>}/>
        </Routes>
      </MainContainer>
      <Footer/>
    </HashRouter>
  )
}

export default App
