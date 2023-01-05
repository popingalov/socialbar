import { ingredientFilterStatus } from 'redux/filter/filterConstants';

import { RxCross2 } from 'react-icons/rx';
import Checkbox from 'components/UI-kit/checkbox';
import Box from 'components/box';
import LowIcon from 'components/UI-kit/icons/lowIcon';
import IconButton from 'components/UI-kit/buttons/iconButton';
import { ExtraInfo, IngredientName } from './IngredientCard.styled';
import {
  useAddToBarMutation,
  useDeleteFromBarMutation,
} from 'redux/api/myBarApi';
import { useDeleteFromShoppingMutation } from 'redux/api/shoppingApi';
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
  const [addToMyBar, { isLoading: adding }] = useAddToBarMutation();
  const [deleteFromMyBar, { isLoading: deletingFromMyBar }] =
    useDeleteFromBarMutation();
  const [deleteFromShoppingList, { isLoading: deletingFromShopping }] =
    useDeleteFromShoppingMutation();

  const isMyBar = filter === ingredientFilterStatus.myBarShelf;
  const isBarShelf = filter === ingredientFilterStatus.manageBarShelf;
  const isShoppingList = filter === ingredientFilterStatus.shoppingList;

  const toggleCheckBox = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string,
  ) => {
    console.log('id', id);
    console.log('event', event.target.checked);

    const isChecked = event.target.checked;

    if (isChecked) {
      console.log('deleteFromMyBar');
      deleteFromMyBar(id);
      return;
    }

    console.log('addtoMyBAr');
    addToMyBar(id);
  };

  return (
    <Box position="relative" display="flex" alignItems="center">
      <img src={imageUrl} alt={name} width="32px" height="32px" />
      <Box marginRight="auto">
        <IngredientName>{name}</IngredientName>
        {(isBarShelf || isShoppingList) && (
          <ExtraInfo>is used in ... cocktails</ExtraInfo>
        )}
      </Box>
      {isBarShelf && (
        <Checkbox
          checked={isInMyBar}
          onChange={event => {
            toggleCheckBox(event, id);
          }}
        />
      )}
      {(isMyBar || isBarShelf) && isInShoppingList && (
        <LowIcon type="ingredients" />
      )}
      {isShoppingList && (
        <IconButton
          removeItem={() => {
            console.log('deleting');
            deleteFromShoppingList(id);
          }}
        >
          <RxCross2 aria-label="delete" />
        </IconButton>
      )}
    </Box>
  );
};

export default IngredientCard;
