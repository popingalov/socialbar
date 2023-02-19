import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkStyled = styled(Link)`
  display: flex;
  align-items: flex-start;
  width: 90%;
  margin: 0;
  padding: ${({ theme }) => theme.space[1]}px;
  font-size: 0.9rem;

  color: ${({ theme }) => theme.colors.mainText};
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;

  &:hover,
  :focus,
  :focus:hover {
    background-color: ${({ theme }) => theme.colors.activeLinkBackgroundColor};
    /* color: ${({ theme }) => theme.colors.lightText}; */

    outline: none;
  }
`;
