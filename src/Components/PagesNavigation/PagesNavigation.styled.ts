import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationListStyled = styled.ul`
  background-color: ${p => p.theme.colors.accentBackgroundColor};
  display: flex;
  scroll-behavior: smooth;
  overflow-x: scroll;
  text-align: center;
`;

export const Link = styled(NavLink)`
  display: block;
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;
  white-space: nowrap;
  color: ${p => p.theme.colors.lightText};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeight.bold};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border-bottom: 3px solid ${p => p.theme.colors.accentBackgroundColor};
  transition: color 250ms ${p => p.theme.transitionTiming},
    background-color 250ms ${p => p.theme.transitionTiming},
    border-color 250ms ${p => p.theme.transitionTiming};

  &:not(:last-of-type) {
    margin-right: ${p => p.theme.space[4]}px;
  }

  &:hover:not(.active),
  &:focus:not(.active) {
    background-color: ${p => p.theme.colors.accent};
    border-color: ${p => p.theme.colors.accent};
  }

  &.active {
    border-bottom: 3px solid ${p => p.theme.colors.accent};
  }
`;
