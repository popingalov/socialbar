import { FormStyled } from './CreateCocktail.styled';
import Input from 'components/UI-kit/form/input';
import Textarea from 'components/UI-kit/form/textarea/Textarea';
import FormButton from 'components/UI-kit/buttons/formButton';
import Box from 'components/box';
import { useGetGlassesQuery } from 'redux/api/manualApi';
import {
  ChangeEventHandler,
  FormEventHandler,
  MouseEventHandler,
  useEffect,
  useState,
} from 'react';
import InputFile from 'components/UI-kit/form/inputFile';
import { IRecipeIngredient } from 'types/recipeIngredient';
import Glass from './glass';
import { IGlass } from 'types/manual';
import Categories from './categories/Categories';
import Ingredients from './ingredients';
import { recipeIngredientHandlerType } from 'types/handleRecipeIngredient';
import { initialRecipeIngredient } from 'constants/initialRecipeIngredient';
import uuid from 'react-uuid';
import { ingredientRecipeSelectStatus } from 'types/ingredientRecipeSelectStatus';
import { initialIngredientRecipeSelectStatus } from 'constants/ingredientRecipeSelectStatus';

import {
  Formik,
  Form,
  Field,
  FieldArray,
  FormikValues,
  FormikHelpers,
  ErrorMessage,
} from 'formik';
import * as Yup from 'yup';

interface FormValues {
  //* name: string;
  //* cocktailImg: string;
  // glass: IGlass | undefined;
  // categories: never[];
  description: string;
  // recipe: string;
}

const CreateCocktail = () => {
  const [dataLS, setDataLS] = useState(null); // TODO: only for template LocalStorage
  const { data: glasses } = useGetGlassesQuery();
  const initialGlass = glasses?.find(({ title }) => title === 'Standard');

  // const firstIngredient = { ...initialRecipeIngredient, id: uuid() };
  const [categoriesSelectIsOpen, setCategoriesSelectIsOpen] = useState(false);

  const initialValues = {
    name: '',
    cocktailImg: '',
    // glass: initialGlass,
    // categories: [],
    description: '',
    recipe: '',
    // ingredients: [firstIngredient],
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    cocktailImg: Yup.mixed().required('Required'),
    // glass: Yup.object().required('Required'),
    // categories: Yup.array().min(1, 'Please select at least one category'),
    description: Yup.string().required('Required'),
    recipe: Yup.string().required('Required'),
    // ingredients: Yup.array()
    //   .of(
    //     Yup.object().shape({
    //       name: Yup.string().required('Required'),
    //       amount: Yup.string().required('Required'),
    //     }),
    //   )
    //   .min(1, 'Please add at least one ingredient'),
  });

  const handleSubmit = (
    values: FormValues,
    actions: FormikHelpers<FormValues>,
  ) => {
    // const { resetForm, setSubmitting } = actions;
    console.log('data all', values);
    // setSubmitting(true);
    // resetForm();
  };

  return (
    <>
      <Formik<FormValues>
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <FormStyled>
          <Box display="flex" alignItems="center" gridGap={2} mb={4}>
            <Input name="name" placeholder="create cocktail" />

            <InputFile name="cocktailImg" id="file" />
          </Box>

          <Textarea placeholder="1.Put some ice into a shaker" name="recipe" />
          <Textarea placeholder="cocktail description" name="description" />

          <FormButton>Save</FormButton>
        </FormStyled>
      </Formik>
    </>
  );
};

export default CreateCocktail;
