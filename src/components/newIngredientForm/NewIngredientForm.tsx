import React from 'react';

import { ContainerCreateIngridient } from './NewIngredientForm.styled';
import FormIngridient from '../createIngredient/form/formIngridient';
import SelectMenu from '../createIngredient/select/SelectMenu';

interface IProps {
  handleInputChange: Function;
  ingredientName: string;
  ingredientImg?: string | any;
  ingredientDescription: string;
  handleSubmitForm: Function;
  textCategory: string;
  open: boolean;
  handleShowMenu: () => void;
  handleChoose: Function;
}

const NewIngredientForm: React.FC<IProps> = ({
  handleInputChange,
  ingredientName,
  ingredientImg,
  ingredientDescription,
  handleSubmitForm,
  textCategory,
  open = false,
  handleShowMenu,
  handleChoose,
}) => {
  return (
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
  );
};
export default NewIngredientForm;
