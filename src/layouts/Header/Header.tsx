import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src='' alt='' />
      <ul>
        <li>Features</li>
        <li>How it works</li>
      </ul>
      <button>Get STarted</button>
    </header>
  );
};

export default Header;
