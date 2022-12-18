import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationStyled = styled.ul`
  padding: ${({ theme }) => theme.space[2]}px;
`;

export const NavItem = styled.li<{ settings: boolean }>`
  padding-top: ${({ settings, theme }) =>
    settings ? theme.space[2] : theme.space[0]}px;
  padding-bottom: ${({ theme }) => theme.space[1]}px;
  border-top: ${({ settings, theme }) =>
    settings ? `1px solid ${theme.colors.borderBottom}` : 'none'};
`;

export const Link = styled(NavLink)`
  display: block;
  padding: ${({ theme }) => theme.space[2]}px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.mainText};
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: 500;
  transition: color 250ms ${({ theme }) => theme.transitionTiming};
  border-radius: 4px;

  &:not(:last-of-type) {
    margin-right: ${({ theme }) => theme.space[4]}px;
  }

  &.active {
    background-color: ${({ theme }) => theme.colors.activeLinkBackgroundColor};
    color: ${p => p.theme.colors.accent};
  }

  &:hover:not(.active),
  &:focus:not(.active) {
    background-color: ${({ theme }) => theme.colors.hoverLinkBackgroundColor};
  }
`;
