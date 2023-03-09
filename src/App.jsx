import './App.scss'
import TimelineCard from "./components/TimelineCard/TimelineCard";
import {useContext} from "react";
import {LanguageContext} from "./contexts/LanguageContext.jsx";
import {Header} from "./components/Header/Header.jsx";

function App() {
  const {data} = useContext(LanguageContext)

  return (
    <>
      <Header />
      <h1>
        {data.aboutHeader}
      </h1>
      <p>{data.about}</p>
      <h1>{data.experienceHeader}</h1>
      <div className="FlexContainer timeline">
      {data.timeline.sort((first, second) => first.year - second.year).map((element, index) => (
        <TimelineCard key={index} data={element}/>
      ))}
      </div>
    </>
  )
}

export default App
