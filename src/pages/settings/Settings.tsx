import { pageAnimation } from 'constants/pagesAnimation';
import { motion } from 'framer-motion';

const Settings = () => {
  return (
    <motion.section
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="hidden"
      transition={{ duration: 0.5 }}
    >
      Settings
    </motion.section>
  );
};

export default Settings;
