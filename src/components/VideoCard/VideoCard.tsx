import styles from './VideoCard.module.scss';
import link from '../../assets/link.svg';
import more from '../../assets/more.svg';

interface VideoProps {
  videoURL: string;
  title: string;
  date: string;
}

const VideoCard = ({ videoURL, title, date }: VideoProps) => {
  return (
    <section className={styles.vid_container}>
      <video src={videoURL}></video>
      <div className={styles.vid_details}>
        <div className={styles.vid_detail}>
          <h3>{title}</h3>
          <p>{date}</p>
        </div>
        <div className={styles.img}>
          <img src={link} alt='link' />
          <img src={more} alt='more' />
        </div>
      </div>
    </section>
  );
};

export default VideoCard;
