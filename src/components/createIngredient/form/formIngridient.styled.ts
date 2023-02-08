import styled from 'styled-components';

export const Form = styled.form`
  text-transform: capitalize;
`;
export const ContainerIngridientName = styled.div`
  margin-bottom: 20px;
  display: flex;
`;
export const InputIngridientName = styled.input`
  background: transparent;
  border: none;
  border-bottom: 2px solid #a9a9a9;
  font-size: 15px;
  font-family: 'Montserrat', sans- serif;
  padding-bottom: 5px;
  margin-right: 20px;
  width: 100%;
  outline: none;
`;
export const LabelButtonAddPhoto = styled.label`
  cursor: pointer;
  width: 20px;
  height: 20px;
`;
export const ButtonAddPhoto = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;
export const ImageButton = styled.img`
  width: 20px;
  height: 20px;
`;
export const ContainerCategory = styled.div`
  margin-top: 15px;
  display: flex;
  margin-bottom: 20px;
`;
export const Category = styled.p`
  font-size: 15px;
  font-family: 'Montserrat', sans- serif;
  margin-right: 15px;
  color: #696969;
`;
export const IngridientDescription = styled.textarea`
  margin-bottom: 20px;
  display: flex;
  border: none;
  width: 100%;
  height: 60px;
  font-size: 15px;
  font-family: 'Montserrat', sans- serif;
  color: #696969;
  background: #dcdcdc;
  overflow: hidden;
  outline: none;
  /* :focus {
    height: 200px;
    outline: none;
  } */
`;
export const FormButton = styled.button`
  width: 100%;
  padding: 10px;
  display: flex;
  text-transform: uppercase;
  justify-content: center;
  border: none;
  font-size: 15px;
  font-family: 'Montserrat', sans- serif;
  color: #ffffff;
  background: #3aafa9;
`;
