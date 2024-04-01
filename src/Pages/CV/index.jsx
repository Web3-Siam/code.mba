import style from "./index.module.scss";

function CV() {
  return (
    <div className={style.cv}>
      <h2 className={style.title}>Executive, CTO</h2>

      <a
        href="assets/docs/alex_CV.pdf"
        target="_blank"
        className={style.button}
      >
        <i className="fa fa-file-o"></i>&nbsp;
        CV PDF file
      </a>
    </div>
  );
}

export default CV;
