import styled from 'styled-components';

export const CategoriesListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space[1]}px;

  li {
    position: relative;
    font-size: ${p => p.theme.fontSizes.xs};
    padding-left: ${({ theme }) => theme.space[1]}px;
    padding-right: ${({ theme }) => theme.space[3]}px;
    padding-top: ${({ theme }) => theme.space[1]}px;
    padding-bottom: ${({ theme }) => theme.space[1]}px;

    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.accent};
  }
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  margin: 0;
  padding: ${({ theme }) => theme.space[1]}px;
  border: none;
  font: inherit;
  cursor: pointer;
  background-color: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${p => p.theme.colors.mainText};
  opacity: 0.6;
  transition: opacity 250ms ${p => p.theme.transitionTiming};
  outline: none;

  :hover {
    opacity: 1;
  }

  :disabled {
    opacity: 0.2;
  }

  svg {
    width: 10px;
    height: 10px;
  }
`;

export const ErrorText = styled.p`
  color: red;
  font-size: ${p => p.theme.fontSizes.xs};
`;
