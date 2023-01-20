import BarList from 'components/barList';
import { selectIngredientFilter } from 'redux/filter/filterSelectors';
import { useSelector } from 'react-redux';
import IngredientCard from 'components/ingredientsList/ingredientCard';
import { ingredientFilterStatus } from 'redux/filter/filterConstants';
import FollowUpMessage from 'components/UI-kit/followUpMessage';
import IngredientBottomMessage from './ingredientBottomMessage';
import Loader from 'components/loader';
import { useNavigate } from 'react-router-dom';
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
import { FilteredMessage, ListItem } from './IngredientsList.styled';
import { useGetFilteredIngredients } from 'hooks/useGetFilteredIngredients';

const IngredientsList = () => {
  const ingredientFilter = useSelector(selectIngredientFilter);
  const contextMenuIsOpen = useSelector(selectContextMenuStatus);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { visibleIngredients, isFetching } =
    useGetVisibleIngredients(ingredientFilter);
  const isMyBar = ingredientFilterStatus.myBarShelf === ingredientFilter;
  const isShoppingList =
    ingredientFilterStatus.shoppingList === ingredientFilter;

  const { filteredIngredients, filteredItems } =
    useGetFilteredIngredients(visibleIngredients);

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

  return (
    <>
      {isFetching && <Loader isLoading={isFetching} />}

      {filteredIngredients && (
        <BarList>
          {filteredIngredients.map((ingredient: IIngredient) => {
            const { title, id, picture, iHave, shopping, cocktails } =
              ingredient;
            const isInMyBar = iHave || isMyBar;

            return (
              <ListItem
                key={id}
                id={id}
                name={JSON.stringify({ title, iHave, shopping })}
                isInMyBar={isInMyBar}
                onClick={() => navigate(`${id}`)}
                {...longPressHandle()}
              >
                <IngredientCard
                  id={id}
                  name={title}
                  filter={ingredientFilter}
                  isInShoppingList={shopping}
                  isInMyBar={iHave}
                  imageUrl={picture}
                  usedIn={cocktails}
                />
              </ListItem>
            );
          })}
        </BarList>
      )}

      {!isFetching && filteredItems !== 0 && (
        <FollowUpMessage>
          <FilteredMessage>
            ( +{filteredItems} ingredients filtered )
          </FilteredMessage>
        </FollowUpMessage>
      )}
      {!isFetching && !isShoppingList && (
        <FollowUpMessage>
          <IngredientBottomMessage />
        </FollowUpMessage>
      )}
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
