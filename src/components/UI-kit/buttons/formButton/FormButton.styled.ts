import styled from 'styled-components';

export const FormButtonStyled = styled.button`
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
