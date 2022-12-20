import styled from 'styled-components';

export const MenuHolder = styled.div`
  display: flex;
`;

export const PageName = styled.p`
  display: flex;
  align-items: center;
  margin-left: ${({ theme }) => theme.space[3]}px;
  color: ${({ theme }) => theme.colors.lightText};
`;
