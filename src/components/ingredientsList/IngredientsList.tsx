import BarList from 'components/barList';
import { selectIngredientFilter } from 'redux/filter/filterSelectors';
import { useSelector } from 'react-redux';
import IngredientCard from 'components/ingredientsList/ingredientCard';
import { ingredientFilterStatus } from 'redux/filter/filterConstants';
import FollowUpMessage from 'components/UI-kit/followUpMessage';
import IngredientBottomMessage from './ingredientBottomMessage';
import Loader from 'components/loader';
import { Link } from 'react-router-dom';
import { IIngredient } from 'types/ingredient';
import { useGetVisibleIngredients } from 'hooks/useGetVisibleIngredients';

import { useLongPress } from 'use-long-press';
import { useState } from 'react';

import { setContextMenuIsOpen } from 'redux/modal/modalSlice';
import { AnimatePresence } from 'framer-motion';
import { selectContextMenuStatus } from 'redux/modal/modalSelectors';
import { useDispatch } from 'react-redux';
import PopUp from 'components/modal/popUp';
import ContextMenuIngredients from './contextMenu/ContextMenuIngredients';
import { ListItem } from './IngredientsList.styled';

const IngredientsList = () => {
  const ingredientFilter = useSelector(selectIngredientFilter);
  const { visibleIngredients, isFetching } =
    useGetVisibleIngredients(ingredientFilter);

  const isMyBar = ingredientFilterStatus.myBarShelf === ingredientFilter;
  const isShoppingList =
    ingredientFilterStatus.shoppingList === ingredientFilter;
  // console.log('visibleIngredients', visibleIngredients);

  const [selectCoordinates, setSelectCoordinates] = useState<ICoordinates>({
    top: null,
    left: null,
    right: null,
  });

  const [selectedIngredient, setSelectedIngredient] = useState<{
    name: string;
    availability: boolean;
    shopping: boolean;
    id: string;
  }>({ name: '', id: '', availability: false, shopping: false });

  const dispatch = useDispatch();
  const contextMenuIsOpen = useSelector(selectContextMenuStatus);

  const longPressHandle = useLongPress((event: any) => {
    // console.log('event', event);s
    const data = event.target.closest('li').getAttribute('name');
    const id = event.target.closest('li').getAttribute('id');

    const { title, availability, shopping } = JSON.parse(data);

    setSelectCoordinates({
      top: event.changedTouches[0].clientY,
      left: event.changedTouches[0].clientX,
      right: null,
    });
    setSelectedIngredient({
      name: title,
      id,
      availability,
      shopping,
    });

    dispatch(setContextMenuIsOpen(true));
    console.log('Long pressed!');
  });

  return (
    <>
      {isFetching && <Loader isLoading={isFetching} />}

      {visibleIngredients && (
        <BarList>
          {visibleIngredients.map((ingredient: IIngredient) => {
            const { title, id, picture, iHave, shopping } = ingredient;
            // console.log('availability', availability);

            return (
              <ListItem
                key={id}
                id={id}
                name={JSON.stringify({ title, iHave, shopping })}
                {...longPressHandle()}
              >
                <Link to={`${id}`}>
                  <IngredientCard
                    id={id}
                    name={title}
                    filter={ingredientFilter}
                    isInShoppingList={shopping}
                    isInMyBar={iHave}
                    imageUrl={picture}
                  />
                </Link>
              </ListItem>
            );
          })}
        </BarList>
      )}
      {visibleIngredients && !isShoppingList && (
        <FollowUpMessage>
          <IngredientBottomMessage />
        </FollowUpMessage>
      )}
      <AnimatePresence>
        {contextMenuIsOpen && (
          <PopUp key="popUp" coordinates={selectCoordinates} type="context">
            {}
            <ContextMenuIngredients
              isMyBar={isMyBar}
              isShoppingList={isShoppingList}
              isAvailable={selectedIngredient.availability}
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

// const getVisibleIngredients = (filterStatus: string) => {
//   switch (filterStatus) {
//     case ingredientFilterStatus.myBarShelf:
//       // return myIngredients;
//       return [];
//     case ingredientFilterStatus.shoppingList:
//       // return shoppingList;
//       return [];
//     default:
//       return;
//   }
// };
// const visibleIngredients = getVisibleIngredients(ingredientFilter);

// const visibleIngredients = getVisibleIngredients(
//   ingredients || [],
//   ingredientFilter,
// );
