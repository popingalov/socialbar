import { motion } from 'framer-motion';

const page = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const Home = () => {
  return (
    <motion.section
      variants={page}
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
