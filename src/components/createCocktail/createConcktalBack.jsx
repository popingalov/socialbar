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

const CreateCocktail = () => {
  const [dataLS, setDataLS] = useState(null); // TODO: only for template LocalStorage
  const { data: glasses } = useGetGlassesQuery();

  const initialGlass = glasses?.find(({ title }) => title === 'Standard');
  const [name, setName] = useState('');
  const [cocktailImg, setCocktailImg] = useState<File | null>(null);
  const [glass, setGlass] = useState<IGlass | null>(null);
  const [categories, setCategories] = useState<string[]>([]);
  const [description, setDescription] = useState('');
  const [recipe, setRecipe] = useState('');
  const firstIngredient = { ...initialRecipeIngredient, id: uuid() };
  const [ingredients, setIngredients] = useState<IRecipeIngredient[]>([
    firstIngredient,
  ]);

  const [categoriesSelectIsOpen, setCategoriesSelectIsOpen] = useState(false);

  useEffect(() => {
    if (initialGlass) setGlass(initialGlass);
  }, [initialGlass]);

  useEffect(() => {
    // Перевірка локального сховища при монтуванні компонента
    const storedData = localStorage.getItem('myData');
    // console.log('storedData', storedData);
    if (storedData) {
      setDataLS(JSON.parse(storedData));
    }

    // Повертаємо колбек-функцію, яка виконається при демонтажі компонента
    return () => {
      // Збереження даних в локальному сховищі при демонтажі компонента
      if (dataLS) {
        localStorage.setItem('myData', JSON.stringify(dataLS));
      }
    };
  }, [dataLS]); // Потрібно вказати data, щоб useEffect відслідковував його зміни

  const handleChangeName: ChangeEventHandler<HTMLInputElement> = event => {
    setName(event.target.value);
  };

  const handleImgChange: ChangeEventHandler<HTMLInputElement> = event => {
    const file = event.target.files?.[0];
    if (file) {
      setCocktailImg(file); // or setCocktailImg(URL.createObjectURL(file));
    }
  };

  const handleGlass = (glass: IGlass) => {
    setGlass(glass);
  };

  const handleCategorySelect = (type: string, value: string) => {
    if (categories.includes(value)) {
      return;
    }
    setCategories(prevState => [...prevState, value]);
  };

  const handleDescription: ChangeEventHandler<HTMLTextAreaElement> = event => {
    setDescription(event.target.value);
  };

  const handleRecipeSteps: ChangeEventHandler<HTMLTextAreaElement> = event => {
    setRecipe(event.target.value);
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

  const handleSubmit: FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();
    // TODO: check all required fields and send message what missed
    const data = {
      name,
      cocktailImg,
      glass,
      categories,
      description,
      recipe,
      ingredients,
    };
    console.log('data all', data);
    // reset();
  };

  const reset = () => {
    setName('');
    setCocktailImg(null);
    if (initialGlass) setGlass(initialGlass);
    setCategories([]);
    setDescription('');
    setRecipe('');
    setIngredients([firstIngredient]);
  };

  // TODO: add backdrop close select modal for ingredients selects
  const handleClickBackdrop: MouseEventHandler<HTMLFormElement> = event => {
    const select = event.target as Element;
    const isOutsideCategorySelect =
      select.closest('div')?.getAttribute('name') !== 'categorySelect';
    if (categoriesSelectIsOpen && isOutsideCategorySelect) {
      setCategoriesSelectIsOpen(false);
    }
  };

  return (
    <>
      {glass && (
        <FormStyled onClick={handleClickBackdrop} onSubmit={handleSubmit}>
          <Box display="flex" alignItems="center" gridGap={2} mb={4}>
            <Input
              changeInput={handleChangeName}
              placeholder="Create cocktail"
              name="name"
              value={name}
            />
            <InputFile
              changeInput={handleImgChange}
              name="cocktailImg"
              id="file"
            />
          </Box>

          <Glass onChoose={handleGlass} currentGlass={glass} />
          <Categories
            categoriesSelectIsOpen={categoriesSelectIsOpen}
            openSelect={() => {
              setCategoriesSelectIsOpen(true);
            }}
            closeSelect={() => {
              setCategoriesSelectIsOpen(false);
            }}
            categories={categories}
            handleCategorySelect={handleCategorySelect}
          />
          <Textarea
            changeInput={handleDescription}
            placeholder="cocktail description"
            value={description}
            name="cocktailDescription"
          />
          <Textarea
            label="Preparation steps"
            changeInput={handleRecipeSteps}
            placeholder="1.Put some ice into a shaker"
            value={recipe}
            name="cocktailRecipe"
          />
          <Ingredients
            ingredients={ingredients}
            handleRecipeIngredient={handleRecipeIngredient}
            addIngredient={addIngredient}
            deleteIngredient={deleteIngredient}
          />
          <FormButton>Save</FormButton>
        </FormStyled>
      )}
    </>
  );
};

export default CreateCocktail;
