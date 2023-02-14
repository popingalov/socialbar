import styled from 'styled-components';

export const FormStyled = styled.form`
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;
  background-color: ${({ theme }) => theme.colors.mainBackgroundColor};
`;
