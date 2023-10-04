import Features from '../../components/Features/Features';
import Hero from '../../components/Hero/Hero';
import How from '../../components/How/How';
import Footer from '../../layouts/Footer/Footer';
import Header from '../../layouts/Header/Header';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
      <Hero />
      <Features />
      <How />
      <Footer />
    </div>
  );
};

export default Home;
