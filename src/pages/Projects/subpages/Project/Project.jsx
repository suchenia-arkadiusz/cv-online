import "./styles.scss";
import {useParams} from "react-router-dom";
import {useContext} from "react";
import {LanguageContext} from "../../../../contexts/LanguageContext.jsx";
import PageContent from "../../../../components/PageContent/PageContent.jsx";

const Project = () => {
  const params = useParams();
  const {data} = useContext(LanguageContext);

  const project = data.projects.find(item => item.id === params.id);

  return (
    <div id="project-container">
      <PageContent>
        <h1>{project.title}</h1>
        <section dangerouslySetInnerHTML={{__html: project.description}}/>
      </PageContent>
    </div>
  )
}

export default Project;