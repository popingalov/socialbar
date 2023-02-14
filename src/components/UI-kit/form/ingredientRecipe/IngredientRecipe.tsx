import Box from 'components/box';
import Checkbox from 'components/UI-kit/checkbox';
import { ChangeEvent, ChangeEventHandler, useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import Input from '../input';
import { DeleteButton, RecipeIngredient } from './IngredientRecipe.styled';

interface IProps {
  index: number;
  onChange?: ({
    name,
    value,
    checked,
    index,
  }: {
    name: string;
    value: string;
    checked: boolean;
    index: number;
  }) => void;
}

const IngredientRecipe: React.FC<IProps> = ({ onChange, index }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [garnish, setGarnish] = useState(false);
  const [optional, setOptional] = useState(false);
  const [measure, setMeasure] = useState('');

  const handleIngredientName: ChangeEventHandler<HTMLInputElement> = event => {
    setName(event.target.value);
    if (onChange) {
      onChange({
        name: 'name',
        value: event.target.value,
        checked: false,
        index,
      });
    }
  };

  const handleQuantity: ChangeEventHandler<HTMLInputElement> = event => {
    setQuantity(event.target.value);
    if (onChange) {
      onChange({
        name: 'measure',
        value: event.target.value,
        checked: false,
        index,
      });
    }
  };

  const handleGarnish = (event: ChangeEvent<HTMLInputElement>) => {
    setGarnish(event.target.checked);
    if (onChange) {
      onChange({
        name: 'garnish',
        checked: event.target.checked,
        value: '',
        index,
      });
    }
  };

  const handleOptional = (event: ChangeEvent<HTMLInputElement>) => {
    setOptional(event.target.checked);
    if (onChange) {
      onChange({
        name: 'optional',
        checked: event.target.checked,
        value: '',
        index,
      });
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
        name="name"
        value={name}
      />
      <Box display="flex" alignItems="center" justifyItems="center" gridGap={2}>
        <Input
          placeholder=""
          changeInput={handleQuantity}
          name="quantity"
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
