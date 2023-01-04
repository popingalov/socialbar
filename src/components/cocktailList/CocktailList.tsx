import BarList from 'components/barList';
import { useSelector } from 'react-redux';
import { selectCocktailFilter } from 'redux/filter/filterSelectors';
import CocktailCard from 'components/cocktailList/cocktailCard';
import { ListItem } from './CocktailList.styled';
import FollowUpMessage from 'components/UI-kit/followUpMessage';
import { cocktailFilterStatus } from 'redux/filter/filterConstants';
import CocktailBottomMessage from './cocktailBottomMessage';
import Loader from 'components/loader';
import { Link } from 'react-router-dom';
import { useGetVisibleCocktails } from 'hooks/useGetVisibleCocktails';
import { useLongPress } from 'use-long-press';
import { useState } from 'react';

import { setContextMenuIsOpen } from 'redux/modal/modalSlice';
import { AnimatePresence } from 'framer-motion';
import { selectContextMenuStatus } from 'redux/modal/modalSelectors';
import { useDispatch } from 'react-redux';
import PopUp from 'components/modal/popUp';
// import { useGetCocktailByIdQuery } from 'redux/api/cocktailApi';

const CocktailList = () => {
  const cocktailFilter = useSelector(selectCocktailFilter);
  const { visibleCocktails, isFetching } =
    useGetVisibleCocktails(cocktailFilter);
  const isMyCocktails = cocktailFilterStatus.myCocktails === cocktailFilter;
  const isAllCocktails = cocktailFilterStatus.allCocktails === cocktailFilter;
  // console.log('visibleCocktails', visibleCocktails);

  const [selectCoordinates, setSelectCoordinates] = useState<ICoordinates>({
    top: null,
    left: null,
    right: null,
  });
  const [selectedCocktail, setSelectedCocktail] = useState<{
    name: string | null;
    id: string | null;
  }>({ name: null, id: null });

  const dispatch = useDispatch();
  const contextMenuIsOpen = useSelector(selectContextMenuStatus);

  const longPressHandle = useLongPress((event: any) => {
    console.log('event', event);
    const name = event.target.closest('li').getAttribute('name');
    const id = event.target.closest('li').getAttribute('id');

    setSelectCoordinates({
      top: event.changedTouches[0].clientY,
      left: event.changedTouches[0].clientX,
      right: null,
    });
    setSelectedCocktail({ name, id });

    dispatch(setContextMenuIsOpen(true));
    console.log('Long pressed!');
  });

  return (
    <>
      {isFetching && <Loader isLoading={isFetching} />}

      {visibleCocktails.length !== 0 && (
        <BarList>
          {visibleCocktails.map(
            ({
              title,
              description,
              ingredients,
              id,
              picture,
              iCan,
              favorite,
            }) => {
              const ingredientNames = ingredients.map(
                ingredient => ingredient.data.title,
              );

              return (
                <>
                  <ListItem
                    key={id}
                    id={id}
                    name={title}
                    allIngredientsAreAvailable={iCan}
                    {...longPressHandle()}
                  >
                    <Link to={`${id}`}>
                      <CocktailCard
                        isFavorite={favorite}
                        allAvailable={iCan}
                        name={title}
                        description={description}
                        imageUrl={picture}
                        ingredients={ingredientNames}
                      />
                    </Link>
                  </ListItem>
                </>
              );
            },
          )}
        </BarList>
      )}
      {(isMyCocktails || isAllCocktails) && visibleCocktails.length !== 0 && (
        <FollowUpMessage>
          <CocktailBottomMessage
            isMyCocktails={isMyCocktails}
            isAllCocktails={isAllCocktails}
          />
        </FollowUpMessage>
      )}
      <AnimatePresence>
        {contextMenuIsOpen && (
          <PopUp key="popUp" coordinates={selectCoordinates} type="context">
            <p>{selectedCocktail.name}</p>
            <p>remove from bar</p>
            <p>add to shopping list</p>
            <p>Delete from application</p>
            <p>Edit</p>
          </PopUp>
        )}
      </AnimatePresence>
    </>
  );
};

export default CocktailList;
