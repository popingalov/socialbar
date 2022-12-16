import styled from 'styled-components';

export const IconButtonStyled = styled.button`
  margin: 0;
  padding: ${({ theme }) => theme.space[1]}px;
  border: none;
  font: inherit;
  cursor: pointer;
  background-color: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.mainText};
  opacity: 0.6;
  transition: opacity 250ms ${({ theme }) => theme.transitionTiming};
  outline: none;

  :hover {
    opacity: 1;
  }

  :disabled {
    opacity: 0.2;
  }
`;
