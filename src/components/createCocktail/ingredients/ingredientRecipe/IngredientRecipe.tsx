import Box from 'components/box';
import Checkbox from 'components/UI-kit/checkbox';
import Input from 'components/UI-kit/form/input';
import SecondaryButton from 'components/UI-kit/form/secondaryButton';
import { ChangeEventHandler, useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { recipeIngredientHandlerType } from 'types/handleRecipeIngredient';
import { IIngredientRecipeData } from 'types/ingredientRecipeData';
import { DeleteButton, RecipeIngredient } from './IngredientRecipe.styled';

interface IProps {
  index: number;
  onChange: recipeIngredientHandlerType;
}

const IngredientRecipe: React.FC<IProps> = ({ onChange, index }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [garnish, setGarnish] = useState(false);
  const [optional, setOptional] = useState(false);
  // const [measure, setMeasure] = useState('');

  const handleFieldChange: ChangeEventHandler<HTMLInputElement> = event => {
    const { value, name, checked } = event.target;
    const ingredientData: IIngredientRecipeData = {
      name,
      value: null,
      checked: null,
      index,
    };

    switch (name) {
      case 'name':
        setName(value);
        ingredientData.value = value;
        break;
      case 'quantity':
        setQuantity(value);
        ingredientData.value = value;
        break;
      case 'garnish':
        setGarnish(checked);
        ingredientData.checked = checked;
        break;
      case 'optional':
        setOptional(checked);
        ingredientData.checked = checked;
        break;
      default:
        break;
    }

    onChange(ingredientData);
  };

  return (
    <RecipeIngredient>
      <DeleteButton onClick={() => {}}>
        <RxCross2 aria-label="delete" />
      </DeleteButton>
      <Input
        placeholder="Name"
        changeInput={handleFieldChange}
        name="name"
        value={name}
        isRecipeIngredient={true}
      />

      <Box
        display="flex"
        alignItems="center"
        justifyItems="center"
        gridGap={2}
        maxWidth="80px"
      >
        <Input
          placeholder=""
          changeInput={handleFieldChange}
          name="quantity"
          value={quantity}
          isRecipeIngredient={true}
        />
        <span>ml</span>
      </Box>
      <Box display="flex" gridGap={3}>
        <Checkbox
          name="garnish"
          checked={garnish}
          onChange={handleFieldChange}
          label="Garnish"
        />
        <Checkbox
          name="optional"
          checked={optional}
          onChange={handleFieldChange}
          label="Optional"
        />
      </Box>
      <SecondaryButton>Add substitute</SecondaryButton>
    </RecipeIngredient>
  );
};

export default IngredientRecipe;
