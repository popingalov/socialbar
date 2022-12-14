import BarList from 'components/barList';
import { useSelector } from 'react-redux';
import { selectCocktailFilter } from 'redux/filter/filterSelectors';
import CocktailCard from 'components/cocktailList/cocktailCard';
import { ListItem } from './CocktailList.styled';
import FollowUpMessage from 'components/UI-kit/followUpMessage';
import { cocktailFilterStatus } from 'redux/filter/filterConstants';
import CocktailBottomMessage from './cocktailBottomMessage';
import Loader from 'components/loader';
import { Link, useNavigate } from 'react-router-dom';
import { useGetVisibleCocktails } from 'hooks/useGetVisibleCocktails';
import { useLongPress } from 'use-long-press';
import { useState } from 'react';

import { setContextMenuIsOpen } from 'redux/modal/modalSlice';
import { AnimatePresence } from 'framer-motion';
import { selectContextMenuStatus } from 'redux/modal/modalSelectors';
import { useDispatch } from 'react-redux';
import PopUp from 'components/modal/popUp';
import ContextMenuCocktails from './contextMenu/ContextMenuCocktails';
import { useGetFilteredCocktails } from 'hooks/useGetFilteredCocktails';

const CocktailList = () => {
  const cocktailFilter = useSelector(selectCocktailFilter);
  const contextMenuIsOpen = useSelector(selectContextMenuStatus);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { visibleCocktails, isFetching } =
    useGetVisibleCocktails(cocktailFilter);
  const isMyCocktails = cocktailFilterStatus.myCocktails === cocktailFilter;
  const isAllCocktails = cocktailFilterStatus.allCocktails === cocktailFilter;
  const isFavoriteCocktails =
    cocktailFilterStatus.favoriteCocktails === cocktailFilter;
  // console.log('visibleCocktails', visibleCocktails);

  const filteredCocktails = useGetFilteredCocktails(visibleCocktails);
  // console.log('filteredCocktails', filteredCocktails);

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

  return (
    <>
      {isFetching && <Loader isLoading={isFetching} />}

      {filteredCocktails.length !== 0 && (
        <BarList>
          {filteredCocktails.map(
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
                <>
                  <ListItem
                    key={id}
                    id={id}
                    name={JSON.stringify({ title, favorite })}
                    allIngredientsAreAvailable={iCan}
                    onClick={id => {
                      navigate(`${id}`);
                    }}
                    {...longPressHandle()}
                  >
                    <CocktailCard
                      isFavorite={favorite}
                      allAvailable={iCan}
                      name={title}
                      description={description}
                      imageUrl={picture}
                      ingredients={ingredientNames}
                      lacks={lacks}
                    />
                  </ListItem>
                </>
              );
            },
          )}
        </BarList>
      )}
      {!isFetching && (isMyCocktails || isAllCocktails) && (
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
            {}
            <ContextMenuCocktails
              name={selectedCocktail.name}
              id={selectedCocktail.id}
              isFavoritePage={isFavoriteCocktails}
              isFavorite={selectedCocktail.isFavorite}
            />
          </PopUp>
        )}
      </AnimatePresence>
    </>
  );
};

export default CocktailList;
