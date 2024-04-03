import ReactGA from "react-ga4";

import style from "./index.module.scss";
import qrCode from "../../assets/img/qr_pay_code.jpg";

function Donation() {
  const handleClick = (label) => {
    ReactGA.event({
      category: "download",
      action: "click",
      label
    });
  };

  return (
    <div className={style.donation}>
      <p className={style.text}>
        <i className="fa fa-bitcoin"></i> bitcon
        <strong>bc1qpp083hhay7z8u0asup6lc77uww7cyhp5gmd4fw</strong>
      </p>
      <div className={style.qrCodeDownload}>
        <img className={style.qrCode} src={qrCode} alt="btc" />
        <a href={qrCode} download onClick={() => handleClick('QR')}>Download QR</a>
      </div>
      <h3 className={style.title} data-animation="fadeIn">
        Thank You 😊🙏
      </h3>
    </div>
  );
}

export default Donation;
