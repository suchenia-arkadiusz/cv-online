import {useContext} from "react";
import {LanguageContext} from "../../contexts/LanguageContext.jsx";
import {TimelineCard} from "../TimelineCard/TimelineCard.jsx";

const Education = () => {
  const {data} = useContext(LanguageContext)

  return (
    <div id="education">
      <h1>{data.educationHeader}</h1>
      {data.educationTimeline.map(element => ({
        startedAt: element.startedAt,
        finishedAt: element.finishedAt,
        company: element.school,
        position: element.degree,
        description: element.faculty
      })).map((element, index) => <TimelineCard data={element} index={index} isEducation/>)}
    </div>
  )
}

export default Education;