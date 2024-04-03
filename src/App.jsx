import { useState } from "react";

import ReactGA from "react-ga4";

import style from "./App.module.scss";

import Main from "./Pages/Main";
import Hack from "./Pages/Hack";
import CV from "./Pages/CV";
import Consulting from "./Pages/Consulting";
import Donation from "./Pages/Donation";

import CanvasBg from "./Components/CanvasBg";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const TRACKING_ID = "G-TNSJVPM6DW";
ReactGA.initialize(TRACKING_ID);

function App() {
  const [page, setPage] = useState("main");
  const [menuOpen, setMenuOpen] = useState(false);

  const pages = {
    main: <Main />,
    hack: <Hack />,
    cv: <CV />,
    consulting: <Consulting />,
    donation: <Donation />,
  };

  const handleChange = (newPage) => {
    setPage(newPage);

    ReactGA.event({
      category: "menu",
      action: "click",
      label: newPage
    });
  };

  const handleMenu = (boolean) => {
    setMenuOpen(boolean);
  };

  return (
    <div className={`${style.app} ${style[page]}`}>
      <CanvasBg page={page} />

      <Header
        isMenuOpen={menuOpen}
        handleMenu={handleMenu}
        page={page}
        handleClick={handleChange}
      />

      <main className={`${style.mainSection} ${menuOpen ? style.hidden : ""}`}>
        {pages[page]}
      </main>

      <Footer page={page} isMenuOpen={menuOpen} />
    </div>
  );
}

export default App;
