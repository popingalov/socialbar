import BarList from 'components/barList';
import { useSelector } from 'react-redux';
import IngredientCard from 'components/ingredientsList/ingredientCard';
import { useLocation, useNavigate } from 'react-router-dom';
import { IIngredient } from 'types/ingredient';
import { useLongPress } from 'use-long-press';
import { MouseEvent, useRef, useState } from 'react';
import { setContextMenuIsOpen } from 'redux/modal/modalSlice';
import { AnimatePresence } from 'framer-motion';
import {
  selectContextMenuStatus,
  selectPopUpSearchStatus,
} from 'redux/modal/modalSelectors';
import { useDispatch } from 'react-redux';
import PopUp from 'components/modal/popUp';
import ContextMenuIngredients from './contextMenu/ContextMenuIngredients';
import { ListItem } from './IngredientsList.styled';
import { selectIngredientFilter } from 'redux/filter/filterSelectors';
import { useGetLocation } from 'hooks/useGetLocation';
import { changeSearchFilter } from 'redux/searchFilter/searchSlice';

interface IProps {
  ingredients: IIngredient[];
  isMyBar: boolean;
  isShoppingList: boolean;
  type?: string;
}

const IngredientsList: React.FC<IProps> = ({
  ingredients,
  isMyBar,
  isShoppingList,
  type = 'main',
}) => {
  const contextMenuIsOpen = useSelector(selectContextMenuStatus);
  const isSearchOpen = useSelector(selectPopUpSearchStatus);
  const ingredientFilter = useSelector(selectIngredientFilter);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { isSearch } = useGetLocation();

  const [selectCoordinates, setSelectCoordinates] = useState<ICoordinates>({
    top: null,
    left: null,
    right: null,
  });

  const [selectedIngredient, setSelectedIngredient] = useState<{
    name: string;
    iHave: boolean;
    shopping: boolean;
    id: string;
  }>({ name: '', id: '', iHave: false, shopping: false });

  const longPressHandle = useLongPress((event: any) => {
    if (isSearchOpen && isSearch) return;

    const data = event.target.closest('li').getAttribute('name');
    const id = event.target.closest('li').getAttribute('id');

    const { title, iHave, shopping } = JSON.parse(data);

    setSelectCoordinates({
      top: event.changedTouches[0].clientY,
      left: event.changedTouches[0].clientX,
      right: null,
    });
    setSelectedIngredient({
      name: title,
      id,
      iHave,
      shopping,
    });

    dispatch(setContextMenuIsOpen(true));
    console.log('Long pressed!');
  });

  const handleClick = (
    event: MouseEvent<HTMLLIElement, globalThis.MouseEvent>,
    id: string,
  ) => {
    const target = event.target as Element;
    const isCheckbox = target.closest('label');
    const isButton = target.closest('button');
    if (isCheckbox || isButton) return;

    const isModalSearch =
      event.currentTarget.closest('div')?.getAttribute('type') === 'search';

    if (isSearchOpen && isSearch) {
      if (!isModalSearch) return;

      dispatch(changeSearchFilter(''));
      navigate(`/ingredients/${id}`, {
        state: { from: `${location.pathname}` },
      });
      return;
    }

    navigate(`${id}`);
  };

  return (
    <>
      <BarList type={type}>
        {ingredients.map((ingredient: IIngredient) => {
          const { title, id, picture, iHave, shopping, cocktails } = ingredient;
          const isInMyBar = iHave || isMyBar;
          return (
            <ListItem
              key={id}
              id={id}
              name={JSON.stringify({ title, iHave, shopping })}
              isInMyBar={isInMyBar}
              onClick={event => handleClick(event, id)}
              {...longPressHandle()}
            >
              <IngredientCard
                id={id}
                name={title}
                filter={ingredientFilter}
                isInShoppingList={shopping}
                isInMyBar={iHave}
                imageUrl={picture}
                usedIn={cocktails as string[]}
              />
            </ListItem>
          );
        })}
      </BarList>

      <AnimatePresence>
        {contextMenuIsOpen && (
          <PopUp key="popUp" coordinates={selectCoordinates} type="context">
            <ContextMenuIngredients
              isMyBar={isMyBar}
              isShoppingList={isShoppingList}
              isAvailable={selectedIngredient.iHave}
              isInShoppingList={selectedIngredient.shopping}
              name={selectedIngredient.name}
              id={selectedIngredient.id}
            />
          </PopUp>
        )}
      </AnimatePresence>
    </>
  );
};

export default IngredientsList;
