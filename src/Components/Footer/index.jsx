import ReactGA from "react-ga4";

import style from "./index.module.scss";

function Footer({ isMenuOpen, page }) {
  const handleClick = (label) => {
    ReactGA.event({
      category: "external link",
      action: "click",
      label
    });
  };

  return (
    <footer className={`${style.footer} ${style[page]} ${isMenuOpen ? style.hide : ''}`}>
      <div className={style.copyright}>
        <p>© 2024 code.mba - Alex&nbsp;from&nbsp;Bangkok</p>
      </div>
      <nav className={style.socials}>
        <ul>
          <li>
            <a
              href="https://twitter.com/AlexBlockDev"
              target="_blank"
              rel="nofollow noopener"
              onClick={() => handleClick('Twitter')}
            >
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/alexeevxpert/"
              target="_blank"
              rel="nofollow noopener"
              onClick={() => handleClick('LinkedIn')}
            >
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/alexeev-dev"
              target="_blank"
              rel="nofollow noopener"
              onClick={() => handleClick('GitHub')}
            >
              <i className="fa fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/alexeevxpert/"
              target="_blank"
              rel="nofollow noopener"
              onClick={() => handleClick('Instagram')}
            >
              <i className="fa fa-instagram"></i>
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
