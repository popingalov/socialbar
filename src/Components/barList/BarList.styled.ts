import styled from 'styled-components';

export const BarListStyled = styled.ul`
  /* background-color: ${p => p.theme.colors.secondaryBackgroundColor}; */
  display: flex;
  flex-direction: column;

  a {
    display: block;
    padding-top: ${p => p.theme.space[2]}px;
    padding-bottom: ${p => p.theme.space[2]}px;
    padding-left: ${p => p.theme.space[3]}px;
    padding-right: ${p => p.theme.space[3]}px;
    border-bottom: 1px solid ${p => p.theme.colors.borderBottom};
  }
`;
