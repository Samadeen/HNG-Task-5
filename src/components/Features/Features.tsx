import styles from './Features.module.scss';
import record_circle from '../../assets/simple.svg';
import send from '../../assets/send.svg';
import revisit from '../../assets/revisit.svg';
import videoRepo from '../../assets/Video Repository.svg';

const Features = () => {
  return (
    <section className={styles.features_container}>
      <h2>Features</h2>
      <p>Key Highlights of Our Extension</p>
      <div className={styles.feature_details}>
        <div className={styles.feature_detail}>
          <div className={styles.feature_list}>
            <img src={record_circle} alt='record-circle' />
            <div className={styles.f_list}>
              <h3>Simple Screen Recording</h3>
              <p>
                Effortless screen recording for everyone. Record with ease, no
                tech expertise required.
              </p>
            </div>
          </div>
          <div className={styles.feature_list}>
            <img src={send} alt='send' />
            <div className={styles.f_list}>
              <h3>Easy-to-Share URL</h3>
              <p>
                Share your recordings instantly with a single link. No
                attachments, no downloads.
              </p>
            </div>
          </div>
          <div className={styles.feature_list}>
            <img src={revisit} alt='revisit' />
            <div className={styles.f_list}>
              <h3>Revisit Recordings</h3>
              <p>
                Access and review your past content effortlessly. Your
                recordings, always at your fingertips.
              </p>
            </div>
          </div>
        </div>
        <img src={videoRepo} alt='video repo' />
      </div>
    </section>
  );
};

export default Features;
