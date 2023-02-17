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
import FormSelect from 'components/UI-kit/form/formSelect/FormSelect';
import SecondaryButton from 'components/UI-kit/buttons/secondaryButton/SecondaryButton';
import IngredientRecipe from './ingredients/ingredientRecipe/IngredientRecipe';

interface FormValues {
  name: string;
  cocktailImg: string;
  glass: IGlass | undefined;
  description: string;
  recipe: string;
  categories: string[];

  // [key: string]: string | undefined;
  // additionalFields: {
  //   [key: string]: string;
  // };
}

const CreateCocktail = () => {
  // const [dataLS, setDataLS] = useState(null); // TODO: only for template LocalStorage
  const { data: glasses } = useGetGlassesQuery();
  const initialGlass = glasses?.find(({ title }) => title === 'Standard');
  const [glass, setGlass] = useState<IGlass | null>(null);
  const [categories, setCategories] = useState<string[]>([]);

  const [categoriesSelectIsOpen, setCategoriesSelectIsOpen] = useState(false);
  const firstIngredient = { ...initialRecipeIngredient, id: uuid() };
  const [ingredients, setIngredients] = useState<IRecipeIngredient[]>([
    firstIngredient,
  ]);

  useEffect(() => {
    if (initialGlass) setGlass(initialGlass);
  }, [initialGlass]);

  const initialValues = {
    name: '',
    cocktailImg: '',
    glass: initialGlass,
    categories: [],
    description: '',
    recipe: '',
    // ingredients: [firstIngredient],
    // additionalFields: {},
  };

  const validationSchema = Yup.object().shape({
    // name: Yup.string().required('Required'),
    // cocktailImg: Yup.mixed().required('Required'),
    // glass: Yup.object().required('Required'),
    // categories: Yup.array().min(1, 'Please select at least one category'),
    // description: Yup.string().required('Required'),
    // recipe: Yup.string().required('Required'),
    // ingredients: Yup.array().min(1, 'Please add at least one ingredient'),
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

  const handleRecipeIngredient: recipeIngredientHandlerType = ({
    id,
    name,
    value,
    checked,
  }) => {
    setIngredients(prevState =>
      prevState.map(ingredient => {
        if (ingredient.id === id) {
          ingredient[name] = value ? value : checked;
        }
        return ingredient;
      }),
    );
  };

  const addIngredient = () => {
    let newIngredient = { ...initialRecipeIngredient, id: uuid() };
    setIngredients([...ingredients, newIngredient]);
  };

  const deleteIngredient = (id: string) => {
    setIngredients(prevState =>
      prevState.filter(ingredient => ingredient.id !== id),
    );
  };

  return (
    <>
      {glass && (
        <Formik<FormValues>
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, handleChange, handleBlur }) => (
            <FormStyled>
              <Box display="flex" alignItems="center" gridGap={2}>
                <Input name="name" placeholder="create cocktail" />
                <InputFile name="cocktailImg" id="file" />
              </Box>

              <Glass
                currentGlass={glass}
                onChoose={(glass: IGlass) => {
                  setGlass(glass);
                  handleChange({ target: { name: 'glass', value: glass } });
                }}
              />

              <Categories
                categoriesSelectIsOpen={categoriesSelectIsOpen}
                openSelect={() => {
                  setCategoriesSelectIsOpen(true);
                }}
                closeSelect={() => {
                  setCategoriesSelectIsOpen(false);
                }}
                categories={categories}
                handleCategorySelect={(type: string, value: string) => {
                  if (categories.includes(value)) {
                    return;
                  }
                  setCategories(prevState => [...prevState, value]);
                  handleChange({
                    target: {
                      name: 'categories',
                      value: [...values.categories, value],
                    },
                  });
                }}
              />
              <Textarea placeholder="cocktail description" name="description" />
              <Textarea
                placeholder="1.Put some ice into a shaker"
                name="recipe"
              />

              {ingredients.map(({ id }) => {
                return (
                  <IngredientRecipe
                    key={id}
                    id={id}
                    onChange={handleRecipeIngredient}
                    deleteIngredient={deleteIngredient}
                  />
                );
              })}
              <SecondaryButton onClick={addIngredient}>
                Add ingredient
              </SecondaryButton>

              <FormButton>Save</FormButton>
            </FormStyled>
          )}
        </Formik>
      )}
    </>
  );
};

export default CreateCocktail;
