import "./styles.scss"
import PageContent from "../../components/PageContent/PageContent.jsx";
import {Fragment, useContext} from "react";
import {LanguageContext} from "../../contexts/LanguageContext.jsx";
import ProjectTile from "./components/ProjectTile/ProjectTile.jsx";

const Projects = () => {
  const {data} = useContext(LanguageContext)

  return (
    <>
      <div id="projects-container">
        <PageContent>
          <h1>Projects</h1>
          {data.projects.map((project, index) => (
            <ProjectTile
              key={project.id}
              id={project.id}
              image={project.icon}
              title={project.title}
              shortDescription={project.shortDescription}
              isLeft={index % 2 === 0}
            />
          ))}
        </PageContent>
      </div>
    </>
  )
}

export default Projects