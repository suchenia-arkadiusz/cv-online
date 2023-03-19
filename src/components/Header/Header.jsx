import "./styles.scss";
import {MenuBar} from "../MenuBar/MenuBar.jsx";
import picture from "../../assets/picture.png";
import {useContext} from "react";
import {LanguageContext} from "../../contexts/LanguageContext.jsx";

export const Header = () => {
  const { data } = useContext(LanguageContext);

  return (
    <div className="header-container">
      <MenuBar />
      <img src={picture} className="header-picture" alt="picture"/>
      <div className="header-greetings">
        <p className="header-paragraph">{data.greetings[0]}</p>
        <h1>{data.greetings[1]}</h1>
        <p className="header-paragraph-position">{data.greetings[2]}</p>
      </div>
    </div>
  )
}
