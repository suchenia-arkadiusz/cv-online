import './styles.scss'
import {useEffect, useState} from "react";

export const TimelineCard = ({data, index}) => {
  const [cssStyle, setCssStyle] = useState("left")

  useEffect(() => {
    setCssStyle(index % 2 === 0 ? "right" : "left");
  }, [])

  return (
    <div className={`timeline-card-container ${cssStyle}`}>
      <div className={`timeline-card-date ${cssStyle}`}>
        <h2>
          {data.startedAt} - {data.finishedAt}
        </h2>
      </div>
      <div className={`timeline-card-content ${cssStyle}`}>
        <h1>{data.company}</h1>
        <h2>{data.position}</h2>
        <p>{data.description}</p>
      </div>
      <div className="timeline-card-dot-container">
        <div className="timeline-card-gray-dot"></div>
      </div>
    </div>
  )
}
