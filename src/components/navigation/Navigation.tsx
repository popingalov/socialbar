import { useLocation } from 'react-router';
import NavigationCard from './navigationCard';
import NavigationMain from './navigationMain';
import PagesNavigation from 'components/pagesNavigation';
import { paths } from 'constants/paths';
import { NavigationListStyled } from './Navigation.styled';

const Navigation = () => {
  const location = useLocation();
  return (
    <>
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
    </>
  );
};

export default Navigation;
