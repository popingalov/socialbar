import styled from 'styled-components';

export const Wrapper = styled.button`
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
  opacity: 0.6;
  transition: opacity 250ms ${p => p.theme.transitionTiming};
  outline: none;

  /* :not(:last-of-type) {
    margin-right: ${({ theme }) => theme.space[1]}px;
  } */

  :hover,
  :focus {
    color: ${({ theme }) => theme.colors.secondaryAccent};
  }
`;
