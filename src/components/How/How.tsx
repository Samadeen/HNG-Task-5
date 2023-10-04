import styles from './How.module.scss';
import rec from '../../assets/rec.svg';

const How = () => {
  return (
    <section className={styles.how_container}>
      <h2>How it works</h2>
      <div className={styles.how_lists}>
        <div className={styles.how_list}>
          <h3>1</h3>
          <h4>Record Screen</h4>
          <p>
            Click the "Start Recording" button in our extension. choose which
            part of your screen to capture and who you want to send it to.
          </p>
          <img src={rec} alt='rec' />
        </div>
        <div className={styles.how_list}>
          <h3>2</h3>
          <h4>Share Your Recording</h4>
          <p>
            We generate a shareable link for your video. Simply send it to your
            audience via email or copy the link to send via any platform.
          </p>
          <img src={rec} alt='rec' />
        </div>
        <div className={styles.how_list}>
          <h3>3</h3>
          <h4>Learn Effortlessly</h4>
          <p>
            Recipients can access your video effortlessly through the provided
            link, with our user-friendly interface suitable for everyone.
          </p>
          <img src={rec} alt='rec' />
        </div>
      </div>
    </section>
  );
};

export default How;
