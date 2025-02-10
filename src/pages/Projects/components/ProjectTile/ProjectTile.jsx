import "./styles.scss";
import {useNavigate} from "react-router-dom";

const ProjectTile = ({id, image, title, shortDescription}) => {
  const navigate = useNavigate();

  const goToProjectDetails = () => {
    navigate(`/projects/${id}`);
  }

  return (
    <div className="project-tile-container" onClick={goToProjectDetails}>
      <img src={image} alt={title} className="project-tile-img"/>
      <div className="project-tile-content">
        <h1>{title}</h1>
        <p>{shortDescription}</p>
      </div>
    </div>
  )
}

export default ProjectTile