import styles from './Modal.module.scss';
import kite from '../../assets/success-kite 1.svg';
import close from '../../assets/close-circle.svg';

interface ModalProps {
  email: string;
}

const Modal = ({ email }: ModalProps) => {
  return (
    <section className={styles.moda}>
      <div className={styles.backdrop} />
      <div className={styles.modal}>
        <div className={kite}>
          <img src={kite} alt='kite' />
          <img src={close} alt='close' className={styles.close} />
        </div>
        <h2>
          Your video link has been sent to <span> {email}</span>
        </h2>
        <div className={styles.availability}>
          <h4>
            Would you need to view this video later? Save to your account now!
          </h4>
          <button>Save Video</button>
          <p>
            Don’t have an account? <a href=''>Create account</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Modal;
