import styles from './Profile.module.scss';
import logo from '../../assets/logo.svg';
import profile from '../../assets/profile-circle.svg';
import arrow_down from '../../assets/arrow-down.svg';
import search from '../../assets/search-normal.svg';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <section className={styles.profile_container}>
      <div className={styles.nav}>
        <Link to='/'>
          <img src={logo} alt='logo' />
        </Link>
        <div className={styles.profile}>
          <img src={profile} alt='profile' />
          <p>John Mark</p>
          <img src={arrow_down} alt='arrow_down' />
        </div>
      </div>
      <div className={styles.name}>
        <div className={styles.profile_details}>
          <h1>Hello, John Mark</h1>
          <p>Here are your recorded videos</p>
        </div>
        <label htmlFor=''>
          <input type='text' />
          <img
            src={search}
            alt='search'
            placeholder='Search for a particular video'
          />
        </label>
      </div>
      <div className={styles.recent}>
        <h2>Under Construction</h2>
      </div>
    </section>
  );
};

export default Profile;
