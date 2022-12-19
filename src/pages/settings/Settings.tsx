import { motion } from 'framer-motion';

const page = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const Settings = () => {
  return (
    <motion.section
      variants={page}
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
