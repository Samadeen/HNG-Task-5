// import styles from './Availability.module.scss';
import './Availability.scss';

const Availability = () => {
  return (
    <section className='availability'>
      <h2>
        To ensure the availability and privacy of your video, we recommend
        saving it to your account.
      </h2>
      <button>Save Video</button>
      <p>
        Don’t have an account? <a href=''>Create account</a>
      </p>
    </section>
  );
};

export default Availability;
