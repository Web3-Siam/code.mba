import style from "./index.module.scss";

function CV() {
  return (
    <div className={style.cv}>
      <h2
        className={style.title}
      >
        my CV
      </h2>

      <a
        href="assets/docs/alex_CV.pdf"
        target="_blank"
        className={style.button}
      >
        PDF file
      </a>
    </div>
  );
}

export default CV;
