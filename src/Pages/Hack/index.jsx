import style from "./index.module.scss";

function Hack() {
  return (
    <div className={style.hack}>
      <h2 className={style.title}>hack</h2>

      <ul className={style.buttons}>
        <li>
          <a
            href="https://dragonereum.io/"
            target="_blank"
            rel="nofollow noopener"
          >
            1st place Winner at the 2017 Minsk Blockchain Hackathon
          </a>
        </li>
        <li>
          <a
            href="https://devpost.com/software/chainlink-hackathon-a56phv"
            target="_blank"
            rel="nofollow noopener"
          >
            $10k at the Chainlink Constellation Hackathon 2023
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Hack;
