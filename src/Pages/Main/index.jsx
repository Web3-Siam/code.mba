import style from "./index.module.scss";

function Main() {
  return (
    <div className={style.main}>
      <h2
        className={style.title}
      >
        #alexfrombkk
      </h2>
      <p
        className={style.text}
      >
        In a single line of code, change the world, we can.
      </p>
      <ul className={style.buttons}>
        <li>
          <a
            href="https://linktr.ee/alexeevxpert"
            target="_blank"
            rel="nofollow noopener"
          >
            <i className="fa fa-link"></i>&nbsp;
            Linktree
          </a>
        </li>
        <li>
          <a
            href="https://t.me/web3siam"
            className={style.btnInverse}
            target="_blank"
            rel="nofollow noopener"
          >
            <i className="fa fa-paper-plane"></i>&nbsp;
            Web3 Siam
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Main;
