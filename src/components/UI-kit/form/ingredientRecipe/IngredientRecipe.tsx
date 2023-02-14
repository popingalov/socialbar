import Box from 'components/box';
import Checkbox from 'components/UI-kit/checkbox';
import { ChangeEvent, ChangeEventHandler, useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import Input from '../input';
import { DeleteButton, RecipeIngredient } from './IngredientRecipe.styled';

interface IProps {
  state: string;
  onChange?: ({
    name,
    value,
    checked,
  }: {
    name: string;
    value: string;
    checked: boolean;
  }) => void;
}

const IngredientRecipe: React.FC<IProps> = ({ state, onChange }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [garnish, setGarnish] = useState(false);
  const [optional, setOptional] = useState(false);

  const handleIngredientName: ChangeEventHandler<HTMLInputElement> = event => {
    setName(event.target.value);
    if (onChange) {
      onChange({ name: 'name', value: event.target.value, checked: false });
    }
  };

  const handleQuantity: ChangeEventHandler<HTMLInputElement> = event => {
    setQuantity(event.target.value);
    if (onChange) {
      onChange({ name: 'measure', value: event.target.value, checked: false });
    }
  };

  const handleGarnish = (event: ChangeEvent<HTMLInputElement>) => {
    setGarnish(event.target.checked);
    if (onChange) {
      onChange({ name: 'garnish', checked: event.target.checked, value: '' });
    }
  };

  const handleOptional = (event: ChangeEvent<HTMLInputElement>) => {
    setOptional(event.target.checked);
    if (onChange) {
      onChange({ name: 'optional', checked: event.target.checked, value: '' });
    }
  };

  return (
    <RecipeIngredient>
      <DeleteButton onClick={() => {}}>
        <RxCross2 aria-label="delete" />
      </DeleteButton>
      <Input
        placeholder="Name"
        changeInput={handleIngredientName}
        name="ingredientName"
        value={name}
      />
      <Box display="flex" alignItems="center" justifyItems="center" gridGap={2}>
        <Input
          placeholder=""
          changeInput={handleQuantity}
          name="measure"
          value={quantity}
        />
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          gridGap={5}
        >
          <span>ml</span>
          <button>Choose</button>
        </Box>
      </Box>
      <Box display="flex" gridGap={3}>
        <Checkbox checked={garnish} onChange={handleGarnish} label="Garnish" />
        <Checkbox
          checked={optional}
          onChange={handleOptional}
          label="Optional"
        />
      </Box>
      <button>Add substitute</button>
    </RecipeIngredient>
  );
};

export default IngredientRecipe;
