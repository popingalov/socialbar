import styled from 'styled-components';

export const RecipeIngredient = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[2]}px;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: 4px;
  margin-bottom: ${({ theme }) => theme.space[4]}px;
  padding-top: ${({ theme }) => theme.space[2]}px;
  padding-bottom: ${({ theme }) => theme.space[2]}px;
  padding-left: ${({ theme }) => theme.space[2]}px;
  padding-right: ${({ theme }) => theme.space[4]}px;
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
  padding: ${p => p.theme.space[1]}px;
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
    width: 20px;
    height: 20px;
  }
`;
