import "./styles.scss";
import {TimelineCard} from "../TimelineCard/TimelineCard.jsx";
import {useContext} from "react";
import {LanguageContext} from "../../contexts/LanguageContext.jsx";

export const Timeline = () => {
  const { data } = useContext(LanguageContext);

  return (
    <div className="timeline-container">
      <div className="timeline-red-dot"></div>
      {data.timeline.map((element, index) => <TimelineCard data={element} index={index}/>)}
    </div>
  )
}
