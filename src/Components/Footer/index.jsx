import style from './index.module.scss';

function Footer() {
  return (
    <footer className={style.footer}>
      <div
        className={style.copyright}
        data-animation="fadeInUp"
        data-animation-delay="500"
      >
        <p>© 2024 code.mba - Alex from Bangkok</p>
      </div>
      <nav
        className={style.socials}
        data-animation="fadeInUp"
        data-animation-delay="500"
      >
        <ul>
          <li>
            <a href="https://twitter.com/AlexBlockDev" target="_blank">
              <i class="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/alexeevxpert/" target="_blank">
              <i class="fa fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/alexeev-dev" target="_blank">
              <i class="fa fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/alexeevxpert/" target="_blank">
              <i class="fa fa-instagram"></i>
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
