import "./styles.scss";
import {useContext} from "react";
import {LanguageContext} from "../../../../contexts/LanguageContext.jsx";
import {useNavigate} from "react-router-dom";

const ProjectTile = ({id, image, title, shortDescription, isLeft = true}) => {
  const {data} = useContext(LanguageContext);
  const navigate = useNavigate();

  const renderImage = () => (<img src={image} alt={title} className="project-tile-img"/>)

  const goToProjectDetails = () => {
    navigate(`/projects/${id}`);
  }

  return (
    <div className="project-tile-container">
      {isLeft ? renderImage() : null}
      <div className={`project-tile-content ${isLeft ? "left" : "right"}`}>
        <h1>{title}</h1>
        <p>{shortDescription}</p>
        <button className="project-tile-btn" onClick={goToProjectDetails}>{data.goToProjectLabel}</button>
      </div>
      {!isLeft ? renderImage() : null}
    </div>
  )
}

export default ProjectTile