import PagesNavigation from 'components/pagesNavigation';
import CocktailList from 'components/cocktailList';

const Cocktails = () => {
  return (
    <>
      <PagesNavigation type="cocktails" />
      <CocktailList />
    </>
  );
};

export default Cocktails;
