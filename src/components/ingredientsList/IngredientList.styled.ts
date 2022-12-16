import styled from 'styled-components';

export const ListItem = styled.li`
  a {
    display: block;
    padding-top: ${p => p.theme.space[2]}px;
    padding-bottom: ${p => p.theme.space[2]}px;
    padding-left: ${p => p.theme.space[3]}px;
    padding-right: calc(${p => p.theme.space[4]}px - 8px);
    border-bottom: 1px solid ${p => p.theme.colors.borderBottom};
  }

  img {
    width: 32px;
    height: 32px;
    margin-right: ${p => p.theme.space[3]}px;
  }
`;
