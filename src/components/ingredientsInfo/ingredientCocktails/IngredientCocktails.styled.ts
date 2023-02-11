import styled from 'styled-components';

export const AdditionalInfoTitle = styled.p`
  padding-left: ${({ theme }) => theme.space[3]}px;
  padding-right: ${({ theme }) => theme.space[3]}px;
  padding-bottom: ${({ theme }) => theme.space[2]}px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderBottom};
  background-color: ${({ theme }) => theme.colors.mainBackgroundColor};
`;
