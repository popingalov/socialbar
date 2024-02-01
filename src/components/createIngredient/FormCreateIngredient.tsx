import React, { useState } from 'react';

import { useNavigate } from 'react-router';

import { useAddIngredientMutation } from '../../redux/api/ingredientApi';
import Loader from 'components/loader/Loader';
import PreviewImg from 'components/previewImg/PreviewImg';

import NewIngredientForm from 'components/newIngredientForm/NewIngredientForm';

import Notification from 'components/notification';

const FormCreateIngredient: React.FC = () => {
  const [ingredientName, setIngredientName] = useState<string>('');
  const [ingredientImg, setIngredientImg] = useState<string>('');
  const [ingredientDescription, setIngredientDescription] =
    useState<string>('');
  const [open, setOpen] = useState<boolean>(false);
  const [textCategory, setTextCategory] = useState<string>('Strong alcohol');

  const [adding, { isLoading: isAddingIngredient }] =
    useAddIngredientMutation();

  const [showNotification, setShowNotification] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleShowMenu = () => setOpen(isOpen => !isOpen);

  const handleChoose: React.MouseEventHandler<HTMLLabelElement> = event => {
    if (!(event.target instanceof HTMLElement)) return;
    const chooseText = (event.target as HTMLElement).innerText;
    handleShowMenu();
    setTextCategory(chooseText);
  };

  const handleInputChange = (event: React.FormEvent<HTMLFormElement>) => {
    if (!(event.currentTarget instanceof HTMLElement)) return;
    const files = (event.target as HTMLInputElement).files;
    console.log('files', files);
    if (files) {
      const newFile = files[0];
      if (
        newFile.type === 'video/mp4' ||
        newFile.type === 'audio/mpeg' ||
        newFile.type === 'text/plain' ||
        newFile.type === 'application/json' ||
        newFile.type === 'application/pdf'
      ) {
        return setShowNotification(true);
      } else {
        const reader = new FileReader();
        reader.onload = function (e: any) {
          const oldImg = document.getElementById('old');
          const value = e.target.result;
          PreviewImg(oldImg, value);
        };
        reader.readAsDataURL(newFile);
      }
    }
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

  const clickButton = () => {
    setShowNotification(false);
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
    // reset();
  };

  // const reset = () => {
  //   setIngredientName('');
  //   setIngredientImg('');
  //   setTextCategory('Strong alcohol');
  //   setIngredientDescription('');
  // };

  return (
    <>
      <Loader isLoading={isAddingIngredient} />
      <NewIngredientForm
        handleInputChange={handleInputChange}
        ingredientName={ingredientName}
        ingredientImg={ingredientImg}
        ingredientDescription={ingredientDescription}
        handleSubmitForm={handleSubmitForm}
        textCategory={textCategory}
        open={open}
        handleShowMenu={handleShowMenu}
        handleChoose={handleChoose}
      />
      {showNotification && (
        <Notification
          message={'Add correct photo!'}
          buttonSelect={['ok']}
          handleClick={clickButton}
        />
      )}
    </>
  );
};
export default FormCreateIngredient;
