import { useEffect, useState } from "react";

import style from "./index.module.scss";

function Header({page, handleClick}) {
  const [randomIcon, setRandomIcon] = useState("fa-eye");
  const randomIcons = ["fa-eye", "fa-times", "fa-clock-o"],
    maxRandomIcons = randomIcons.length;

  useEffect(() => {
    setRandomIcon(randomIcons[Math.floor(maxRandomIcons * Math.random())]);
  }, []);

  return (
    <header className={`${style.header} ${style[page]}`}>
      <div
        className={style.logo}
      >
        <h1>
          <i class="fa fa-code"></i>&nbsp;
          <span>
            code <i className={`fa ${randomIcon}`}></i> mba
          </span>
        </h1>
      </div>

      <button
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav
        className={style.navigation}
      >
        <ul>
          <li className={style.main}>
            <a onClick={() => handleClick('main')}>
              main
            </a>
          </li>
          <li className={style.hack}>
            <a onClick={() => handleClick('hack')}>
              hack
            </a>
          </li>
          <li className={style.cv}>
            <a onClick={() => handleClick('cv')}>
              CV
            </a>
          </li>
          <li className={style.consulting}>
            <a onClick={() => handleClick('consulting')}>
              consulting
            </a>
          </li>
          <li className={style.donation}>
            <a onClick={() => handleClick('donation')}>
              donation
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
