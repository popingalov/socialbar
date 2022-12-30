// import { Tabs } from 'components/tabs/Tabs';
import { SettingsList } from 'components/settingsList/SettingsList';
import { pageAnimation } from 'constants/animations';
import { motion } from 'framer-motion';

const Settings = () => {
  return (
    <motion.section {...pageAnimation} transition={{ duration: 0.3 }}>
      <SettingsList />
      {/* <Tabs /> */}
    </motion.section>
  );
};

export default Settings;
