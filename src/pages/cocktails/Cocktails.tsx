import PagesNavigation from 'components/pagesNavigation';
import CocktailList from 'components/cocktailList';

const Cocktails = () => {
  return (
    <div>
      <PagesNavigation type="cocktails" />
      <CocktailList />
    </div>
  );
};

export default Cocktails;
