import ReactGA from "react-ga4";

import style from "./index.module.scss";

function CV() {
  const handleClick = (label) => {
    ReactGA.event({
      category: "download",
      action: "click",
      label
    });
  };

  return (
    <div className={style.cv}>
      <h2 className={style.title}>Executive, CTO</h2>

      <a
        href="assets/docs/alex_CV.pdf"
        target="_blank"
        className={style.button}
        onClick={() => handleClick('CV PDF File')}
      >
        <i className="fa fa-file-o"></i>&nbsp;
        CV PDF file
      </a>
    </div>
  );
}

export default CV;
