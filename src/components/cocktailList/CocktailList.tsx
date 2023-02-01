import BarList from 'components/barList/BarList';
import { ICocktail } from 'types/cocktail';
import { ListItem } from './CocktailList.styled';
import CocktailCard from './cocktailCard/CocktailCard';
import { useNavigate } from 'react-router';
import { AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import {
  selectContextMenuStatus,
  selectPopUpStatus,
} from 'redux/modal/modalSelectors';
import { setContextMenuIsOpen } from 'redux/modal/modalSlice';
import { useLongPress } from 'use-long-press';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PopUp from 'components/modal/popUp';
import ContextMenuCocktails from './contextMenu/ContextMenuCocktails';

interface IProps {
  cocktails: ICocktail[];
  isFavoritePage?: boolean;
  inIngredientCard?: boolean;
}

const CocktailList: React.FC<IProps> = ({
  cocktails,
  isFavoritePage = false,
  inIngredientCard = false,
}) => {
  const contextMenuIsOpen = useSelector(selectContextMenuStatus);
  const isSearchOpen = useSelector(selectPopUpStatus);

  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const handleClick = (id: string) => {
    if (isSearchOpen) return;

    if (inIngredientCard) {
      navigate(`/cocktails/${id}`);
      return;
    }

    navigate(`${id}`);
  };

  return (
    <>
      <BarList>
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
                onClick={() => handleClick(id)}
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
