import CocktailList from 'components/cocktailList';
import { motion } from 'framer-motion';

const Cocktails = () => <CocktailList />;
export default Cocktails;

// <motion.div
//   initial={{ opacity: 0 }}
//   animate={{ opacity: 1 }}
//   exit={{ opacity: 0 }}
//   transition={{ duration: 0.4 }}
// >
//   <PagesNavigation type="cocktails" />
//   <CocktailList />
// </motion.div>;
