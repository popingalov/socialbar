import { pageAnimation } from 'constants/animations';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.section {...pageAnimation} transition={{ duration: 0.3 }}>
      Home
      <h1>Welcome</h1>
    </motion.section>
  );
};

export default Home;
