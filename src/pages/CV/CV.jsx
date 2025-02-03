import {About} from "../../components/About/About.jsx";
import PageContent from "../../components/PageContent/PageContent.jsx";
import Skills from "../../components/Skills/Skills.jsx";
import Experience from "../../components/Experience/Experience.jsx";
import Education from "../../components/Education/Education.jsx";

const CV = () => {
  return (
    <>
      <About/>
      <PageContent>
        <Skills/>
        <Experience/>
        <Education/>
      </PageContent>
    </>
  )
}

export default CV