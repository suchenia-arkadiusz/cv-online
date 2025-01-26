import {useContext} from "react";
import {LanguageContext} from "../../contexts/LanguageContext.jsx";
import {TimelineCard} from "../TimelineCard/TimelineCard.jsx";

const Experience = () => {
  const {data} = useContext(LanguageContext)

  return (
    <div id="experience">
      <h1>{data.experienceHeader}</h1>
      {data.experienceTimeline.map((element, index) => <TimelineCard data={element} index={index} key={`${element.company}-${element.startedAt}-${element.finishedAt}`}/>)}
    </div>
  )
}

export default Experience;