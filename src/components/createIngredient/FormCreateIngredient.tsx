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

  const handleChoose: React.MouseEventHandler<HTMLLabelElement> = event => {
    if (!(event.target instanceof HTMLElement)) return;
    const chooseText = (event.target as HTMLElement).innerText;
    setOpen(isOpen => !isOpen);
    setTextCategory(chooseText);
  };

  const CreatePreviewImg = (addImg: HTMLElement | null, target: string) => {
    if (!addImg) {
      const firstImg = document.createElement('img');
      firstImg.setAttribute('src', `${target}`);
      firstImg.setAttribute('id', 'old');
      firstImg.setAttribute('alt', 'preview');
      document.getElementById('preview-photo')?.appendChild(firstImg);
    } else {
      const previewImg = document.createElement('img');
      previewImg.setAttribute('src', `${target}`);
      previewImg.setAttribute('id', 'old');
      previewImg.setAttribute('alt', 'preview');
      document
        .getElementById('preview-photo')
        ?.replaceChild(previewImg, addImg);
    }
  };

  const handleInputChange = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!(event.currentTarget instanceof HTMLElement)) return;
    // Add preview img
    const target = event.target as HTMLInputElement;
    const files = target.files;
    if (files) {
      const newFile = files[0];
      const reader = new FileReader();
      reader.onload = function (e: any) {
        const oldImg = document.getElementById('old');
        const value = e.target.result;
        CreatePreviewImg(oldImg, value);
      };
      reader.readAsDataURL(newFile);
    }
    // --------------
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'ingredientName':
        setIngredientName(value);
        break;
      case 'ingredientImg':
        setIngredientImg(event.currentTarget.files[0]);
        console.log(ingredientImg);

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
          newPreviewPhoto={ingredientImg}
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
