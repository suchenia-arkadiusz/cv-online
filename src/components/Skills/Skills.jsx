import {useContext} from "react";
import {LanguageContext} from "../../contexts/LanguageContext.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./styles.scss";
import Tooltip from "../Tooltip/Tooltip.jsx";

const Skills = () => {
  const {data} = useContext(LanguageContext)

  const renderSkill = (skill) => (
    <div className="skill" key={skill.name}>
      <h3>{skill.name}</h3>
      <Tooltip tooltipText={skill.level}>
        {renderRating(skill.level)}
      </Tooltip>
    </div>
  )

  const renderRating = (level) => {
    return (
      <div className="rating">
        <div className="rating-red-star" style={{ width: `${level*20}%`}}>
          {[...Array(5)].map((_, index) => (<FontAwesomeIcon icon="star" key={`star-red-${index}`} size="lg"/>))}
        </div>
        <div className="rating-gray-star">
          {[...Array(5)].map((_, index) => (<FontAwesomeIcon icon="star" key={`star-gray-${index}`} size="lg"/>))}
        </div>
      </div>
    )
  }

  return (
    <div id="skills">
      <h1>{data.skillsHeader}</h1>
      <div id="skills-content">
        {data.skills.map(renderSkill)}
      </div>
    </div>
  )
}

export default Skills