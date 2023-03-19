import "./styles.scss";

import {useContext} from "react";
import {LanguageContext} from "../../contexts/LanguageContext.jsx";
import usaFlag from "../../assets/flags/usa.png";
import plFlag from "../../assets/flags/pl.png";

export const MenuBar = () => {
  const {data, setLanguage} = useContext(LanguageContext);

  return (
    <div className="menu-bar-container">
      {data.header.map(name => <span className="menu-bar-item">{name}</span>)}
      <button className="language-button" onClick={() => setLanguage("en-en")} ><img className="menu-bar-language-icon" src={usaFlag} alt="polish-flag"/></button>
      <button className="language-button" onClick={() => setLanguage("pl-pl")} ><img className="menu-bar-language-icon" src={plFlag} alt="usa-flag"/></button>
    </div>
  )
}
