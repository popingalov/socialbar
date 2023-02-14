import { FormStyled } from './CreateCocktail.styled';
import Input from 'components/UI-kit/form/input';
import Textarea from 'components/UI-kit/form/textarea/Textarea';
import FormButton from 'components/UI-kit/buttons/formButton';
import Box from 'components/box';
import Select from 'components/UI-kit/select';
import { useGetCategoriesQuery } from 'redux/api/manualApi';
import { ChangeEventHandler, useState } from 'react';
import IngredientRecipe from 'components/UI-kit/form/ingredientRecipe';
import InputFile from 'components/UI-kit/form/inputFile';

const CreateCocktail = () => {
  const { data } = useGetCategoriesQuery();
  const cocktailCategories = data?.cocktails.map(({ title }) => title);
  const [cocktailName, setCocktailName] = useState('');
  const [category, setCategory] = useState('Nothing choosed');
  const [description, setDescription] = useState('');
  const [preparation, setPreparation] = useState('');
  const [recipeIngredient, setRecipeIngredient] = useState('');

  const handleChangeCocktailName: ChangeEventHandler<
    HTMLInputElement
  > = event => {
    setCocktailName(event.target.value);
  };
  const handleSelect = (value: string) => {
    console.log(value);
    setCategory(value);
  };

  const handleDescription: ChangeEventHandler<HTMLTextAreaElement> = event => {
    setDescription(event.target.value);
  };

  const handlePreparationSteps: ChangeEventHandler<
    HTMLTextAreaElement
  > = event => {
    setPreparation(event.target.value);
  };

  const handleRecipeIngredient = ({
    name,
    value,
    checked,
  }: {
    name: string;
    value: string;
    checked: boolean;
  }) => {
    console.log(name, value, checked);
    // setRecipeIngredient;
  };

  return (
    <FormStyled>
      <Box display="flex" alignItems="center" gridGap={2} mb={4}>
        <Input
          changeInput={handleChangeCocktailName}
          placeholder="Create cocktail"
          name="cocktail"
          value={cocktailName}
        />
        <InputFile changeInput={() => {}} name="ingredientImg" id="file" />
      </Box>
      <Box>Glass - should be pop-up</Box>
      <Box display="flex" gridGap={4} alignItems="center" mb={4}>
        <p>Category:</p>
        {cocktailCategories && (
          <Select
            label={category}
            options={cocktailCategories}
            onChange={handleSelect}
          />
        )}
      </Box>
      <Textarea
        changeInput={handleDescription}
        placeholder="cocktail description"
        value={description}
        name="cocktailDescription"
      />

      <Textarea
        label="Preparation steps"
        changeInput={handlePreparationSteps}
        placeholder="1.Put some ice into a shaker"
        value={preparation}
        name="cocktailRecipe"
      />

      <IngredientRecipe
        state={recipeIngredient}
        onChange={handleRecipeIngredient}
      />
      <FormButton onClick={() => {}}>Save</FormButton>
    </FormStyled>
  );
};

export default CreateCocktail;
