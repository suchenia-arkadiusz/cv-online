import "./styles.scss";

const Tooltip = ({tooltipText, children}) => {
  return (
    <div className="tooltip">
      {children}
      <span className="tooltip-text">{tooltipText}</span>
    </div>
  )
}

export default Tooltip;