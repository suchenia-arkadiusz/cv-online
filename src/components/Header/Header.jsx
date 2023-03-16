import "./styles.scss";
import usaFlag from "../../assets/flags/usa.png";
import plFlag from "../../assets/flags/pl.png";
import {useContext} from "react";
import {LanguageContext} from "../../contexts/LanguageContext.jsx";

export const Header = () => {
  const {data, setLanguage} = useContext(LanguageContext);

  return (
    <div className="header-container">
      {data.header.map(name => <span className="header-menu-item">{name}</span>)}
      <button className="language-button" onClick={() => setLanguage("en-en")} ><img className="header-language-icon" src={usaFlag} alt="polish-flag"/></button>
      <button className="language-button" onClick={() => setLanguage("pl-pl")} ><img className="header-language-icon" src={plFlag} alt="usa-flag"/></button>
    </div>
  )
}
