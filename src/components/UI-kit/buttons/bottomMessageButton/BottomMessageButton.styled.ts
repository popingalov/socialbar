import styled from 'styled-components';

export const ButtonStyled = styled.button`
  border: none;
  padding: 0;
  margin: 0;
  background-color: transparent;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.modal};
  font-size: inherit;
  font-family: inherit;
  border-bottom: 1px solid ${({ theme }) => theme.colors.modal};

  transition: color 250ms ${p => p.theme.transitionTiming},
    border-color 250ms ${p => p.theme.transitionTiming};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.secondaryAccent};
    border-color: ${p => p.theme.colors.secondaryAccent};
  }
`;
