import style from "./index.module.scss";

function Donation() {
  return (
    <div className={style.donation}>
      <h2 className={style.title} data-animation="fadeIn">
        Thank You 😊🙏
      </h2>
      <p className={style.text}>
        <i className="fa fa-wallet"></i> bitcon{" "}
        <strong>bc1qpp083hhay7z8u0asup6lc77uww7cyhp5gmd4fw</strong>
      </p>
      <img className={style.qrCode} src="https://code.mba/assets/img/qr_pay_code.jpg" alt="btc" />
    </div>
  );
}

export default Donation;
