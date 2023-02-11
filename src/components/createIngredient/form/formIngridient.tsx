import React from 'react';

import {
  Form,
  ContainerIngridientName,
  InputIngridientName,
  LabelButtonAddPhoto,
  ButtonAddPhoto,
  ImageButton,
  ContainerCategory,
  Category,
  IngridientDescription,
  FormButton,
} from './formIngridient.styled';

import cameraSvg from '../../../assets/images/newIngridient/camera-6728.svg';

interface IProps {
  children?: React.ReactNode;
  changeInput: any;
  ingredientName: string;
  ingredientImg: string;
  ingredientDescription: string;
  submitForm: any;
}

const FormIngridient: React.FC<IProps> = ({
  children,
  changeInput,
  ingredientName,
  ingredientImg,
  ingredientDescription,
  submitForm,
}) => {
  return (
    <>
      <Form id="form" encType="multipart/form-data" onSubmit={submitForm}>
        <ContainerIngridientName>
          <InputIngridientName
            onChange={changeInput}
            placeholder="Ingredient name"
            value={ingredientName}
            type="text"
            name="ingredientName"
            src={cameraSvg}
            required
          ></InputIngridientName>
          <LabelButtonAddPhoto>
            <ButtonAddPhoto
              onChange={changeInput}
              placeholder=""
              // value={ingredientImg}
              src={cameraSvg}
              type="file"
              name="ingredientImg"
              id="file"
              accept=".png, .jpg, .jpeg, .gif, .web"
            ></ButtonAddPhoto>
            <ImageButton src={cameraSvg} alt="icon person" />
          </LabelButtonAddPhoto>
        </ContainerIngridientName>
        <ContainerCategory>
          <Category>Category:</Category>
          {children}
        </ContainerCategory>
        <IngridientDescription
          onChange={changeInput}
          placeholder="Ingredient description"
          value={ingredientDescription}
          name="ingredientDescription"
          form="form"
          required
        ></IngridientDescription>
        <FormButton type="submit" onChange={submitForm}>
          save
        </FormButton>
      </Form>
    </>
  );
};

export default FormIngridient;
