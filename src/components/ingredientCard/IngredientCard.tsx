import { ingredientFilterStatus } from 'redux/filter/filterConstants';

import { RxCross2 } from 'react-icons/rx';
import Checkbox from 'components/UI-kit/checkbox';
import Box from 'components/box';
import LowIcon from 'components/UI-kit/icons/lowIcon';
import IconButton from 'components/UI-kit/buttons/iconButton';
import { ExtraInfo, IngredientName } from './IngredientCard.styled';
// import fallback from 'assets/fallback.png';

interface IProps {
  filter: string;
  name: string;
  // isInShoppingList: boolean;
  // isInMyBar: boolean;
  id: string;
  imageUrl: string;
}

const IngredientCard: React.FC<IProps> = ({
  filter,
  name,
  // isInShoppingList,
  // isInMyBar,
  id,
  imageUrl,
}) => {
  // realize updating ingredient availability status - PUT
  // const [toggleAvailable, { isLoading: isUpdating }] =
  //   useToggleAvailableINgredientMutation();
  const isMyBar = filter === ingredientFilterStatus.myBarShelf;
  const isBarShelf = filter === ingredientFilterStatus.manageBarShelf;
  const isShoppingList = filter === ingredientFilterStatus.shoppingList;

  return (
    <Box position="relative" display="flex" alignItems="center">
      <img src={imageUrl} alt={name} width="32px" height="32px" />
      <Box marginRight="auto">
        <IngredientName>{name}</IngredientName>
        {(isBarShelf || isShoppingList) && (
          <ExtraInfo>is used in 6 cocktails</ExtraInfo>
        )}
      </Box>
      {isBarShelf && (
        // onChange={() => toggleAvailable(id)}
        // <Checkbox checked={isInMyBar} onChange={() => id} />
        <Checkbox checked={true} onChange={() => id} />
      )}
      {/* {(isMyBar || isBarShelf) && isInShoppingList && (
        <LowIcon type="ingredients" />
      )} */}
      {(isMyBar || isBarShelf) && true && <LowIcon type="ingredients" />}
      {isShoppingList && (
        <IconButton>
          <RxCross2 aria-label="delete" />
        </IconButton>
      )}
    </Box>
  );
};

export default IngredientCard;
