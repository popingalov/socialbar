import { ingredientFilterStatus } from 'redux/filter/filterConstants';
import { RxCross2 } from 'react-icons/rx';
import { Checkbox } from 'components/checkbox/Checkbox';
import { Box } from 'components/box/Box';
import { LowIcon } from 'components/lowIcon/LowIcon';
import { IconButton } from 'components/iconButton/IconButton';
import fallback from '../../assets/fallback.png';

interface IProps {
  filter: string;
  name: string;
  isInShoppingList: boolean;
  isInMyBar: boolean;
  id: string;
}

export const IngredientCard: React.FC<IProps> = ({
  filter,
  name,
  isInShoppingList,
  isInMyBar,
  id,
}) => {
  // realize updating ingredient availability status - PATCH
  // const [toggleAvailable, { isLoading: isUpdating }] =
  //   useToggleAvailableINgredientMutation();

  return (
    <Box position="relative" display="flex" alignItems="center">
      <img src={fallback} alt="cocktail" width="32px" height="32px" />
      <Box marginRight="auto">
        <p>{name}</p>
        {(filter === ingredientFilterStatus.manageBarShelf ||
          filter === ingredientFilterStatus.shoppingList) && (
          <p>is used in 6 cocktails</p>
        )}
      </Box>
      {filter === ingredientFilterStatus.manageBarShelf && (
        // onChange={() => toggleAvailable(id)}
        <Checkbox checked={isInMyBar} onChange={() => id} />
      )}
      {(filter === ingredientFilterStatus.myBarShelf ||
        filter === ingredientFilterStatus.manageBarShelf) &&
        isInShoppingList && <LowIcon type="ingredients" />}
      {filter === ingredientFilterStatus.shoppingList && (
        <IconButton>
          <RxCross2 aria-label="delete" />
        </IconButton>
      )}
    </Box>
  );
};
