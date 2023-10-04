import styles from './Header.module.scss';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to='/'>
        <img src={logo} alt='logo' />
      </Link>
      <ul>
        <li>Features</li>
        <li>How it works</li>
      </ul>
      <Link to='/auth'>Get Started</Link>
    </header>
  );
};

export default Header;
