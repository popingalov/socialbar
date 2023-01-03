import styled from 'styled-components';

export const Title = styled.p`
  text-transform: capitalize;
  margin-bottom: 2px;
`;

export const Description = styled.p`
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.secondaryText};
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;
