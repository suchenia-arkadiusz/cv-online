import './App.css'
import {data} from "./data/pl-pl.js";

function App() {
  return (
    <>
      <h1>O mnie</h1>
      <p>{data.about}</p>
        <h1>Doświadczenie zawodowe</h1>
        {data.timeline.map(element => (
            <>
                <h2>{element.startedAt} - {element.finishedAt}</h2>
                <h3>{element.company}</h3>
                <p>{element.position}</p>
                <p>{element.description}</p>
            </>
        ))}
    </>
  )
}

export default App
