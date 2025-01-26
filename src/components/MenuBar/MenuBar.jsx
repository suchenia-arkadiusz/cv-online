import "./styles.scss";

import {useContext} from "react";
import {LanguageContext} from "../../contexts/LanguageContext.jsx";
import usaFlag from "../../assets/flags/usa.png";
import plFlag from "../../assets/flags/pl.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const MenuBar = () => {
  const {data, setLanguage} = useContext(LanguageContext);

  return (
    <div className="menu-bar-container">
      {data.header.map(name => <span className="menu-bar-item" key={name}>{name}</span>)}
      <FontAwesomeIcon
        icon={["fab", "github"]}
        onClick={() => window.open("https://github.com/suchenia-arkadiusz")}
        style={{cursor: "pointer"}}
      />
      <FontAwesomeIcon
        icon={["fab", "linkedin"]}
        onClick={() => window.open("https://www.linkedin.com/in/arkadiusz-suchenia/")}
        style={{cursor: "pointer"}}
      />
      <button className="language-button" onClick={() => setLanguage("en-en")} ><img className="menu-bar-language-icon" src={usaFlag} alt="polish-flag"/></button>
      <button className="language-button" onClick={() => setLanguage("pl-pl")} ><img className="menu-bar-language-icon" src={plFlag} alt="usa-flag"/></button>
    </div>
  )
}
