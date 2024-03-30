import style from "./index.module.scss";

function Main() {
  return (
    <div className={style.main}>
      <h2
        className={style.title}
        data-animation="fadeIn"
        data-animation-delay="50"
      >
        #alexfrombkk
      </h2>
      <p
        className={style.text}
        data-animation="fadeIn"
        data-animation-delay="55"
      >
        In a single line of code, change the world, we can.
      </p>
      <ul className={style.buttons}>
        <li>
          <a
            href="https://linktr.ee/alexeevxpert"
            target="_blank"
            data-animation="fadeIn"
            data-animation-delay="60"
            data-slide="about"
          >
            Linktree
          </a>
        </li>
        <li>
          <a
            href="https://t.me/web3siam"
            className={style.btnInverse}
            target="_blank"
            data-animation="fadeIn"
            data-animation-delay="60"
            data-slide="subscribe"
          >
            Web3 Siam
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Main;
