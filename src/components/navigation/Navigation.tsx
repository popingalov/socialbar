import { useLocation } from 'react-router';
import NavigationCard from './navigationCard';
import NavigationMain from './navigationMain';
import PagesNavigation from 'components/pagesNavigation';
import { paths } from 'constants/paths';
import { NavigationListStyled } from './Navigation.styled';
import { motion } from 'framer-motion';

const page = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const Navigation = () => {
  const location = useLocation();

  return (
    <motion.div
      variants={page}
      initial="hidden"
      animate="show"
      exit="hidden"
      transition={{ duration: 0.5 }}
    >
      {location.pathname === paths.home ||
      location.pathname === paths.ingredients ||
      location.pathname === paths.cocktails ? (
        <NavigationMain />
      ) : (
        <NavigationCard />
      )}
      {(location.pathname === paths.ingredients ||
        location.pathname === paths.cocktails) && (
        <NavigationListStyled>
          <PagesNavigation />
        </NavigationListStyled>
      )}
    </motion.div>
  );
};

export default Navigation;
