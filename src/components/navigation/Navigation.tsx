import { useLocation } from 'react-router';
import NavigationCard from './navigationCard';
import NavigationMain from './navigationMain';
import PagesNavigation from './pagesNavigation';
import { paths } from 'constants/paths';
import { NavigationListStyled, Wrapper } from './Navigation.styled';

const Navigation = () => {
  const location = useLocation();
  const isMainRoute =
    location.pathname === paths.home ||
    location.pathname === paths.ingredients ||
    location.pathname === paths.cocktails;
  const isGeneralRoute =
    location.pathname === paths.ingredients ||
    location.pathname === paths.cocktails;
  const isExtraRoute =
    location.pathname === paths.settings ||
    location.pathname === paths.newCocktail ||
    location.pathname === paths.newIngredient;

  return (
    <>
      <Wrapper isExtraRoute={isExtraRoute}>
        {isMainRoute ? <NavigationMain /> : <NavigationCard />}
      </Wrapper>
      {isGeneralRoute && (
        <NavigationListStyled>
          <PagesNavigation />
        </NavigationListStyled>
      )}
    </>
  );
};

export default Navigation;
