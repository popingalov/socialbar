import styled from 'styled-components';

export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.accentBackgroundColor};
`;

export const MenuHolder = styled.div`
  display: flex;
`;
