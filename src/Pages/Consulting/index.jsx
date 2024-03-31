import style from "./index.module.scss";

function Consulting() {
  return (
    <div className={style.consulting}>
      <h2 className={style.title}>
        Consulting
      </h2>

      <p
        className={style.text}
      >
        I offer Consultations Starting at 5000 Thai Baht or $150,<br/> leveraging my
        expertise as a top-notch Executive in Web3.
      </p>
    </div>
  );
}

export default Consulting;
