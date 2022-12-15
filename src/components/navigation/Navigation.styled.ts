import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationStyled = styled.nav`
  padding: ${p => p.theme.space[2]}px;
`;

export const NavItem = styled.li<{ settings: boolean }>`
  padding-top: ${p => (p.settings ? p.theme.space[2] : p.theme.space[0])}px;
  padding-bottom: ${p => p.theme.space[1]}px;
  border-top: ${p =>
    p.settings ? `1px solid ${p.theme.colors.borderBottom}` : 'none'};
`;

export const Link = styled(NavLink)`
  display: block;
  padding: ${p => p.theme.space[2]}px;
  text-decoration: none;
  color: ${p => p.theme.colors.mainText};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: 500;
  transition: color 250ms ${p => p.theme.transitionTiming};
  border-radius: 4px;

  &:not(:last-of-type) {
    margin-right: ${p => p.theme.space[4]}px;
  }

  &.active {
    background-color: ${p => p.theme.colors.activeLinkBackgroundColor};
    color: ${p => p.theme.colors.accent};
  }

  &:hover:not(.active),
  &:focus:not(.active) {
    background-color: ${p => p.theme.colors.hoverLinkBackgroundColor};
  }
`;
