import { useState } from 'react';
import { ingredientFilterStatus } from 'redux/filter/filterConstants';
import { RxCross2 } from 'react-icons/rx';
import { Checkbox } from 'components/checkbox/Checkbox';
import { Box } from 'components/box/Box';
import { LowIcon } from 'components/lowIcon/LowIcon';
import { IconButton } from 'components/iconButton/IconButton';

interface IProps {
  filter: string;
  name: string;
}

export const IngredientCard: React.FC<IProps> = ({ filter, name }) => {
  const [checked, setChecked] = useState(false);

  return (
    <Box position="relative" display="flex" alignItems="center">
      <img
        src="./cocktailFallback.png"
        alt="cocktail"
        width="32px"
        height="32px"
      />
      <Box marginRight="auto">
        <p>{name}</p>
        {(filter === ingredientFilterStatus.manageBarShelf ||
          filter === ingredientFilterStatus.shoppingList) && (
          <p>is used in 6 cocktails</p>
        )}
      </Box>
      {filter === ingredientFilterStatus.manageBarShelf && (
        <Checkbox
          checked={checked}
          onChange={e => setChecked(e.target.checked)}
        />
      )}
      {(filter === ingredientFilterStatus.myBarShelf ||
        filter === ingredientFilterStatus.manageBarShelf) && (
        <LowIcon type="ingredients" />
      )}
      {filter === ingredientFilterStatus.shoppingList && (
        <IconButton>
          <RxCross2 aria-label="delete" />
        </IconButton>
      )}
    </Box>
  );
};
