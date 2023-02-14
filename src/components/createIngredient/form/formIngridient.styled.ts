import styled from 'styled-components';

export const Form = styled.form`
  text-transform: capitalize;
`;
export const ContainerIngridientName = styled.div`
  margin-bottom: ${({ theme }) => theme.space[4]}px;
  display: flex;
`;
export const InputIngridientName = styled.input`
  margin-right: ${({ theme }) => theme.space[3]}px;
  padding-top: ${({ theme }) => theme.space[2]}px;
  padding-bottom: ${({ theme }) => theme.space[2]}px;
  background: transparent;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.borderBottom};
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-family: inherit;
  width: 100%;
  outline: none;

  ::placeholder {
    ${({ theme }) => theme.colors.secondaryText};
  }
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
  display: flex;
  margin-bottom: ${({ theme }) => theme.space[4]}px;
`;
export const Category = styled.p`
  margin-right: ${({ theme }) => theme.space[3]}px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-family: inherit;
  color: ${({ theme }) => theme.colors.mainText};
`;

export const IngridientDescription = styled.textarea`
  margin-bottom: ${({ theme }) => theme.space[4]}px;
  padding-top: ${({ theme }) => theme.space[1]}px;
  padding-bottom: ${({ theme }) => theme.space[1]}px;
  display: flex;
  border: none;
  width: 100%;
  height: 200px;
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-family: inherit;
  color: ${({ theme }) => theme.colors.secondaryText};
  background: ${({ theme }) => theme.colors.modal};
  overflow: hidden;
  outline: none;
  border-radius: 4px;

  ::placeholder {
    ${({ theme }) => theme.colors.secondaryText};
  }
  /* :focus {
    height: 200px;
    outline: none;
  } */
`;

export const FormButton = styled.button`
  width: 100%;
  padding-top: ${({ theme }) => theme.space[2]}px;
  padding-bottom: ${({ theme }) => theme.space[2]}px;
  display: flex;
  text-transform: capitalize;
  justify-content: center;
  border: none;
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${({ theme }) => theme.colors.lightText};
  background: ${({ theme }) => theme.colors.accent};
  cursor: pointer;
  border-radius: 4px;
`;
