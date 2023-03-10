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
import { useAddCocktailMutation } from 'redux/api/cocktailApi';

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
  const [fetchCocktail] = useAddCocktailMutation();

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
    console.log('ingredients', ingredients);
    // setSubmitting(true);
    // resetForm();
    // const cocktail = new FormData();

    // fetchCocktail(cocktail);
  };

  const handleRecipeIngredient: recipeIngredientHandlerType = ing => {
    console.log('tyt', ing.id);

    setIngredients(prevState => {
      const newState = prevState.map(ingredient => {
        if (ingredient.id === ing.id) {
          return ing;
        }
        return ingredient;
      });

      return newState;
    });
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
          {({ values, errors, touched, handleChange, handleBlur }) => {
            return (
              <>
                {values.glass && (
                  <FormStyled>
                    <Box display="flex" alignItems="center" gridGap={2}>
                      <Input name="name" placeholder="create cocktail" />
                      <InputFile name="cocktailImg" id="file" />
                    </Box>

                    <Glass
                      currentGlass={values.glass}
                      onChoose={(glass: IGlass) => {
                        handleChange({
                          target: { name: 'glass', value: glass },
                        });
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
                    <Textarea
                      placeholder="cocktail description"
                      name="description"
                    />
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
              </>
            );
          }}
        </Formik>
      )}
    </>
  );
};

export default CreateCocktail;

/**
 * import { Formik, Field, FieldArray } from 'formik';

function MyForm() {
  return (
    <Formik
      initialValues={{ mainField: '', subFields: [] }}
      onSubmit={values => console.log(values)}
    >
      {formik => (
        <form onSubmit={formik.handleSubmit}>
          <Field name="mainField" />
          <FieldArray name="subFields">
            {arrayHelpers => (
              <>
                {formik.values.subFields.map((subField, index) => (
                  <div key={index}>
                    <Field name={`subFields.${index}.subField1`} />
                    <Field name={`subFields.${index}.subField2`} />
                  </div>
                ))}
                <button type="button" onClick={() => arrayHelpers.push({ subField1: '', subField2: '' })}>
                  Add Sub-Field
                </button>
              </>
            )}
          </FieldArray>
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
}
In this example, the subFields array is managed by the FieldArray component. Each item in the array represents a sub-form with two fields (subField1 and subField2). When the "Add Sub-Field" button is clicked, a new empty sub-form is added to the array. The name attribute of the Field components is set to a string that includes the index of the sub-form in the subFields array, so that Formik can correctly manage the nested state.

Note that this example does not actually nest a <form> element inside another <form> element. Instead, the sub-forms are rendered as groups of fields within the main form. This approach should work for most use cases where you need to create nested forms.





 */
