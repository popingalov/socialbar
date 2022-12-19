import { useLocation } from 'react-router';
import NavigationCard from './navigationCard';
import NavigationMain from './navigationMain';
import PagesNavigation from './pagesNavigation';
import { paths } from 'constants/paths';
import { NavigationListStyled, Wrapper } from './Navigation.styled';

const Navigation = () => {
  const location = useLocation();

  return (
    <>
      <Wrapper>
        {location.pathname === paths.home ||
        location.pathname === paths.ingredients ||
        location.pathname === paths.cocktails ? (
          <NavigationMain />
        ) : (
          <NavigationCard />
        )}
      </Wrapper>
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
