import { pageAnimation } from 'constants/animations';
import { motion } from 'framer-motion';

import Select from 'components/UI-kit/select';

const ingredientTypes = [
  'No Filter',
  'Strong alcohol',
  'Soft alcohol',
  'Beverages',
  'Juices',
  'Fruits',
  'Other',
];

const cocktailTypes = [
  'IBA Official',
  'Strong',
  'Moderately strong',
  'Soft',
  'Long',
  'Shooters',
  'Non-alcoholic',
];

const Home = () => {
  return (
    <motion.section {...pageAnimation} transition={{ duration: 0.3 }}>
      Home
      <h1>Welcome</h1>
      <Select
        label="No Filter"
        values={ingredientTypes}
        onChange={(v: any) => console.log(v)}
      />
    </motion.section>
  );
};

export default Home;
