import styles from './VideoBoard.module.scss';
import edit from '../../assets/edit.svg';
import copy from '../../assets/copy.svg';
import facebook from '../../assets/Facebook svg.svg';
import whatsapp from '../../assets/whatsapp.svg';
import telegram from '../../assets/telegram.svg';
import play from '../../assets/play-circle.svg';
import volume from '../../assets/volume-high.svg';
import settings from '../../assets/setting-2.svg';

const VideoBoard = () => {
  return (
    <section className={styles.video_board}>
      <div className={styles.left}>
        <h1>Your video is ready</h1>
        <div className={styles.name}>
          <small>Name</small>
          <h2>
            Untitled_Video_20232509 <img src={edit} alt='edit icon' />{' '}
          </h2>
        </div>
        <label htmlFor='email'>
          <input type='email' />
          <button>Send</button>
        </label>
        <div className={styles.video}>
          <h3>Video Url</h3>
          <label htmlFor=''>
            <input type='text' name='' id='' />
            <div className={styles.copy}>
              <img src={copy} alt='copy' />
              <small>Copy</small>
            </div>
          </label>
        </div>

        <div className={styles.share}>
          <h4>Share your video</h4>
          <div className={styles.links}>
            <button>
              <img src={facebook} alt='facebook' />
              Facebook
            </button>
            <button>
              <img src={whatsapp} alt='whatsapp' />
              Whatsapp
            </button>
            <button>
              <img src={telegram} alt='telegram' />
              Telegram
            </button>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.video_player}>
          <video src=''></video>
          <div className={styles.panel}>
            <p>0:30/ 1:10</p>
            <div className={styles.panel_images}>
              <img src={play} alt='play' />
              <img src={volume} alt='volume' />
              <img src={settings} alt='settings' />
            </div>
          </div>
        </div>
        <div className={styles.transcript}>
          <h3>Transcript</h3>
        </div>
      </div>
    </section>
  );
};

export default VideoBoard;
