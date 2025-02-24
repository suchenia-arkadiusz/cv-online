import "./styles.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer>
      <div>
        <FontAwesomeIcon
          icon={["fab", "github"]}
          onClick={() => window.open("https://github.com/suchenia-arkadiusz")}
          className="footer-social"
        />
        <FontAwesomeIcon
          icon={["fab", "linkedin"]}
          onClick={() => window.open("https://www.linkedin.com/in/arkadiusz-suchenia/")}
          className="footer-social"
        />
      </div>
      <span>
        Copyright &copy; {new Date().getFullYear()} All Rights Reserved.
      </span>
    </footer>
  )
}

export default Footer;