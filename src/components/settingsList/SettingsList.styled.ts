import styled from 'styled-components';

export const Options = styled.ul`
  width: 100%;
`;

export const Option = styled.li<{ isActive?: boolean; name?: string }>`
  display: flex;
  align-items: flex-start;
  width: 90%;
  margin: 0;
  padding: ${({ theme }) => theme.space[1]}px;
  font-size: 0.9rem;
  font-weight: ${p => (p.isActive ? '500' : '400')};
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.accent : theme.colors.mainText};
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;

  :hover,
  :focus,
  :focus:hover {
    background-color: ${({ theme }) => theme.colors.hoverLinkBackgroundColor};
    color: ${({ theme }) => theme.colors.lightText};
    outline: none;
  }
`;
