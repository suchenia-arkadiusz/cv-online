import './styles.scss'
import {useEffect, useState} from "react";
import firstExpPhoto from "../../assets/exp-photo-1.jpeg";
import secondExpPhoto from "../../assets/exp-photo-2.jpeg";
import firstEduPhoto from "../../assets/edu-photo-1.jpeg";
import secondEduPhoto from "../../assets/edu-photo-2.jpeg";

export const TimelineCard = ({data, index, isEducation = false}) => {
  const [cssStyle, setCssStyle] = useState("left")

  useEffect(() => {
    setCssStyle(index % 2 === 0 ? "left" : "right");
  }, [])

  return (
    <div className={`timeline-card-container ${cssStyle}`}>
      {cssStyle === "left" ? (<img src={isEducation ? firstEduPhoto : firstExpPhoto} alt={data.title} className="timeline-img"/>) : null}
      <div className={`timeline-card-content ${cssStyle}`}>
        <h1>{data.company}</h1>
        <h2>{data.position}</h2>
        <h3>{data.startedAt}{data.finishedAt && data.finishedAt.length > 0 ? ` - ${data.finishedAt}` : null}</h3>
        <p>{data.description}</p>
      </div>
      {cssStyle === "right" ? (<img src={isEducation ? secondEduPhoto : secondExpPhoto} alt={data.title} className="timeline-img"/>) : null}
    </div>
  )
}
