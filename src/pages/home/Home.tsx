import { pageAnimation } from 'constants/pagesAnimation';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.section
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="hidden"
      transition={{ duration: 0.5 }}
    >
      Home
      <h1>Welcome</h1>
    </motion.section>
  );
};

export default Home;
