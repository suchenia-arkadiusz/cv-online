import './App.scss'
import {Header} from "./components/Header/Header.jsx";
import {About} from "./components/About/About.jsx";
import Experience from "./components/Experience/Experience.jsx";
import PageContent from "./components/PageContent/PageContent.jsx";
import Education from "./components/Education/Education.jsx";
import Skills from "./components/Skills/Skills.jsx";

import {library} from '@fortawesome/fontawesome-svg-core';
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

library.add(faStar, faGithub, faLinkedin)

function App() {
  return (
    <>
      <Header/>
      <About/>
      <PageContent>
        <Skills/>
        <Experience/>
        <Education/>
      </PageContent>
    </>
  )
}

export default App
