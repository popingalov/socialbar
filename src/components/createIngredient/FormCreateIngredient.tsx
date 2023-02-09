import { ContainerCreateIngridient } from './FormCreateIngridient.styled';
import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import SelectMenu from './select/select';
import FormIngridient from './form/formIngridient';

import Loader from 'components/loader';
import { useAddIngredientMutation } from '../../redux/api/ingredientApi';

const FormCreateIngredient: React.FC = () => {
  const [ingredientName, setIngredientName] = useState<string>('');
  const [ingredientImg, setIngredientImg] = useState<string>('');
  const [ingredientDescription, setIngredientDescription] =
    useState<string>('');
  const [open, setOpen] = useState<boolean>(false);
  const [textCategory, setTextCategory] = useState<string>('Strong alcohol');

  // const dispatch = useDispatch();
  const [adding] = useAddIngredientMutation();

  const handleShowMenu = () => setOpen(isOpen => !isOpen);

  const handleChoose = async (event: any) => {
    const chooseText = await event.target.innerText;
    try {
      // console.log('event.target.innerText:', event.target.innerText);
      setOpen(isOpen => !isOpen);
    } catch (error: any) {
      throw new Error(error);
    }
    setTextCategory(chooseText);
  };

  const handleInputChange = (event: any) => {
    event.preventDefault();
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'ingredientName':
        setIngredientName(value);
        break;
      case 'ingredientImg':
        setIngredientImg(value);
        break;
      case 'ingredientDescription':
        setIngredientDescription(value);
        break;
      case 'textCategory':
        setTextCategory(value);
        break;
      default:
        return;
    }
  };

  const ingredient = {
    title: ingredientName,
    description: ingredientDescription,
    picture: ingredientImg,
    ingredientImg,
    category: textCategory,
  };

  const addIngredientHandle = async () => {
    try {
      const add = await adding(ingredient);
      console.log('add:', add);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmitForm = (event: any) => {
    event.preventDefault();
    addIngredientHandle();
    reset();
  };

  const reset = () => {
    setIngredientName('');
    setIngredientImg('');
    setTextCategory('Strong alcohol');
    setIngredientDescription('');
  };

  // -----------------------------

  if (!ingredient) return <Loader isLoading={!ingredient} />;
  // -----------------------------

  return (
    <>
      <ContainerCreateIngridient>
        <FormIngridient
          changeInput={handleInputChange}
          ingredientName={ingredientName}
          ingredientImg={ingredientImg}
          ingredientDescription={ingredientDescription}
          submitForm={handleSubmitForm}
        >
          <SelectMenu
            text={textCategory}
            isMenuOpen={open}
            clickFunction={handleShowMenu}
            chooseFunction={handleChoose}
          />
        </FormIngridient>
      </ContainerCreateIngridient>
      <ul>{/* <li>{title}</li> */}</ul>
    </>
  );
};
export default FormCreateIngredient;
