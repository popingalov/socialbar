import { ingredientFilterStatus } from 'redux/filter/filterConstants';
import { RxCross2 } from 'react-icons/rx';
import Checkbox from 'components/UI-kit/checkbox';
import Box from 'components/box';
import LowIcon from 'components/UI-kit/lowIcon';
import IconButton from 'components/UI-kit/buttons/iconButton';
// import fallback from 'assets/fallback.png';

interface IProps {
  filter: string;
  name: string;
  isInShoppingList: boolean;
  isInMyBar: boolean;
  id: string;
  imageUrl: string;
}

const IngredientCard: React.FC<IProps> = ({
  filter,
  name,
  isInShoppingList,
  isInMyBar,
  id,
  imageUrl,
}) => {
  // realize updating ingredient availability status - PATCH
  // const [toggleAvailable, { isLoading: isUpdating }] =
  //   useToggleAvailableINgredientMutation();

  return (
    <Box position="relative" display="flex" alignItems="center">
      <img src={imageUrl} alt="cocktail" width="32px" height="32px" />
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

export default IngredientCard;
