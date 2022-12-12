import { useState } from 'react';
import { ingredientFilterStatus } from 'redux/filter/filterConstants';
import { SlBasket } from 'react-icons/sl';
import { RxCross2 } from 'react-icons/rx';
import { theme } from 'constants/theme';
import { Checkbox } from 'components/checkbox/Checkbox';

interface IProps {
  filter: string;
  name: string;
}

export const IngredientCard: React.FC<IProps> = ({ filter, name }) => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <p>{name}</p>
      {(filter === ingredientFilterStatus.manageBarShelf ||
        filter === ingredientFilterStatus.shoppingList) && (
        <p>is used in 6 cocktails</p>
      )}
      {filter === ingredientFilterStatus.manageBarShelf && (
        <Checkbox
          checked={checked}
          onChange={e => setChecked(e.target.checked)}
        />
      )}
      {(filter === ingredientFilterStatus.myBarShelf ||
        filter === ingredientFilterStatus.manageBarShelf) && (
        <SlBasket color={theme.colors.accent} />
      )}
      {filter === ingredientFilterStatus.shoppingList && (
        <RxCross2 color={theme.colors.accent} />
      )}
    </>
  );
};
