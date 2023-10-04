import styles from './Auth.module.scss';
import logo from '../../assets/logo.svg';
import google from '../../assets/Google.svg';
import facebook from '../../assets/Facebook svg.svg';
import { Link } from 'react-router-dom';

const Auth = () => {
  return (
    <section className={styles.auth_container}>
      <img src={logo} alt='logo' />
      <div className={styles.auth_details}>
        <h1>Log in or Sign up</h1>
        <p>
          Join millions of others in sharing successful moves on{' '}
          <span>HelpMeOut</span>.
        </p>
        <button>
          <img src={google} alt='google icon' />
          Continue with Google
        </button>
        <button>
          <img src={facebook} alt='facebook icon' />
          Continue with Facebook
        </button>

        <div className={styles.or}>
          <div className={styles.line} />
          <small>or</small>
          <div className={styles.line} />
        </div>
        <form action=''>
          <label htmlFor='email'>
            Email
            <input type='email' placeholder='Enter your email address' />
          </label>
          <label htmlFor='password'>
            Password
            <input type='password' placeholder='Enter your Password' />
          </label>
          <Link to='/profile'>Sign Up</Link>
        </form>
      </div>
    </section>
  );
};

export default Auth;
