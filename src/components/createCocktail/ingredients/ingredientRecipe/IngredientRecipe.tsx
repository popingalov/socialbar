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
import { IRecipeIngredient } from 'types/recipeIngredient';

interface IProps {
  id: string;
  onChange: any;
  deleteIngredient: (id: string) => void;
}
interface IInitIng {
  [key: string]: any;
  name: string;
  measure: string;
  garnish: boolean;
  optional: boolean;
  measureType: string;
  id: string;
  ingredientId: string;
}
const initialIngredient: IRecipeIngredient = {
  name: '',
  measure: '10',
  garnish: false,
  optional: false,
  measureType: 'ml',
  id: '',
  ingredientId: '',
};
const IngredientRecipe: React.FC<IProps> = ({
  onChange,
  id,
  deleteIngredient,
}) => {
  const [ingredient, setIngredient] = useState<IRecipeIngredient>({
    ...initialIngredient,
    id,
  });

  const handleFieldChange: ChangeEventHandler<HTMLInputElement> = event => {
    const { value, name, checked } = event.target;

    const testOnChecked = value === 'iChecked';
    setIngredient(state => {
      state[name] = !testOnChecked ? value : checked;
      // onChange(state);
      return state;
    });
    onChange(ingredient);
  };

  const helperHandler: ChangeEventHandler<HTMLInputElement> = event => {
    event.target.value = 'iChecked';
    handleFieldChange(event);
  };

  const handleSelect = (type: string, value: string) => {
    if (type === 'measureType')
      setIngredient(state => {
        state[type] = value;
        // onChange(state);
        return state;
      });
    onChange(ingredient);
  };

  function handleChose({ title, id }: { title: string; id: string }) {
    setIngredient(state => {
      state.name = title;
      state.ingredientId = id;
      // onChange(state);
      return state;
    });
    onChange(ingredient);
  }
  const { garnish, measure, measureType, name, optional } = ingredient;
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
      <Name onChose={handleChose} />
      {/* <Name handleFieldChange={handleFieldChange} value={name} /> */}
      <Measures
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
          onChange={helperHandler}
          label="Garnish"
        />
        <Checkbox
          name="optional"
          checked={optional}
          onChange={helperHandler}
          label="Optional"
        />
      </Box>
      <SecondaryButton>Add substitute</SecondaryButton>
    </RecipeIngredient>
  );
};

export default IngredientRecipe;
