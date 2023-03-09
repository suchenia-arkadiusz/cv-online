import './styles.scss'

function TimelineCard({data}) {
  return (
    <div className="timeline-card-container">
      <div className="timeline-card-date">
        <h2>
          {data.year}
        </h2>
      </div>
      <div className="timeline-card-content">
        <h3>{data.company}</h3>
        <p>{data.position}</p>
        <p>{data.description}</p>
      </div>
    </div>
  )
}

export default TimelineCard
