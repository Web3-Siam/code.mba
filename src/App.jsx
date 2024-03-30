import { useState } from "react";
import style from "./App.module.scss";

import Main from "./Pages/Main";
import Hack from "./Pages/Hack";
import CV from "./Pages/CV";
import Consulting from "./Pages/Consulting";
import Donation from "./Pages/Donation";

import CanvasBg from "./Components/CanvasBg";
import Header from './Components/Header';
import Footer from "./Components/Footer";

function App() {
  const [page, setPage] = useState("main");

  const pages = {
    main: <Main />,
    hack: <Hack />,
    cv: <CV />,
    consulting: <Consulting />,
    dontation: <Donation />,
  };

  return (
    <div className={style.app}>
      <CanvasBg />

      <Header />

      <main className={style.main}>{pages[page]}</main>

      <Footer />
    </div>
  );
}

export default App;
