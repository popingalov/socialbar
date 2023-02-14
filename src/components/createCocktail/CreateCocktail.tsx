import { FormStyled } from './CreateCocktail.styled';
import Input from 'components/UI-kit/form/input';
import Textarea from 'components/UI-kit/form/textarea/Textarea';
import FormButton from 'components/UI-kit/buttons/formButton';
import Box from 'components/box';
import Select from 'components/UI-kit/select';
import { useGetCategoriesQuery } from 'redux/api/manualApi';
import {
  ChangeEventHandler,
  FormEventHandler,
  useEffect,
  useState,
} from 'react';
import IngredientRecipe from 'components/UI-kit/form/ingredientRecipe';
import InputFile from 'components/UI-kit/form/inputFile';
import { IRecipeIngredient } from 'types/recireIngredient';

const CreateCocktail = () => {
  const [dataLS, setDataLS] = useState(null); // TODO: only for template LocalStorage

  const { data } = useGetCategoriesQuery();
  const cocktailCategories = data?.cocktails.map(({ title }) => title);
  const [cocktailName, setCocktailName] = useState('');

  const [categories, setCategories] = useState([]); //TODO: array of categories
  const [category, setCategory] = useState('Nothing choosed');
  const [description, setDescription] = useState('');
  const [preparation, setPreparation] = useState('');

  const [ingredients, setIngredients] = useState<IRecipeIngredient[]>([
    {
      name: '',
      quantity: '',
      measure: '',
      garnish: false,
      optional: false,
    },
  ]);

  useEffect(() => {
    // Перевірка локального сховища при монтуванні компонента
    const storedData = localStorage.getItem('myData');
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
    index,
    name,
    value,
    checked,
  }: {
    index: number;
    name: string;
    value: string;
    checked: boolean;
  }) => {
    console.log('index', index);
    console.log('value', value);
    console.log('checked', checked);

    let data: IRecipeIngredient[] = [...ingredients];

    data[index][name] = value ? value : checked;
    console.log('data[index][name]', data[index][name]);

    setIngredients(data);
  };

  const addFields = () => {
    let newIngredient: IRecipeIngredient = {
      name: '',
      quantity: '',
      measure: '',
      garnish: false,
      optional: false,
    };
    setIngredients([...ingredients, newIngredient]);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();
    console.log(ingredients);
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <button type="button" onClick={addFields}>
        Add More ingredient
      </button>

      {ingredients.map((_, index) => {
        return (
          <IngredientRecipe
            key={index}
            index={index}
            onChange={handleRecipeIngredient}
          />
        );
      })}

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
      <FormButton>Save</FormButton>
    </FormStyled>
  );
};

export default CreateCocktail;
