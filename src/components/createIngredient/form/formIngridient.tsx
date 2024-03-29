import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Form,
  ContainerIngridientName,
  InputIngridientName,
  LabelButtonAddPhoto,
  ButtonAddPhoto,
  ContainerCategory,
  Category,
  IngridientDescription,
  FormButton,
  ContainerImg,
} from './formIngridient.styled';

import { FaCamera } from 'react-icons/fa';

interface IProps {
  children?: React.ReactNode;
  changeInput: any;
  ingredientName: string;
  ingredientImg: string;
  ingredientDescription: string;
  submitForm: any;
  newPreviewPhoto?: any;
}

const FormIngridient: React.FC<IProps> = ({
  children,
  changeInput,
  ingredientName,
  ingredientDescription,
  submitForm,
  newPreviewPhoto,
}) => {
  const { t } = useTranslation();
  const ingredientNamePlaceholder = t('createIngredient.ingredientName');
  const descriptionPlaceholder = t('createIngredient.description');

  return (
    <>
      <Form id="form" encType="multipart/form-data" onSubmit={submitForm}>
        <ContainerIngridientName>
          <InputIngridientName
            onChange={changeInput}
            placeholder={ingredientNamePlaceholder}
            value={ingredientName}
            type="text"
            name="ingredientName"
            required
          ></InputIngridientName>
          <LabelButtonAddPhoto>
            <ButtonAddPhoto
              onChange={changeInput}
              placeholder=""
              type="file"
              name="ingredientImg"
              id="file"
              accept="image/*"
            ></ButtonAddPhoto>
            {!newPreviewPhoto ? (
              <FaCamera size={40} />
            ) : (
              <ContainerImg id="preview-photo">
                <img id="old" alt="preview" />
              </ContainerImg>
            )}
          </LabelButtonAddPhoto>
        </ContainerIngridientName>
        <ContainerCategory>
          <Category>{t('createIngredient.category')}</Category>
          {children}
        </ContainerCategory>
        <IngridientDescription
          onChange={changeInput}
          placeholder={descriptionPlaceholder}
          value={ingredientDescription}
          name="ingredientDescription"
          form="form"
          required
        ></IngridientDescription>
        <FormButton type="submit" onChange={submitForm}>
          {t('createIngredient.save')}
        </FormButton>
      </Form>
    </>
  );
};

export default FormIngridient;
