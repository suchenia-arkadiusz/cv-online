import "./styles.scss";

import {useContext} from "react";
import {LanguageContext} from "../../contexts/LanguageContext.jsx";
import usaFlag from "../../assets/flags/usa.png";
import plFlag from "../../assets/flags/pl.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useNavigate} from "react-router-dom";

export const MenuBar = () => {
  const {data, setLanguage} = useContext(LanguageContext);
  const navigate = useNavigate();

  const goToPage = (page) => {
    navigate(page)
  }

  return (
    <div className="menu-bar-container">
      {data.header.map(item => <button className="menu-bar-item" key={item.name} onClick={() => goToPage(item.url)}>{item.name}</button>)}
      <FontAwesomeIcon
        icon={["fab", "github"]}
        onClick={() => window.open("https://github.com/suchenia-arkadiusz")}
        className="menu-bar-social"
      />
      <FontAwesomeIcon
        icon={["fab", "linkedin"]}
        onClick={() => window.open("https://www.linkedin.com/in/arkadiusz-suchenia/")}
        className="menu-bar-social"
      />
      <button className="language-button" onClick={() => setLanguage("en-en")} ><img className="menu-bar-language-icon" src={usaFlag} alt="polish-flag"/></button>
      <button className="language-button" onClick={() => setLanguage("pl-pl")} ><img className="menu-bar-language-icon" src={plFlag} alt="usa-flag"/></button>
    </div>
  )
}
