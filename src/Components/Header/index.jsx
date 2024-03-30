import { useEffect, useState } from "react";

import style from "./index.module.scss";

function Header() {
  const [randomIcon, setRandomIcon] = useState("fa-eye");
  const randomIcons = ["fa-eye", "fa-times", "fa-clock-o"],
    maxRandomIcons = randomIcons.length;

  useEffect(() => {
    setRandomIcon(randomIcons[Math.floor(maxRandomIcons * Math.random())]);
  }, []);

  return (
    <header className={style.header}>
      <div
        id="awd-site-logo"
        className={style.logo}
        data-animation="fadeInDown"
        data-animation-delay="500"
      >
        <h1>
          <i class="fa fa-code"></i>&nbsp;
          <span>
            code <i className={`fa ${randomIcon}`}></i> mba
          </span>
        </h1>
      </div>

      <button
        class="menu-toggle animated"
        data-animation="fadeInDown"
        data-animation-delay="500"
        data-role="toggle"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav
        id="awd-site-nav"
        className={style.navigation}
        data-animation="fadeInDown"
        data-animation-delay="500"
      >
        <ul>
          <li>
            <a href="#" data-slide="home" class="active">
              main
            </a>
          </li>
          <li>
            <a href="#" data-slide="subscribe">
              hack
            </a>
          </li>
          <li>
            <a href="#" data-slide="about">
              CV
            </a>
          </li>
          <li>
            <a href="#" data-slide="services">
              consulting
            </a>
          </li>
          <li>
            <a href="#" data-slide="contact">
              donation
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
