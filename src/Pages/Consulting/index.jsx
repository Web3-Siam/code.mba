import style from "./index.module.scss";

function Consulting() {
  return (
    <div className={style.consulting}>
      <h2 className={style.title} data-animation="fadeIn">
        Consulting
      </h2>

      <p
        className={style.text}
        data-animation="fadeIn"
        data-animation-delay="100"
      >
        I offer Consultations Starting at 5000 Thai Baht or $150,<br/> leveraging my
        expertise as a top-notch Executive in Web3.
      </p>
    </div>
  );
}

export default Consulting;
