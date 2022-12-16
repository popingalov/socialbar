import styled from 'styled-components';

export const Title = styled.h2`
  text-transform: capitalize;
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  max-width: 100px;
  margin: 0 auto;
  margin-bottom: ${({ theme }) => theme.space[4]}px;
`;

interface DescProp {
  showMore: boolean;
}

export const Decs = styled.p<DescProp>`
  height: ${p => (p.showMore ? 'auto' : '48px')};
  overflow: hidden;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.secondaryText};
`;

interface BtnProps {
  isShop: boolean | undefined;
}

export const ButtonBase = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  margin-left: ${({ theme }) => theme.space[1]}px;
  cursor: pointer;
`;

export const EditBtn = styled(ButtonBase)`
  color: ${({ theme }) => theme.colors.secondaryText};
`;

export const CartBtn = styled(ButtonBase)<BtnProps>`
  color: ${({ theme, isShop }) =>
    isShop ? theme.colors.link : theme.colors.secondaryText};
`;

export const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  margin-left: 10px;
`;

export const ShowMoreBtn = styled(ButtonBase)`
  margin-left: auto;
  display: block;
`;
