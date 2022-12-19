import { pageAnimation } from 'constants/animations';
import { motion } from 'framer-motion';

const Settings = () => {
  return (
    <motion.section {...pageAnimation} transition={{ duration: 0.3 }}>
      Settings
    </motion.section>
  );
};

export default Settings;
