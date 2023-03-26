import styled from 'styled-components';

export const ButtonStyled = styled.button<{ ref: any }>`
  padding-left: ${({ theme }) => theme.space[3]}px;
  padding-right: ${({ theme }) => theme.space[3]}px;
  padding-top: ${({ theme }) => theme.space[2]}px;
  padding-bottom: ${({ theme }) => theme.space[2]}px;
  display: flex;
  align-items: center;

  text-align: left;
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSizes.s};
  letter-spacing: 0.03em;
  font-weight: inherit;
  background-color: transparent;
  border: none;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.mainText};
  cursor: pointer;
  transition: 0.3s ease;

  svg {
    margin-left: ${({ theme }) => theme.space[3]}px;
  }
`;
