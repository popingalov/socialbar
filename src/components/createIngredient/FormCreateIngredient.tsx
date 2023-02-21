import { ContainerCreateIngridient } from './FormCreateIngridient.styled';
import React, { useState } from 'react';

import { useNavigate } from 'react-router';
import SelectMenu from './select/select';
import FormIngridient from './form/formIngridient';

import { useAddIngredientMutation } from '../../redux/api/ingredientApi';
import Loader from 'components/loader/Loader';

const FormCreateIngredient: React.FC = () => {
  const [ingredientName, setIngredientName] = useState<string>('');
  const [ingredientImg, setIngredientImg] = useState<string>('');
  const [ingredientDescription, setIngredientDescription] =
    useState<string>('');
  const [open, setOpen] = useState<boolean>(false);
  const [textCategory, setTextCategory] = useState<string>('Strong alcohol');

  const [adding, { isLoading: isAddingIngredient }] =
    useAddIngredientMutation();

  const navigate = useNavigate();

  const handleShowMenu = () => setOpen(isOpen => !isOpen);

  const handleChoose: React.MouseEventHandler<
    HTMLLabelElement
  > = async event => {
    if (!(event.target instanceof HTMLElement)) return;
    const chooseText = await (event.target as HTMLElement).innerText;
    console.log(event);

    try {
      setOpen(isOpen => !isOpen);
    } catch (error: any) {
      throw new Error(error);
    }
    setTextCategory(chooseText);
  };

  const handleInputChange = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!(event.currentTarget instanceof HTMLElement)) return;
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'ingredientName':
        setIngredientName(value);
        break;
      case 'ingredientImg':
        setIngredientImg(event.currentTarget.files[0]);
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
  const addIngredientHandle = async () => {
    try {
      const respond = new FormData();
      respond.append('title', ingredientName);
      respond.append('description', ingredientDescription);
      respond.append('picture', ingredientImg);
      respond.append('category', textCategory);
      const newIngredient = (await adding(respond)) as { data: { id: string } };
      console.log(newIngredient);
      const id: string = newIngredient.data.id;
      if (!id) {
        return <Loader isLoading={!id} />;
      }
      navigate(`/ingredients/${id}`);
    } catch (error: any) {
      console.log(error);
    }
  };

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
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

  return (
    <>
      <Loader isLoading={isAddingIngredient} />
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
    </>
  );
};
export default FormCreateIngredient;
