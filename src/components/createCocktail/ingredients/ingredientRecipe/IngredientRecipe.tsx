import Box from 'components/box';
import Checkbox from 'components/UI-kit/checkbox';
import SecondaryButton from 'components/UI-kit/buttons/secondaryButton';
import { ChangeEventHandler, useEffect, useRef, useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { DeleteButton, RecipeIngredient } from './IngredientRecipe.styled';
import { measures } from 'constants/measures';
import Measures from './measure/Measures';
import Name from './name';
import { IRecipeIngredient } from 'types/recipeIngredient';
import Substitute from './substitute';

interface IProps {
  id: string;
  onChange: any;
  deleteIngredient: (id: string) => void;
}

const initialIngredient: IRecipeIngredient = {
  name: '',
  measure: '',
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
  const [substituteIsOpen, setSubstituteIsOpen] = useState(false);
  const [substituteCoordinates, setSubstituteCoordinates] =
    useState<ICoordinates>({
      top: null,
      left: null,
      right: null,
    });
  const ref = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (ref.current) ref.current.focus();

    window.addEventListener('resize', getCoordinates);

    function getCoordinates() {
      if (ref.current) {
        const { top, left, right, height } =
          ref.current.getBoundingClientRect();
        setSubstituteCoordinates({ top: top + height, left, right });
      }
    }
    getCoordinates();

    return () => window.removeEventListener('resize', getCoordinates);
  }, []);

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

  const handleIngredientChoose = ({
    title,
    id,
  }: {
    title: string;
    id: string;
  }) => {
    setIngredient(state => {
      state.name = title;
      state.ingredientId = id;
      // onChange(state);
      return state;
    });
    onChange(ingredient);
  };

  const handleSubstituteChoose = () => {};

  const { garnish, measure, measureType, optional } = ingredient;
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
      <Name onChoose={handleIngredientChoose} />
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
      <SecondaryButton
        ref={ref}
        onClick={() => {
          setSubstituteIsOpen(true);
        }}
      >
        Add substitute
      </SecondaryButton>
      <Substitute
        coordinates={substituteCoordinates}
        onChoose={handleSubstituteChoose}
        substituteIsOpen={substituteIsOpen}
        closeSubstituteSelect={() => {
          setSubstituteIsOpen(false);
        }}
      />
    </RecipeIngredient>
  );
};

export default IngredientRecipe;

// interface IInitIng {
//   [key: string]: any;
//   name: string;
//   measure: string;
//   garnish: boolean;
//   optional: boolean;
//   measureType: string;
//   id: string;
//   ingredientId: string;
// }
