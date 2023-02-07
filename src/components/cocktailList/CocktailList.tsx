import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { AnimatePresence } from 'framer-motion';
import BarList from 'components/barList/BarList';
import CocktailCard from './cocktailCard/CocktailCard';
import ContextMenuCocktails from './contextMenu/ContextMenuCocktails';
import { changeSearchFilter } from 'redux/searchFilter/searchSlice';
import { ICocktail } from 'types/cocktail';
import { ListItem } from './CocktailList.styled';
import { MouseEvent, useState } from 'react';
import PopUp from 'components/modal/popUp';
import {
  selectContextMenuStatus,
  selectPopUpSearchStatus,
} from 'redux/modal/modalSelectors';
import { setContextMenuIsOpen } from 'redux/modal/modalSlice';
import { useGetLocation } from 'hooks/useGetLocation';
import { useLongPress } from 'use-long-press';

interface IProps {
  cocktails: ICocktail[];
  isFavoritePage?: boolean;
  inIngredientCard?: boolean;
  type?: string;
}

const CocktailList: React.FC<IProps> = ({
  cocktails,
  isFavoritePage = false,
  inIngredientCard = false,
  type = 'main',
}) => {
  const contextMenuIsOpen = useSelector(selectContextMenuStatus);
  const isSearchOpen = useSelector(selectPopUpSearchStatus);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isSearch } = useGetLocation();

  const [selectCoordinates, setSelectCoordinates] = useState<ICoordinates>({
    top: null,
    left: null,
    right: null,
  });
  const [selectedCocktail, setSelectedCocktail] = useState<{
    name: string;
    id: string;
    isFavorite: boolean;
  }>({ name: '', id: '', isFavorite: false });

  const longPressHandle = useLongPress((event: any) => {
    if (isSearchOpen && isSearch) return;

    const data = event.target.closest('li').getAttribute('name');
    const id = event.target.closest('li').getAttribute('id');
    const { title, favorite } = JSON.parse(data);

    setSelectCoordinates({
      top: event.changedTouches[0].clientY,
      left: event.changedTouches[0].clientX,
      right: null,
    });
    setSelectedCocktail({ name: title, id, isFavorite: favorite });

    dispatch(setContextMenuIsOpen(true));
    console.log('Long pressed!');
  });

  const handleClick = (
    event: MouseEvent<HTMLLIElement, globalThis.MouseEvent>,
    id: string,
  ) => {
    const isModalSearch =
      event.currentTarget.closest('div')?.getAttribute('type') === 'search';

    if (inIngredientCard) {
      navigate(`/cocktails/${id}`);
      return;
    }

    if (isSearchOpen && isSearch) {
      if (!isModalSearch) return;

      dispatch(changeSearchFilter(''));
      navigate(`/cocktails/${id}`, {
        state: { from: `search` },
      });
      return;
    }

    navigate(`${id}`);
  };

  return (
    <>
      <BarList type={type}>
        {cocktails.map(
          ({
            title,
            description,
            ingredients,
            id,
            picture,
            iCan,
            favorite,
            lacks,
          }) => {
            const ingredientNames = ingredients.map(
              ingredient => ingredient.data.title,
            );

            return (
              <ListItem
                key={id}
                id={id}
                name={JSON.stringify({ title, favorite })}
                allIngredientsAreAvailable={iCan}
                onClick={event => handleClick(event, id)}
                {...longPressHandle()}
              >
                <CocktailCard
                  isFavoritePage={isFavoritePage}
                  isFavorite={favorite}
                  allAvailable={iCan}
                  name={title}
                  description={description}
                  imageUrl={picture}
                  ingredients={ingredientNames}
                  lacks={lacks}
                />
              </ListItem>
            );
          },
        )}
      </BarList>

      <AnimatePresence>
        {contextMenuIsOpen && (
          <PopUp key="popUp" coordinates={selectCoordinates} type="context">
            <ContextMenuCocktails
              name={selectedCocktail.name}
              id={selectedCocktail.id}
              isFavoritePage={isFavoritePage}
              isFavorite={selectedCocktail.isFavorite}
            />
          </PopUp>
        )}
      </AnimatePresence>
    </>
  );
};

export default CocktailList;
