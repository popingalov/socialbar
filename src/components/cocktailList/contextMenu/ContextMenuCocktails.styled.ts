import styled from 'styled-components';

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: ${({ theme }) => theme.space[2]}px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  background-color: none;
  text-transform: capitalize;
`;
