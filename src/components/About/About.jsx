import "./styles.scss";
import {useContext} from "react";
import {LanguageContext} from "../../contexts/LanguageContext.jsx";
import picture from "../../assets/picture-2.png";

export const About = () => {
  const { data } = useContext(LanguageContext);

  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-left-column">
          <div className="about-picture-border"></div>
          <img src={picture} className="about-picture" alt="picture"/>
        </div>
        <div className="about-right-column">
          <h1>{data.aboutHeader}</h1>
          {data.about.map((text, index) => <p key={index}>{text}</p>)}
        </div>
      </div>
    </div>
  )
}
