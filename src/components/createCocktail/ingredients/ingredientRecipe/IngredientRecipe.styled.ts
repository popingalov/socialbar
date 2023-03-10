import styled from 'styled-components';

export const RecipeIngredient = styled.div`
  padding-top: ${({ theme }) => theme.space[3]}px;
  padding-bottom: ${({ theme }) => theme.space[3]}px;
  padding-left: ${({ theme }) => theme.space[3]}px;
  padding-right: ${({ theme }) => theme.space[3]}px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[2]}px;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: 4px;
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.space[1]}px;
  right: ${({ theme }) => theme.space[1]}px;
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
    width: 20px;
    height: 20px;
  }
`;

export const MeasureBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space[2]}px;
  max-width: 80px;
`;
