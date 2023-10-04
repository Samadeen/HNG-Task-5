import styles from './Footer.module.scss';
import logo from '../../assets/f_logo.svg';

const Footer = () => {
  return (
    <section className={styles.footer_section}>
      <div className={styles.footer_wrapper}>
        <img src={logo} alt='footer logo' />
        <ul>
          <h3>Menu</h3>
          <li>Home</li>
          <li>Converter</li>
          <li>How it works</li>
        </ul>
        <ul>
          <h3>About us</h3>
          <li>About</li>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
        </ul>
        <ul>
          <h3>Screen Record</h3>
          <li>Browser Window</li>
          <li>Desktop</li>
          <li>Application</li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
