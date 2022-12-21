import styled from 'styled-components';

export const IconButtonStyled = styled.button`
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
