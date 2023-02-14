import { FormStyled } from './CreateCocktail.styled';
import Input from 'components/UI-kit/form/input';
import Textarea from 'components/UI-kit/form/textarea/Textarea';
import FormButton from 'components/UI-kit/buttons/formButton';
import Box from 'components/box';
import Select from 'components/UI-kit/select';
import { useGetCategoriesQuery } from 'redux/api/manualApi';
import { useState } from 'react';

const CreateCocktail = () => {
  const { data } = useGetCategoriesQuery();
  const cocktailCategories = data?.cocktails.map(({ title }) => title);
  const [category, setCategory] = useState('Nothing choosed');

  const handleSelect = (value: string) => {
    console.log(value);
    setCategory(value);
  };

  return (
    <FormStyled>
      <Input
        changeInput={() => {}}
        placeholder="Create cocktail"
        name="cocktail"
        value=""
      />
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
        changeInput={() => {}}
        placeholder="cocktail description"
        value=""
        name="cocktailDescription"
      />

      <label htmlFor="cocktailRecipe">Preparation steps</label>
      <Textarea
        changeInput={() => {}}
        placeholder="1.Put some ice into a shaker"
        value=""
        name="cocktailRecipe"
      />

      <FormButton onClick={() => {}}>Save</FormButton>
    </FormStyled>
  );
};

export default CreateCocktail;
