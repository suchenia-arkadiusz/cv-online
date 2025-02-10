import "./styles.scss";

import {useContext} from "react";
import {LanguageContext} from "../../contexts/LanguageContext.jsx";
import usaFlag from "../../assets/flags/usa.png";
import plFlag from "../../assets/flags/pl.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useNavigate} from "react-router-dom";

export const MenuBar = () => {
  const {data, setLanguage, isEnglish, setIsEnglish} = useContext(LanguageContext);
  const navigate = useNavigate();

  const goToPage = (page) => {
    navigate(page)
  }

  const changeLanguage = () => {
    console.log(isEnglish)
    setLanguage(isEnglish ? "pl-pl" : "en-us")
    setIsEnglish(!isEnglish)
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
      <button className="language-button" onClick={changeLanguage} ><img className="menu-bar-language-icon" src={isEnglish ? usaFlag : plFlag} alt="polish-flag"/></button>
    </div>
  )
}
