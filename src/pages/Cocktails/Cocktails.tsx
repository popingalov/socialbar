import { PagesNavigation } from 'Components/pagesNavigation/PagesNavigation';
import { CocktailList } from 'Components/cocktailList/CocktailList';

export const Cocktails = () => {
  return (
    <div>
      <PagesNavigation type="cocktails" />
      <CocktailList />
    </div>
  );
};
