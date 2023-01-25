import styled from 'styled-components';

export const Title = styled.h2`
  text-transform: capitalize;
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

interface BtnProps {
  favorite: boolean;
}

export const ButtonBase = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EditBtn = styled(ButtonBase)`
  color: ${({ theme }) => theme.colors.secondaryText};
`;

export const FavoriteBtn = styled(ButtonBase)<BtnProps>`
  color: ${({ theme, favorite }) =>
    favorite ? theme.colors.accent : theme.colors.secondaryText};
`;

export const Image = styled.img`
  display: block;
  max-width: 150px;
  margin: 0 auto;
  margin-bottom: ${({ theme }) => theme.space[4]}px;
`;

export const Decs = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.secondaryText};
  margin-bottom: ${({ theme }) => theme.space[4]}px;
`;

export const ExtraInfo = styled.p`
  color: ${({ theme }) => theme.colors.secondaryText};
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;
