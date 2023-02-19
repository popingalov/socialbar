import styled from 'styled-components';

export const Form = styled.form`
  text-transform: capitalize;
`;
export const ContainerIngridientName = styled.div`
  margin-bottom: ${({ theme }) => theme.space[3]}px;
  display: flex;
`;
export const InputIngridientName = styled.input`
  background: transparent;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.borderBottom};
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  color: ${({ theme }) => theme.colors.secondaryText};
  padding-bottom: ${({ theme }) => theme.space[1]}px;
  padding-left: ${({ theme }) => theme.space[1]}px;
  padding-right: ${({ theme }) => theme.space[1]}px;
  margin-right: ${({ theme }) => theme.space[2]}px;
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
export const ContainerCategory = styled.div`
  margin-bottom: ${({ theme }) => theme.space[3]}px;
  display: flex;
  padding-left: ${({ theme }) => theme.space[1]}px;
`;
export const Category = styled.p`
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  padding-right: ${({ theme }) => theme.space[3]}px;
  color: ${({ theme }) => theme.colors.secondaryText};
`;
export const IngridientDescription = styled.textarea`
  margin-bottom: ${({ theme }) => theme.space[3]}px;
  display: flex;
  border: none;
  width: 100%;
  height: 80px;
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-family: inherit;
  padding: ${({ theme }) => theme.space[1]}px;
  color: ${({ theme }) => theme.colors.secondaryText};
  background: ${({ theme }) => theme.colors.backdropColor};
  overflow: hidden;
  outline: none;
`;
export const FormButton = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.space[2]}px;
  display: flex;
  text-transform: uppercase;
  justify-content: center;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-family: inherit;
  color: ${({ theme }) => theme.colors.mainBackgroundColor};
  background: ${({ theme }) => theme.colors.accentBackgroundColor};
  :hover {
    background: ${({ theme }) => theme.colors.accent};
  }
`;
