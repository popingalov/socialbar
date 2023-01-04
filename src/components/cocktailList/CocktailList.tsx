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
import { useEffect, useState } from 'react';

import { setContextMenuIsOpen } from 'redux/modal/modalSlice';
import { AnimatePresence } from 'framer-motion';
import { selectContextMenuStatus } from 'redux/modal/modalSelectors';
import { useDispatch } from 'react-redux';
import PopUp from 'components/modal/popUp';

const CocktailList = () => {
  // const { data: cocktails, isFetching } = useFetchCocktailsQuery();
  const cocktailFilter = useSelector(selectCocktailFilter);
  const { visibleCocktails, isFetching } =
    useGetVisibleCocktails(cocktailFilter);
  const isMyCocktails = cocktailFilterStatus.myCocktails === cocktailFilter;
  const isAllCocktails = cocktailFilterStatus.allCocktails === cocktailFilter;
  // console.log('visibleCocktails', visibleCocktails);

  const [mousePos, setMousePos] = useState<ICoordinates>({
    top: null,
    left: null,
    right: null,
  });
  const dispatch = useDispatch();
  const contextMenuIsOpen = useSelector(selectContextMenuStatus);

  //  const [selectCoordinates, setSelectCoordinates] = useState<ICoordinates>({
  //    top: null,
  //    left: null,
  //    right: null,
  //  });

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      console.log('event', event);
      setMousePos({ left: event.clientX, top: event.clientY, right: null });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const longPressHandle = useLongPress(event => {
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
                <ListItem
                  key={id}
                  allIngredientsAreAvailable={iCan}
                  {...longPressHandle()}
                >
                  <Link to={`${id}`}>
                    <CocktailCard
                      isFavorite={favorite}
                      allIngredientsAreAvailable={iCan}
                      name={title}
                      description={description}
                      imageUrl={picture}
                      ingredients={ingredientNames}
                    />
                  </Link>
                </ListItem>
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
          <PopUp key="popUp" coordinates={mousePos} type="context">
            <p>pop up</p>
          </PopUp>
        )}
      </AnimatePresence>
    </>
  );
};

export default CocktailList;
