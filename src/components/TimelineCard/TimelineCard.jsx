import './styles.scss'
import {useEffect, useState} from "react";
import firstExpPhoto from "../../assets/exp-photo-1.jpeg";
import secondExpPhoto from "../../assets/exp-photo-2.jpeg";
import firstEduPhoto from "../../assets/edu-photo-1.jpeg";
import secondEduPhoto from "../../assets/edu-photo-2.jpeg";

export const TimelineCard = ({data, index, isEducation = false}) => {
  const [image, setImage] = useState(firstExpPhoto);

  useEffect(() => {
    if (index % 2 === 0) {
      setImage(isEducation ? firstEduPhoto : firstExpPhoto);
    } else {
      setImage(isEducation ? secondEduPhoto : secondExpPhoto);
    }
  }, []);

  return (
    <div className={`timeline-card-container`}>
      <img src={image} alt={data.title} className="timeline-img"/>
      <div className={`timeline-card-content`}>
        <h1>{data.company}</h1>
        <h2>{data.position}</h2>
        <h3>{data.startedAt}{data.finishedAt && data.finishedAt.length > 0 ? ` - ${data.finishedAt}` : null}</h3>
        <p>{data.description}</p>
      </div>
    </div>
  )
}
