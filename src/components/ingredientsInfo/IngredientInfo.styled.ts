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

export const Description = styled.p<DescProp>`
  max-height: ${p => !p.showMore && '45px'};
  height: ${p => p.showMore && 'auto'};
  overflow: hidden;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.secondaryText};
`;

export const ItemButton = styled.li`
  width: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface BtnProps {
  isShopping: boolean | undefined;
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

export const CartBtn = styled(ButtonBase)<BtnProps>`
  color: ${({ theme, isShopping }) =>
    isShopping ? theme.colors.link : theme.colors.secondaryText};
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
