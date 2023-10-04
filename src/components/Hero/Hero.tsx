import styles from './Hero.module.scss';
import arrow from '../../assets/arrow-right.svg';
import woman1 from '../../assets/woman-blue.webp';
import woman2 from '../../assets/woman-brown.webp';
import father from '../../assets/father-son.webp';
import dot1 from '../../assets/dot1.svg';
import dot2 from '../../assets/dot2.svg';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className={styles.hero_container}>
      <div className={styles.hero_details}>
        <h1>Show Them Don’t Just Tell</h1>
        <p>
          Help your friends and loved ones by creating and sending videos on how
          to get things done on a website.
        </p>
        <Link to='/auth'>
          Install HelpMeOut
          <img src={arrow} alt='arrow' />
        </Link>
      </div>
      <div className={styles.hero_images}>
        <div className={styles.two}>
          <img src={woman1} alt='woman and laptop' />
          <img src={father} alt='father and son' />
          <img src={dot2} alt='dot' className={styles.dot1} />
        </div>
        <div className={styles.one}>
          <img src={woman2} alt='woman and phone' />
          <img src={dot1} alt='dot' className={styles.dot2} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
