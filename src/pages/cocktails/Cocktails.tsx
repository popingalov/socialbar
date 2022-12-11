import { PagesNavigation } from 'components/pagesNavigation/PagesNavigation';
import { CocktailList } from 'components/cocktailList/CocktailList';

export const Cocktails = () => {
  return (
    <div>
      <PagesNavigation type="cocktails" />
      <CocktailList />
    </div>
  );
};
