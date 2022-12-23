import styled from 'styled-components';

export const Wrapper = styled.button<{ ref: any }>`
  margin: 0;
  padding: ${p => p.theme.space[2]}px;
  border: none;
  font: inherit;
  cursor: pointer;
  font-size: 0;
  background-color: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${p => p.theme.colors.lightText};
  transition: opacity 250ms ${p => p.theme.transitionTiming};
  outline: none;

  :hover,
  :focus {
    color: ${({ theme }) => theme.colors.secondaryAccent};
  }
`;
