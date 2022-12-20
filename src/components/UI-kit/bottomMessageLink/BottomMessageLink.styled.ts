import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkStyled = styled(Link)`
  background-color: transparent;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.accent};
  border-bottom: 1px solid ${({ theme }) => theme.colors.accent};

  transition: color 250ms ${p => p.theme.transitionTiming},
    border-color 250ms ${p => p.theme.transitionTiming};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.secondaryAccent};
    border-color: ${p => p.theme.colors.secondaryAccent};
  }
`;
