import styled from 'styled-components';

export const BarListStyled = styled.ul`
  display: flex;
  flex-direction: column;

  a {
    display: block;
    padding-top: ${p => p.theme.space[2]}px;
    padding-bottom: ${p => p.theme.space[2]}px;
    padding-left: ${p => p.theme.space[3]}px;
    padding-right: calc(${p => p.theme.space[4]}px - 8px);
    border-bottom: 1px solid ${p => p.theme.colors.borderBottom};
  }

  img {
    margin-right: ${p => p.theme.space[3]}px;
    display: block;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    border: 1px solid rgba(0, 0, 0, 0.13);
    object-fit: contain;
    background-color: ${({ theme }) => theme.colors.white};
  }
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
