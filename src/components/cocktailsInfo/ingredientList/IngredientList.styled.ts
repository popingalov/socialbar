import styled from 'styled-components';

interface IngredientItemProps {
  isInMyBar: boolean;
}

export const IngredientItem = styled.li<IngredientItemProps>`
  padding: ${({ theme }) => `${theme.space[2]}px ${theme.space[3]}px`};
  background-color: ${({ isInMyBar, theme }) =>
    isInMyBar ? theme.colors.secondaryBackgroundColor : 'transparent'};
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.borderBottom}`};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]}px;
`;

export const IngredientImage = styled.img`
  display: block;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: ${({ theme }) => `1px solid ${theme.colors.borderBottom}`};
  object-fit: contain;
  background-color: #fff;
`;

export const IngredientName = styled.p`
  text-transform: capitalize;
  margin-bottom: 2px;
`;

export const IngredientQuantity = styled.p`
  color: ${({ theme }) => theme.colors.secondaryText};
`;
