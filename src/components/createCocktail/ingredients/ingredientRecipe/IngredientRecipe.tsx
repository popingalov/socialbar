import Box from 'components/box';
import Checkbox from 'components/UI-kit/checkbox';
import Input from 'components/UI-kit/form/input';
import SecondaryButton from 'components/UI-kit/buttons/secondaryButton';
import { ChangeEventHandler, useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { recipeIngredientHandlerType } from 'types/handleRecipeIngredient';
import { IIngredientRecipeData } from 'types/ingredientRecipeData';
import {
  DeleteButton,
  MeasureBox,
  RecipeIngredient,
} from './IngredientRecipe.styled';
import FormSelect from 'components/UI-kit/form/formSelect';
import { measures } from 'constants/measures';
import Measures from './measure/Measures';
import { ingredientRecipeSelectStatus } from 'types/ingredientRecipeSelectStatus';
import Name from './name';

interface IProps {
  id: string;
  onChange: recipeIngredientHandlerType;
  deleteIngredient: (id: string) => void;
}

const IngredientRecipe: React.FC<IProps> = ({
  onChange,
  id,
  deleteIngredient,
}) => {
  const [name, setName] = useState('');
  const [measure, setMeasure] = useState('');
  const [garnish, setGarnish] = useState(false);
  const [optional, setOptional] = useState(false);
  const [measureType, setMeasureType] = useState('ml');

  const handleFieldChange: ChangeEventHandler<HTMLInputElement> = event => {
    const { value, name, checked } = event.target;
    const ingredientData: IIngredientRecipeData = {
      name,
      value: null,
      checked: null,
      id,
    };

    switch (name) {
      case 'name':
        setName(value);
        ingredientData.value = value;
        break;
      case 'measure':
        setMeasure(value);
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

  const handleSelect = (type: string, value: string) => {
    if (type === 'measureType') setMeasureType(value);

    const ingredientData: IIngredientRecipeData = {
      name: type,
      value: value,
      checked: null,
      id,
    };

    onChange(ingredientData);
  };

  return (
    <RecipeIngredient>
      <DeleteButton
        type="button"
        onClick={() => {
          deleteIngredient(id);
        }}
      >
        <RxCross2 aria-label="delete" />
      </DeleteButton>
      {/* <Name /> */}
      {/* <Name handleFieldChange={handleFieldChange} value={name} /> */}
      {/* <Measures
        handleFieldChange={handleFieldChange}
        handleSelect={handleSelect}
        measure={measure}
        measureTypes={measures}
        measureType={measureType}
      />
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
      </Box> */}
      {/* <SecondaryButton>Add substitute</SecondaryButton> */}
    </RecipeIngredient>
  );
};

export default IngredientRecipe;
