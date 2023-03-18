import Box from 'components/box';
import Checkbox from 'components/UI-kit/checkbox';
import { ExtraInfo, IngredientName } from './IngredientCard.styled';
import { ingredientFilterStatus } from 'redux/filter/filterConstants';
import IconButton from 'components/UI-kit/buttons/iconButton';
import LowIcon from 'components/UI-kit/icons/lowIcon';
import { RxCross2 } from 'react-icons/rx';
import {
  useAddToBarMutation,
  useDeleteFromBarMutation,
} from 'redux/api/myBarApi';
import { useDeleteFromShoppingMutation } from 'redux/api/shoppingApi';

interface IProps {
  filter?: string;
  name: string;
  isInShoppingList: boolean;
  isInMyBar: boolean;
  id: string;
  imageUrl: string;
  usedIn: string[];
}

const IngredientCard: React.FC<IProps> = ({
  filter,
  name,
  isInShoppingList,
  isInMyBar,
  id,
  imageUrl,
  usedIn,
}) => {
  const [addToMyBar, { isLoading: adding }] = useAddToBarMutation();
  const [deleteFromMyBar, { isLoading: deletingFromMyBar }] =
    useDeleteFromBarMutation();
  const [deleteFromShoppingList, { isLoading: deletingFromShopping }] =
    useDeleteFromShoppingMutation();

  const isMyBar = filter === ingredientFilterStatus.myBarShelf;
  const isBarShelf = filter === ingredientFilterStatus.manageBarShelf;
  const isShoppingList = filter === ingredientFilterStatus.shoppingList;

  const toggleCheckBox = (isInMyBar: boolean, id: string) => {
    if (isInMyBar) {
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
      <Box marginRight="auto" flex={1}>
        <IngredientName>{name}</IngredientName>
        {(isBarShelf || isShoppingList) && (
          <ExtraInfo>
            {usedIn.length === 0 && `is not used in cocktails yet`}
            {usedIn.length === 1 && `is used in ${usedIn[0]}`}
            {usedIn.length > 1 && `is used in ${usedIn.length} cocktails`}
          </ExtraInfo>
        )}
      </Box>
      {isBarShelf && (
        <Checkbox
          checked={isInMyBar}
          onChange={() => {
            toggleCheckBox(isInMyBar, id);
          }}
        />
      )}
      {(isMyBar || isBarShelf) && isInShoppingList && (
        <LowIcon type="ingredients" />
      )}
      {isShoppingList && (
        <IconButton onClick={() => deleteFromShoppingList(id)}>
          <RxCross2 aria-label="delete" />
        </IconButton>
      )}
    </Box>
  );
};

export default IngredientCard;
