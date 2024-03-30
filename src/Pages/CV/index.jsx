import style from "./index.module.scss";

function CV() {
  return (
    <div className={style.cv}>
      <h2
        className={style.title}
        data-animation="fadeIn"
        data-animation-delay="60"
      >
        my CV
      </h2>

      <a
        href="assets/docs/alex_CV.pdf"
        target="_blank"
        className={style.button}
        data-animation="fadeIn"
        data-animation-delay="60"
        data-slide="subscribe"
      >
        PDF file
      </a>
    </div>
  );
}

export default CV;
